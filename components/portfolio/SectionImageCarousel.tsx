"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SectionImageCarouselProps {
 sectionName: string;
 images: string[];
}

const SectionImageCarousel = ({
 sectionName,
 images,
}: SectionImageCarouselProps) => {
 const [currentIndex, setCurrentIndex] = useState(0);
 const [direction, setDirection] = useState(0);

 const goToPrevious = () => {
  setDirection(-1);
  setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
 };

 const goToNext = () => {
  setDirection(1);
  setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
 };

 const slideVariants = {
  enter: (direction: number) => ({
   x: direction > 0 ? 1000 : -1000,
   opacity: 0,
  }),
  center: {
   zIndex: 1,
   x: 0,
   opacity: 1,
  },
  exit: (direction: number) => ({
   zIndex: 0,
   x: direction < 0 ? 1000 : -1000,
   opacity: 0,
  }),
 };

 return (
  <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
   {/* Section Label */}
   <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
    <h3 className="text-sm md:text-base font-bold text-heading">
     {sectionName}
    </h3>
   </div>

   {/* Image Counter */}
   {images.length > 1 && (
    <div className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
     <p className="text-xs md:text-sm font-medium text-white">
      {currentIndex + 1} / {images.length}
     </p>
    </div>
   )}

   {/* Image Display */}
   <div className="relative w-full h-full overflow-hidden">
    <AnimatePresence initial={false} custom={direction} mode="wait">
     <motion.div
      key={currentIndex}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
       x: { type: "spring", stiffness: 300, damping: 30 },
       opacity: { duration: 0.2 },
      }}
      className="absolute inset-0">
      <Image
       src={images[currentIndex]}
       alt={`${sectionName} - Image ${currentIndex + 1}`}
       fill
       className="object-cover"
      />
     </motion.div>
    </AnimatePresence>
   </div>

   {/* Navigation Arrows */}
   {images.length > 1 && (
    <>
     {/* Left Arrow */}
     <button
      onClick={goToPrevious}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
      aria-label="Previous image">
      <ChevronLeft size={20} className="text-heading" />
     </button>

     {/* Right Arrow */}
     <button
      onClick={goToNext}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
      aria-label="Next image">
      <ChevronRight size={20} className="text-heading" />
     </button>
    </>
   )}
  </div>
 );
};

export default SectionImageCarousel;
