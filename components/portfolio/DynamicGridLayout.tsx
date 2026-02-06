"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionImageCarousel from "./SectionImageCarousel";

interface ProjectSection {
 name: string;
 images: string[];
}

interface DynamicGridLayoutProps {
 sections: ProjectSection[];
}

const DynamicGridLayout = ({ sections }: DynamicGridLayoutProps) => {
 const sectionCount = sections.length;

 // Define grid patterns based on section count
 const getGridClass = () => {
  switch (sectionCount) {
   case 1:
    return "grid-cols-1";
   case 2:
    return "grid-cols-1 md:grid-cols-2";
   case 3:
    return "grid-cols-1 md:grid-cols-2";
   case 4:
    return "grid-cols-1 md:grid-cols-2";
   case 5:
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
   case 6:
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
   default:
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  }
 };

 // Get specific styling for each section based on its index and total count
 const getSectionClass = (index: number) => {
  // Base height classes
  const heights = ["h-[350px]", "h-[450px]", "h-[400px]"];

  switch (sectionCount) {
   case 1:
    return "md:col-span-1 h-[500px]";

   case 2:
    return "h-[450px]";

   case 3:
    // First section is large, others are smaller
    if (index === 0) return "md:col-span-2 h-[500px]";
    return "h-[400px]";

   case 4:
    // 2x2 grid, all equal
    return "h-[400px]";

   case 5:
    // Two large on top, three medium below
    if (index < 2) return "md:col-span-1 lg:col-span-1 h-[450px]";
    return "h-[350px]";

   case 6:
    // Varied pattern
    if (index === 0) return "md:col-span-2 h-[450px]";
    if (index === 2) return "md:col-span-2 h-[400px]";
    return heights[index % 3];

   default:
    // For 7+ sections, create varied heights
    const heightIndex = index % heights.length;
    if (index % 5 === 0) return `md:col-span-2 ${heights[heightIndex]}`;
    return heights[heightIndex];
  }
 };

 return (
  <div className="space-y-8">
   <h2 className="text-3xl font-bold text-heading">Project Sections</h2>

   <motion.div
    className={`grid ${getGridClass()} gap-6 auto-rows-auto`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}>
    {sections.map((section, index) => (
     <motion.div
      key={`${section.name}-${index}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={getSectionClass(index)}>
      <SectionImageCarousel
       sectionName={section.name}
       images={section.images}
      />
     </motion.div>
    ))}
   </motion.div>
  </div>
 );
};

export default DynamicGridLayout;
