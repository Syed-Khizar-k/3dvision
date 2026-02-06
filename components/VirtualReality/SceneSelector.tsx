"use client";

import Image from "next/image";
import { Scene } from "./VRViewer";

interface SceneSelectorProps {
 scenes: Scene[];
 activeScene: string;
 onSceneChange: (sceneId: string) => void;
}

export default function SceneSelector({
 scenes,
 activeScene,
 onSceneChange,
}: SceneSelectorProps) {
 return (
  <div className="absolute bottom-8 right-8 z-20">
   <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
    <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">
     Explore Spaces
    </h4>
    <div className="flex flex-col gap-3">
     {scenes.map((scene) => (
      <button
       key={scene.id}
       onClick={() => onSceneChange(scene.id)}
       className={`relative group overflow-hidden rounded-lg transition-all duration-300 ${
        activeScene === scene.id
         ? "ring-2 ring-blue-500 shadow-lg shadow-blue-500/50"
         : "ring-1 ring-white/20 hover:ring-white/40"
       }`}>
       {/* Thumbnail Image */}
       <div className="relative w-32 h-20 bg-gray-800">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        {/* Placeholder for thumbnail - will show when images are added */}
        <div className="w-full h-full flex items-center justify-center text-white/40 text-xs">
         {scene.name}
        </div>
       </div>

       {/* Scene Name Overlay */}
       <div className="absolute bottom-0 left-0 right-0 p-2 z-20">
        <p className="text-white text-xs font-medium truncate">{scene.name}</p>
       </div>

       {/* Active Indicator */}
       {activeScene === scene.id && (
        <div className="absolute top-2 right-2 z-20">
         <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        </div>
       )}

       {/* Hover Effect */}
       <div
        className={`absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-all duration-300 ${
         activeScene === scene.id ? "bg-blue-500/20" : ""
        }`}
       />
      </button>
     ))}
    </div>
   </div>
  </div>
 );
}
