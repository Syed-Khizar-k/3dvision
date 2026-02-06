"use client";

import { useEffect, useRef, useState } from "react";
import { Maximize, ZoomIn, ZoomOut, Minimize, ShoppingBag } from "lucide-react";
import RenderModal from "./RenderModal";
import { GALLERY_PRODUCTS, GalleryProduct } from "./GalleryProducts";

export default function VirtualGalleryViewer() {
 const viewerRef = useRef<HTMLDivElement>(null);
 const containerRef = useRef<HTMLDivElement>(null);
 const pannellumViewerRef = useRef<any>(null);
 const [isLoading, setIsLoading] = useState(true);
 const [isPannellumLoaded, setIsPannellumLoaded] = useState(false);
 const [isFullscreen, setIsFullscreen] = useState(false);
 const [selectedProduct, setSelectedProduct] = useState<GalleryProduct | null>(
  null,
 );

 // Load Pannellum library dynamically from local installation
 useEffect(() => {
  const loadPannellum = async () => {
   try {
    // Import Pannellum CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/pannellum/pannellum.css";
    document.head.appendChild(link);

    // Import Pannellum JS
    const script = document.createElement("script");
    script.src = "/pannellum/pannellum.js";
    script.async = true;
    script.onload = () => {
     setIsPannellumLoaded(true);
    };
    script.onerror = () => {
     console.error("Failed to load Pannellum");
     setIsLoading(false);
    };
    document.head.appendChild(script);

    return () => {
     document.head.removeChild(script);
     document.head.removeChild(link);
    };
   } catch (error) {
    console.error("Error loading Pannellum:", error);
    setIsLoading(false);
   }
  };

  loadPannellum();
 }, []);

 // Initialize Pannellum viewer with hotspots
 useEffect(() => {
  if (!isPannellumLoaded || !viewerRef.current) return;

  // Clean up existing viewer
  if (pannellumViewerRef.current) {
   try {
    pannellumViewerRef.current.destroy();
   } catch (e) {
    console.error("Error destroying viewer:", e);
   }
  }

  // Create hotspots for each product
  const hotSpots = GALLERY_PRODUCTS.map((product) => ({
   pitch: product.pitch,
   yaw: product.yaw,
   type: "custom",
   cssClass: "gallery-hotspot",
   createTooltipFunc: (hotSpotDiv: HTMLElement) => {
    hotSpotDiv.classList.add("custom-hotspot");
    const icon = document.createElement("div");
    icon.innerHTML = `
          <div class="hotspot-pulse">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" fill="rgba(166, 140, 104, 0.9)" stroke="white" stroke-width="2"/>
              <path d="M20 12v16M12 20h16" stroke="white" stroke-width="3" stroke-linecap="round"/>
            </svg>
          </div>
        `;
    hotSpotDiv.appendChild(icon);
    return hotSpotDiv;
   },
   clickHandlerFunc: () => {
    setSelectedProduct(product);
   },
  }));

  const config = {
   type: "equirectangular",
   panorama: "/images/vr/vr1.webp", // Using placeholder - user should replace with gallery 360° image
   autoLoad: true,
   autoRotate: -2,
   showZoomCtrl: false,
   showFullscreenCtrl: false,
   mouseZoom: true,
   draggable: true,
   keyboardZoom: true,
   hfov: 100,
   minHfov: 50,
   maxHfov: 120,
   pitch: 0,
   yaw: 0,
   hotSpots: hotSpots,
  };

  try {
   // @ts-ignore - pannellum is loaded globally
   pannellumViewerRef.current = window.pannellum.viewer(
    viewerRef.current,
    config,
   );

   setTimeout(() => {
    setIsLoading(false);
   }, 800);
  } catch (error) {
   console.error("Error initializing Pannellum:", error);
   setIsLoading(false);
  }

  // Cleanup on unmount
  return () => {
   if (pannellumViewerRef.current) {
    try {
     pannellumViewerRef.current.destroy();
    } catch (e) {
     console.error("Error destroying viewer:", e);
    }
   }
  };
 }, [isPannellumLoaded]);

 // Handle fullscreen change
 useEffect(() => {
  const handleFullscreenChange = () => {
   setIsFullscreen(!!document.fullscreenElement);
  };

  document.addEventListener("fullscreenchange", handleFullscreenChange);
  return () => {
   document.removeEventListener("fullscreenchange", handleFullscreenChange);
  };
 }, []);

 // Prevent page scroll when scrolling over gallery
 useEffect(() => {
  const handleWheel = (e: WheelEvent) => {
   e.preventDefault();
   e.stopPropagation();
  };

  const container = containerRef.current;
  if (container) {
   container.addEventListener("wheel", handleWheel, { passive: false });

   return () => {
    container.removeEventListener("wheel", handleWheel);
   };
  }
 }, []);

 const handleZoomIn = () => {
  if (pannellumViewerRef.current) {
   try {
    const currentHfov = pannellumViewerRef.current.getHfov();
    pannellumViewerRef.current.setHfov(Math.max(currentHfov - 10, 50));
   } catch (e) {
    console.error("Error zooming in:", e);
   }
  }
 };

 const handleZoomOut = () => {
  if (pannellumViewerRef.current) {
   try {
    const currentHfov = pannellumViewerRef.current.getHfov();
    pannellumViewerRef.current.setHfov(Math.min(currentHfov + 10, 120));
   } catch (e) {
    console.error("Error zooming out:", e);
   }
  }
 };

 const toggleFullscreen = () => {
  if (!containerRef.current) return;

  if (!document.fullscreenElement) {
   containerRef.current.requestFullscreen().catch((err) => {
    console.error("Error attempting to enable fullscreen:", err);
   });
  } else {
   document.exitFullscreen();
  }
 };

 return (
  <>
   <div
    ref={containerRef}
    className={`relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-black ${
     isFullscreen ? "h-screen w-screen" : "h-[600px] md:h-[700px]"
    }`}>
    {/* Pannellum Container */}
    <div ref={viewerRef} className="w-full h-full" style={{ cursor: "grab" }} />

    {/* Loading Overlay */}
    {isLoading && (
     <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 z-10">
      <div className="flex flex-col items-center gap-4">
       <ShoppingBag className="w-16 h-16 text-primary animate-bounce" />
       <p className="text-white text-lg font-medium">
        Loading Virtual Gallery...
       </p>
      </div>
     </div>
    )}

    {/* Controls */}
    {!isLoading && (
     <>
      {/* Zoom and Fullscreen Controls */}
      <div className="absolute top-4 left-4 flex gap-2 z-20">
       <button
        onClick={handleZoomIn}
        className="p-3 bg-white/90 backdrop-blur-sm hover:bg-white rounded-lg transition-all duration-200 shadow-md group"
        title="Zoom In">
        <ZoomIn className="w-5 h-5 text-gray-800 group-hover:scale-110 transition-transform" />
       </button>
       <button
        onClick={handleZoomOut}
        className="p-3 bg-white/90 backdrop-blur-sm hover:bg-white rounded-lg transition-all duration-200 shadow-md group"
        title="Zoom Out">
        <ZoomOut className="w-5 h-5 text-gray-800 group-hover:scale-110 transition-transform" />
       </button>
       <button
        onClick={toggleFullscreen}
        className="p-3 bg-white/90 backdrop-blur-sm hover:bg-white rounded-lg transition-all duration-200 shadow-md group"
        title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}>
        {isFullscreen ? (
         <Minimize className="w-5 h-5 text-gray-800 group-hover:scale-110 transition-transform" />
        ) : (
         <Maximize className="w-5 h-5 text-gray-800 group-hover:scale-110 transition-transform" />
        )}
       </button>
      </div>

      {/* Info Overlay */}
      <div className="absolute bottom-4 left-4 right-4 z-20">
       <div className="bg-black/70 backdrop-blur-md rounded-lg px-6 py-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
         <div>
          <h4 className="text-white font-bold text-lg mb-1 flex items-center gap-2">
           <ShoppingBag className="w-5 h-5" />
           Virtual Render Gallery
          </h4>
          <p className="text-white/80 text-sm">
           Click on the glowing icons to view renders and pricing
          </p>
         </div>
         <div className="text-right">
          <p className="text-white/60 text-xs uppercase tracking-wider">
           Products Available
          </p>
          <p className="text-primary font-bold text-2xl">
           {GALLERY_PRODUCTS.length}
          </p>
         </div>
        </div>
       </div>
      </div>
     </>
    )}

    {/* Custom Hotspot Styles */}
    <style jsx global>{`
     .custom-hotspot {
      width: 40px !important;
      height: 40px !important;
      cursor: pointer;
      transition: transform 0.3s ease;
     }
     .custom-hotspot:hover {
      transform: scale(1.2);
     }
     .hotspot-pulse {
      animation: pulse 2s infinite;
     }
     @keyframes pulse {
      0%,
      100% {
       opacity: 1;
       transform: scale(1);
      }
      50% {
       opacity: 0.7;
       transform: scale(1.1);
      }
     }
    `}</style>
   </div>

   {/* Product Modal */}
   <RenderModal
    product={selectedProduct}
    onClose={() => setSelectedProduct(null)}
   />
  </>
 );
}
