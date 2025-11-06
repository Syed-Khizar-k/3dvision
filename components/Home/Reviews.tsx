"use client";

import React, {
 useState,
 useRef,
 useCallback,
 useEffect,
 MouseEvent,
 TouchEvent,
} from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

// ---------------------------------------------------------------------
// 1. TYPES & DUMMY DATA
// ---------------------------------------------------------------------
interface Review {
 id: number;
 name: string;
 rating: number;
 review: string;
}

const DUMMY_REVIEWS: Review[] = [
 {
  id: 1,
  name: "Ahmad Shafiq",
  rating: 5,
  review:
   "Working with Spaces&places was the best experience! Spaces&places supportively pooled my ideas and vision with their professional and experience and brilliantly converted them into a flawlessly designed space. They considered the looks of the space and how it was going to be utilized to meet all the needs.",
 },
 {
  id: 2,
  name: "Talal Ali",
  rating: 5,
  review:
   "Thanks to the competent designing team of Spaces&places, every step in the project's execution, from the engineered and designed proposals to the final walk-through, was hassle-free, innovative and pleasurable. Moreover, the impeccable and made to order furniture pieces make every space of my house presentable and classy.",
 },
 {
  id: 3,
  name: "Sara Khan",
  rating: 4,
  review:
   "The design consultation was excellent, and the initial proposals were innovative. The construction phase had a few minor delays, but the final outcome truly speaks for itself—a blend of functionality and elegance. Highly recommend for bespoke furniture and space planning.",
 },
 {
  id: 4,
  name: "Omar Hassan",
  rating: 5,
  review:
   "Exceptional service from start to finish. They transformed a dull office space into a vibrant, modern workplace that boosts productivity. Communication was seamless, and they stuck meticulously to the budget. A top-tier design firm that delivers on its promises.",
 },
 {
  id: 5,
  name: "Layla Jamil",
  rating: 5,
  review:
   "I was skeptical about redesigning my small apartment, but the team maximized every inch. Their use of light and custom storage solutions is brilliant. It feels twice as large now. Professional, creative, and highly attentive to my specific needs and style preferences.",
 },
 {
  id: 6,
  name: "Zain Malik",
  rating: 4,
  review:
   "A solid four-star experience. The aesthetic result is stunning, particularly the lighting design. Docking one star only because the project timeline extended slightly beyond the original estimate. Nevertheless, the quality of craftsmanship is undeniable.",
 },
];

// ---------------------------------------------------------------------
// 2. HELPER COMPONENTS
// ---------------------------------------------------------------------
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
 const stars = Array(5)
  .fill(0)
  .map((_, i) => (
   <Star
    key={i}
    className={`w-4 h-4 transition-colors duration-200 ${
     i < rating
      ? "fill-yellow-500 text-yellow-500"
      : "fill-gray-300 text-gray-300"
    }`}
   />
  ));
 return <div className="flex space-x-0.5">{stars}</div>;
};

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
 <div className="shrink-0 w-full md:w-1/2 p-4 md:p-4 lg:p-4">
  <div className="relative bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg border border-amber-900/10 transition-all duration-300 hover:shadow-xl h-full">
   <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 text-amber-900/20 rotate-180" />
   <h3 className="text-xl font-semibold text-amber-900">{review.name}</h3>
   <StarRating rating={review.rating} />
   <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
    {review.review}
   </p>
  </div>
 </div>
);

