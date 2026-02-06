"use client";

import { useEffect, useRef, useState } from "react";
import { Maximize, ZoomIn, ZoomOut, Minimize } from "lucide-react";

export interface VRScene {
 id: string;
 name: string;
 panorama: string;
 description: string;
}

interface VRCardViewerProps {
 scene: VRScene;
}

export default function VRCardViewer({ scene }: VRCardViewerProps) {
 const viewerRef = useRef<HTMLDivElement>(null);
 const cardRef = useRef<HTMLDivElement>(null);
 const pannellumViewerRef = useRef<any>(null);
 const [isLoading, setIsLoading] = useState(true);
 const [isPannellumLoaded, setIsPannellumLoaded] = useState(false);
 const [isFullscreen, setIsFullscreen] = useState(false);

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

 // Initialize Pannellum viewer when library is loaded
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

  const config = {
   type: "equirectangular",
   panorama: scene.panorama,
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
  };

  try {
   // @ts-ignore - pannellum is loaded globally
   pannellumViewerRef.current = window.pannellum.viewer(
    viewerRef.current,
    config,
   );

   // Set loaded state after a short delay
   setTimeout(() => {
    setIsLoading(false);
   }, 500);
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
 }, [isPannellumLoaded, scene.panorama]);

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

 // Prevent page scroll when wheel event happens over the VR viewer card
 useEffect(() => {
  const handleWheel = (e: WheelEvent) => {
   e.preventDefault();
   e.stopPropagation();
  };

  const cardElement = cardRef.current;
  if (cardElement) {
   // Add passive: false to allow preventDefault
   cardElement.addEventListener("wheel", handleWheel, { passive: false });

   return () => {
    cardElement.removeEventListener("wheel", handleWheel);
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
  if (!cardRef.current) return;

  if (!document.fullscreenElement) {
   cardRef.current.requestFullscreen().catch((err) => {
    console.error("Error attempting to enable fullscreen:", err);
   });
  } else {
   document.exitFullscreen();
  }
 };

 return (
  <div
   ref={cardRef}
   className={`relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-black ${
    isFullscreen ? "h-screen w-screen" : "h-[500px]"
   }`}>
   {/* Pannellum Container */}
   <div ref={viewerRef} className="w-full h-full" style={{ cursor: "grab" }} />

   {/* Loading Overlay */}
   {isLoading && (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-10">
     <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
      <p className="text-white text-sm font-medium">Loading VR...</p>
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
     <div className="absolute bottom-4 left-4 z-20">
      <div className="bg-black/70 backdrop-blur-md rounded-lg px-4 py-3">
       <h4 className="text-white font-bold text-lg mb-1">{scene.name}</h4>
       <p className="text-white/80 text-sm">{scene.description}</p>
      </div>
     </div>
    </>
   )}
  </div>
 );
}
