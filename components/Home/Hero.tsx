"use client";
import React, { useState, useEffect } from "react";
// Assuming you meant to use a local or defined type

export const HeroSection: React.FC = () => {
 // Use the local video path provided by the user
 const localVideoPath =
  "https://github.com/Syed-Khizar-k/3dvision/blob/f18bb491c49ba36c1c2e4e3e678d6656d5ce4aa2/public/videos/header.MOV";

 const texts = ["Visualization", "Animation", "360°VR"];
 const [currentIndex, setCurrentIndex] = useState(0);

 // Interval for the text animation
 useEffect(() => {
  const id = setInterval(() => {
   setCurrentIndex((i) => (i + 1) % texts.length);
  }, 2500);
  return () => clearInterval(id);
 }, [texts.length]);

 return (
  <section className="relative w-full h-screen overflow-hidden bg-gray-900">
   {/* === CUSTOM CSS FOR TEXT ANIMATION === */}
   <style>
    {`
          @keyframes bend {
            0%, 100% { transform: perspective(1000px) rotateX(0deg); }
            50% { transform: perspective(1000px) rotateX(-70deg); }
          }
          .animate-bend {
            display: inline-block;
            animation: bend 3s ease-in-out forwards;
          }
        `}
   </style>

   {/* === FULL-SCREEN BACKGROUND VIDEO === */}
   {/* Container to handle the absolute positioning and clipping */}
   <div className="absolute inset-0 z-0 overflow-hidden">
    <video
     className="min-w-full min-h-full w-auto h-auto object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
     src={localVideoPath}
     autoPlay
     loop
     muted
     playsInline // Essential for autoplay on mobile devices
     title="Background Video">
     {/* NOTE: For best browser compatibility (since .MOV is not universally supported), 
            you should ideally provide an .MP4 (H.264) version here as well:
            <source src="/videos/header.mp4" type="video/mp4" />
          */}
     Your browser does not support the video tag.
    </video>
   </div>

   {/* Dark Overlay */}
   <div className="absolute inset-0 bg-black/40 z-10" />

   {/* === TEXT OVERLAY === */}
   <div className="relative z-20 flex h-full items-center justify-center px-4 text-center">
    <h1 className="text-[24px] md:text-[32px] font-light tracking-[0.2px] text-white leading-snug drop-shadow-2xl">
     3D Vision Edge <span className="text-primary">|</span>{" "}
     <span
      style={{
       perspective: "1000px",
       display: "inline-block",
      }}>
      <span
       key={currentIndex}
       className="animate-bend text-primary md:w-[100px]">
       {texts[currentIndex]}
      </span>
     </span>
    </h1>
   </div>
  </section>
 );
};
