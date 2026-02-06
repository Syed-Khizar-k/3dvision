"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceItem {
 icon: React.ReactNode;
 title: string;
 description: string;
}

interface ServicesCarouselProps {
 services: ServiceItem[];
 autoPlayInterval?: number;
}

const ServicesCarousel = ({
 services,
 autoPlayInterval = 5000,
}: ServicesCarouselProps) => {
 const [currentIndex, setCurrentIndex] = useState(0);
 const [isPaused, setIsPaused] = useState(false);
 const [direction, setDirection] = useState(0);

 // Calculate how many items to show based on screen size
 const getItemsPerView = () => {
  if (typeof window === "undefined") return 1;
  if (window.innerWidth >= 1024) return 3; // lg screens
  if (window.innerWidth >= 768) return 2; // md screens
  return 1; // mobile
 };

 const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

 // Handle resize
 useEffect(() => {
  const handleResize = () => {
   setItemsPerView(getItemsPerView());
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
 }, []);

 // Auto-play functionality
 useEffect(() => {
  if (isPaused) return;

  const interval = setInterval(() => {
   goToNext();
  }, autoPlayInterval);

  return () => clearInterval(interval);
 }, [currentIndex, isPaused, autoPlayInterval, itemsPerView]);

 const goToNext = useCallback(() => {
  setDirection(1);
  setCurrentIndex((prevIndex) => {
   const maxIndex = services.length - itemsPerView;
   return prevIndex >= maxIndex ? 0 : prevIndex + 1;
  });
 }, [services.length, itemsPerView]);

 const goToSlide = (index: number) => {
  setDirection(index > currentIndex ? 1 : -1);
  setCurrentIndex(index);
 };

 // Calculate total number of slides
 const totalSlides = Math.ceil(services.length / itemsPerView);

 // Get visible services for current slide
 const getVisibleServices = () => {
  const start = currentIndex;
  const end = start + itemsPerView;
  return services.slice(start, end);
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
  <div
   className="relative w-full overflow-hidden"
   onMouseEnter={() => setIsPaused(true)}
   onMouseLeave={() => setIsPaused(false)}>
   {/* Carousel Container */}
   <div className="relative min-h-[400px]">
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
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={1}
      onDragEnd={(e, { offset, velocity }) => {
       const swipe = Math.abs(offset.x) * velocity.x;
       if (swipe < -10000) {
        goToNext();
       } else if (swipe > 10000 && currentIndex > 0) {
        setDirection(-1);
        setCurrentIndex(currentIndex - 1);
       }
      }}
      className={`grid gap-8 ${
       itemsPerView === 3
        ? "grid-cols-3"
        : itemsPerView === 2
          ? "grid-cols-2"
          : "grid-cols-1"
      }`}>
      {getVisibleServices().map((service, index) => (
       <motion.div
        key={currentIndex + index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
        <div className="w-14 h-14 bg-stone-100 rounded-xl flex items-center justify-center text-heading mb-6 group-hover:bg-heading group-hover:text-white transition-colors duration-300">
         {service.icon}
        </div>
        <h3 className="text-xl font-bold text-heading mb-3 group-hover:text-primary transition-colors">
         {service.title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
         {service.description}
        </p>
        <div className="flex items-center text-sm font-semibold text-primary group-hover:translate-x-2 transition-transform cursor-pointer">
         <span>Learn More</span>
         <ArrowRight size={16} className="ml-2" />
        </div>
       </motion.div>
      ))}
     </motion.div>
    </AnimatePresence>
   </div>

   {/* Pagination Dots */}
   <div className="flex justify-center items-center gap-3 mt-12">
    {Array.from({ length: totalSlides }).map((_, index) => {
     const isActive =
      index === Math.floor(currentIndex / itemsPerView) ||
      (itemsPerView === 1 && index === currentIndex);

     return (
      <button
       key={index}
       onClick={() => goToSlide(index * (itemsPerView === 1 ? 1 : 1))}
       className={`transition-all duration-300 rounded-full ${
        isActive
         ? "w-12 h-3 bg-primary"
         : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
       }`}
       aria-label={`Go to slide ${index + 1}`}
      />
     );
    })}
   </div>
  </div>
 );
};

export default ServicesCarousel;
