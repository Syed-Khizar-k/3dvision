"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import SceneSelector from "./SceneSelector";
import { Maximize, ZoomIn, ZoomOut, RotateCw } from "lucide-react";

export interface Scene {
 id: string;
 name: string;
 panorama: string;
 thumbnail: string;
 description: string;
}

const scenes: Scene[] = [
 {
  id: "living-room",
  name: "Living Room",
  panorama: "/images/vr/vr1.webp",
  thumbnail: "/images/vr/vr1.webp",
  description: "Modern luxury living room with city views",
 },
 {
  id: "bedroom",
  name: "Bedroom",
  panorama: "/images/vr/vr2.webp",
  thumbnail: "/images/vr/vr2.webp",
  description: "Elegant master bedroom suite",
 }
 //  {
 //   id: "kitchen",
 //   name: "Kitchen",
 //   panorama: "/images/vr/vr3.webp",
 //   thumbnail: "/images/vr/vr3.webp",
 //   description: "Contemporary gourmet kitchen",
 //  },
];

export default function VRViewer() {
 const viewerRef = useRef<HTMLDivElement>(null);
 const pannellumViewerRef = useRef<any>(null);
 const [activeScene, setActiveScene] = useState<string>("living-room");
 const [isLoading, setIsLoading] = useState(true);
 const [autoRotate, setAutoRotate] = useState(true);
 const [isPannellumLoaded, setIsPannellumLoaded] = useState(false);

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
   panorama:
    scenes.find((s) => s.id === activeScene)?.panorama || scenes[0].panorama,
   autoLoad: true,
   autoRotate: autoRotate ? -2 : 0,
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
   }, 1000);
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
 }, [isPannellumLoaded, activeScene, autoRotate]);

 const handleSceneChange = (sceneId: string) => {
  setIsLoading(true);
  setActiveScene(sceneId);
 };

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

 const handleFullscreen = () => {
  if (pannellumViewerRef.current) {
   try {
    pannellumViewerRef.current.toggleFullscreen();
   } catch (e) {
    console.error("Error toggling fullscreen:", e);
   }
  }
 };

 const toggleAutoRotate = () => {
  setAutoRotate(!autoRotate);
 };

 return (
  <>
   {/* Load Pannellum from CDN */}
   <Script
    src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"
    onLoad={() => setIsPannellumLoaded(true)}
    strategy="afterInteractive"
   />
   <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css"
   />

   <div className="relative w-full h-screen bg-black">
    {/* Pannellum Container */}
    <div ref={viewerRef} className="w-full h-full" style={{ cursor: "grab" }} />

    {/* Loading Overlay */}
    {(isLoading || !isPannellumLoaded) && (
     <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-10">
      <div className="flex flex-col items-center gap-4">
       <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin" />
       <p className="text-white text-lg font-medium">
        {!isPannellumLoaded
         ? "Loading VR Viewer..."
         : "Loading Virtual Tour..."}
       </p>
      </div>
     </div>
    )}

    {/* Custom Controls */}
    {isPannellumLoaded && (
     <>
      <div className="absolute top-8 right-8 flex flex-col gap-3 z-20">
       <button
        onClick={handleZoomIn}
        className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 group"
        title="Zoom In">
        <ZoomIn className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
       </button>
       <button
        onClick={handleZoomOut}
        className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 group"
        title="Zoom Out">
        <ZoomOut className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
       </button>
       <button
        onClick={toggleAutoRotate}
        className={`p-4 backdrop-blur-md border border-white/20 rounded-lg transition-all duration-300 group ${
         autoRotate ? "bg-blue-500/30" : "bg-white/10 hover:bg-white/20"
        }`}
        title="Toggle Auto Rotate">
        <RotateCw
         className={`w-6 h-6 text-white group-hover:scale-110 transition-transform ${autoRotate ? "animate-spin-slow" : ""}`}
        />
       </button>
       <button
        onClick={handleFullscreen}
        className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 group"
        title="Fullscreen">
        <Maximize className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
       </button>
      </div>

      {/* Scene Selector */}
      <SceneSelector
       scenes={scenes}
       activeScene={activeScene}
       onSceneChange={handleSceneChange}
      />

      {/* Info Overlay */}
      <div className="absolute bottom-8 left-8 z-20">
       <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 max-w-md">
        <h3 className="text-white text-2xl font-bold mb-2">
         {scenes.find((s) => s.id === activeScene)?.name}
        </h3>
        <p className="text-white/80 text-sm">
         {scenes.find((s) => s.id === activeScene)?.description}
        </p>
        <p className="text-white/60 text-xs mt-4">
         Drag to look around • Scroll to zoom • Click scenes to navigate
        </p>
       </div>
      </div>
     </>
    )}
   </div>
  </>
 );
}