// ---------------------------------------------------------------------
// 3. MAIN CAROUSEL
// ---------------------------------------------------------------------
const TestimonialCarousel: React.FC = () => {
 const [currentSlide, setCurrentSlide] = useState(0);
 const carouselRef = useRef<HTMLDivElement>(null);
 const isMdScreen = useRef(false);
 const intervalRef = useRef<NodeJS.Timeout | null>(null);
 const isHovering = useRef(false);

 // ---------- Drag ----------
 const [isDragging, setIsDragging] = useState(false);
 const dragStartRef = useRef(0);

 // ---------- Items per slide ----------
 const getItemsPerSlide = useCallback(() => {
  if (typeof window !== "undefined") {
   isMdScreen.current = window.matchMedia("(min-width: 768px)").matches;
   return isMdScreen.current ? 2 : 1;
  }
  return 1;
 }, []);

 const itemsPerSlide = getItemsPerSlide();
 const totalSlides = Math.ceil(DUMMY_REVIEWS.length / itemsPerSlide);

 // ---------- Navigation ----------
 const goToSlide = (index: number) => {
  setCurrentSlide(index % totalSlides);
 };

 const handleNext = () => goToSlide(currentSlide + 1);
 const handlePrev = () => goToSlide(currentSlide - 1);

 // ---------- Drag / Touch ----------
 const getClientX = (
  e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent
 ) => {
  if ("touches" in e && e.touches.length > 0) return e.touches[0].clientX;
  if ("clientX" in e) return e.clientX;
  return 0;
 };

 const handleDragStart = (
  e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
 ) => {
  if (!carouselRef.current) return;
  setIsDragging(true);
  dragStartRef.current = getClientX(e);
  if (e.type.startsWith("touch")) e.stopPropagation();
 };

 const handleDragEnd = () => {
  if (!isDragging) return;
  setIsDragging(false);
 };

 const handleDragMove: any = useCallback(
  (e: MouseEvent | TouchEvent) => {
   if (!isDragging || !carouselRef.current) return;

   const dragDistance = getClientX(e) - dragStartRef.current;
   const threshold = 50;

   if (Math.abs(dragDistance) > threshold) {
    if (dragDistance > 0) handlePrev();
    else handleNext();
    dragStartRef.current = getClientX(e);
   }
  },
  [isDragging]
 );

 // Attach global listeners
 useEffect(() => {
  window.addEventListener("mousemove", handleDragMove);
  window.addEventListener("mouseup", handleDragEnd);
  window.addEventListener("touchmove", handleDragMove);
  window.addEventListener("touchend", handleDragEnd);

  return () => {
   window.removeEventListener("mousemove", handleDragMove);
   window.removeEventListener("mouseup", handleDragEnd);
   window.removeEventListener("touchmove", handleDragMove);
   window.removeEventListener("touchend", handleDragEnd);
  };
 }, [handleDragMove]);

 // ---------- Auto-play (every 3 sec) ----------
 useEffect(() => {
  const startInterval = () => {
   intervalRef.current = setInterval(() => {
    if (!isHovering.current && !isDragging) {
     handleNext();
    }
   }, 3000);
  };

  const clearIntervalSafe = () => {
   if (intervalRef.current) clearInterval(intervalRef.current);
  };

  startInterval();

  return () => clearIntervalSafe();
 }, [currentSlide, isDragging]);

 // Pause on hover
 const handleMouseEnter = () => (isHovering.current = true);
 const handleMouseLeave = () => (isHovering.current = false);

 // ---------- Render ----------
 const transformValue = `translateX(-${currentSlide * 100}%)`;

 const dots = Array.from({ length: totalSlides }, (_, i) => (
  <button
   key={i}
   onClick={() => goToSlide(i)}
   className={`w-3 h-3 rounded-full mx-1 transition-colors duration-300 ${
    currentSlide % totalSlides === i
     ? "bg-amber-900 scale-110"
     : "bg-gray-400 hover:bg-amber-700"
   }`}
   aria-label={`Go to slide ${i + 1}`}
  />
 ));

 return (
  <section className="bg-stone-50 py-16 sm:py-24 font-inter">
   <div className="container">
    {/* Header */}
    <div className="mb-10 md:mb-16 text-center">
     <p className="text-lg font-medium text-secondary uppercase tracking-wider">
      Testimonials
     </p>
     <h2 className="text-[32px] md:text-[40px] font-bold text-heading mt-2">
      What Our Clients Say
     </h2>
    </div>

    {/* Carousel Viewport */}
    <motion.div
     initial={{ opacity: 0, y: 200 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.6, ease: "easeOut" }}
     viewport={{ once: true }}
     className="overflow-hidden"
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}>
     <div
      ref={carouselRef}
      className="flex w-full cursor-grab active:cursor-grabbing transition-transform duration-500 ease-in-out"
      style={{ transform: transformValue }}
      onMouseDown={handleDragStart}
      onTouchStart={handleDragStart}>
      {DUMMY_REVIEWS.map((review) => (
       <ReviewCard key={review.id} review={review} />
      ))}
     </div>
    </motion.div>

    {/* Dots */}
    <div className="flex justify-center mt-8">{dots}</div>
   </div>
  </section>
 );
};

export default TestimonialCarousel;
