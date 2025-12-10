"use client";
import React, { useState, useEffect } from "react";

export const HeroSection: React.FC = () => {
 const localVideoPath = "/videos/header.mp4";
 const texts = ["Visualization", "Animation", "360°VR"];
 const [currentIndex, setCurrentIndex] = useState(0);
 const [isAnimating, setIsAnimating] = useState(false);

 useEffect(() => {
  const interval = setInterval(() => {
   setIsAnimating(true);

   setTimeout(() => {
    setCurrentIndex((prev) => (prev + 1) % texts.length);
    setIsAnimating(false);
   }, 700); // duration of flip
  }, 2500);

  return () => clearInterval(interval);
 }, [texts.length]);

 return (
  <section className="relative w-full h-screen overflow-hidden bg-white">
   {/* === TEXT FALL-BACK ANIMATION === */}
   <style>
    {`
  .flip-container {
    display: inline-block;
    perspective: 1000px;
  }

  .flip-word {
    display: inline-block;
    transform-style: preserve-3d;
    transform-origin: bottom center;
    transition: opacity 0.6s ease;
  }

  /* === Animation Keyframes === */
  @keyframes flipFall {
    0% {
      transform: rotateX(0deg);
      opacity: 1;
    }
    40% {
      transform: rotateX(-60deg) translateY(-12px); /* tilt slightly forward */
      opacity: 1;
    }
    100% {
      transform: rotateX(80deg) translateY(10px); /* fall backward */
      opacity: 0;
    }
  }

  @keyframes flipRise {
    0% {
      transform: rotateX(-80deg) translateY(10px);
      opacity: 0;
    }
    80% {
      transform: rotateX(-20deg);
      opacity: 1;
    }
    100% {
      transform: rotateX(0deg);
      opacity: 1;
    }
  }

  /* === Animation Classes === */
  .flip-word.falling {
    animation: flipFall 0.7s cubic-bezier(0.4, 0.15, 0.2, 0.95) forwards;
  }

  .flip-word.rising {
    animation: flipRise 0.7s cubic-bezier(0.4, 0.15, 0.2, 0.95) forwards;
  }

  .flip-word.active {
    transform: rotateX(0deg);
    opacity: 1;
  }
`}
   </style>

   {/* === FULL-SCREEN BACKGROUND VIDEO === */}
   <div className="absolute inset-0 z-0 overflow-hidden">
    <video
     className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
     src={localVideoPath}
     autoPlay
     loop
     muted
     playsInline
     webkit-playsinline="true"
     preload="auto"
     disablePictureInPicture>
     Your browser does not support the video tag.
    </video>
   </div>

   {/* Overlay */}
   <div className="absolute inset-0 bg-black/40 z-10" />

   {/* === TEXT OVERLAY === */}
   <div className="relative z-20 flex h-full items-center justify-center px-4 text-center">
    <h1 className="text-[24px] md:text-[32px] font-light tracking-[0.2px] text-white leading-snug drop-shadow-2xl">
     3D Vision Edge <span className="text-primary">|</span>{" "}
     <span className="flip-container">
      <span
       key={currentIndex}
       className={`flip-word text-primary md:w-[100px] ${
        isAnimating ? "falling" : "rising"
       }`}>
       {texts[currentIndex]}
      </span>
     </span>
    </h1>
   </div>

   {/* === BOTTOM WHITE GRADIENT === */}
   <div className="absolute -bottom-1 overflow-hidden left-0 w-full h-64 md:h-72 bg-gradient-to-t from-white to-transparent z-[999] pointer-events-none" />
  </section>
 );
};
