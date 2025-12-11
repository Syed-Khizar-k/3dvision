"use client";
import React, { useState, useEffect } from "react";

export const HeroSection: React.FC = () => {
 const texts = ["Visualization", "Animation", "360°VR"];
 const [currentIndex, setCurrentIndex] = useState(0);
 const [isAnimating, setIsAnimating] = useState(false);
 const [videoLoaded, setVideoLoaded] = useState(false);

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
   {/* === FULL-SCREEN BACKGROUND VIDEO === */}
   <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
    {/* Placeholder Image */}
    <img
     src="/images/hero_placeholder.png"
     alt="Hero Background"
     className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
      videoLoaded ? "opacity-0" : "opacity-100"
     }`}
    />

    {/* YouTube Iframe */}
    <iframe
     onLoad={() => setVideoLoaded(true)}
     className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] transition-opacity duration-1000 ${
      videoLoaded ? "opacity-100" : "opacity-0"
     }`}
     src="https://www.youtube.com/embed/Jbvts0kdCo0?autoplay=1&mute=1&loop=1&playlist=Jbvts0kdCo0&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1"
     allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
     referrerPolicy="strict-origin-when-cross-origin"
    />
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
