"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";

// Images for the VR gallery animation - using VR tour images
const images = [
 "/images/vr/vr1.jpg",
 "/images/vr/vr2.jpg",
 "/images/contact.webp",
 "/images/experience.webp",
 "/images/why.jpg",
 "/images/vr/vr3.jpg",
 "/images/vr/vr4.jpg",
 "/images/contact.webp",
];

export function LoopingImages() {
 const lastIndex = images.length - 1;

 return (
  <div className="flex items-center justify-center min-h-[500px] bg-transparent p-4">
   <div className="relative w-[500px] h-[500px]">
    {/* Render all squares except the last one */}
    {Array.from({ length: images.length }).map((_, index) =>
     index === lastIndex ? null : <Square index={index} key={index} />,
    )}

    {/* Render the last square with the duplicate first (index 0) square masked inside it */}
    <Square index={lastIndex}>
     <SquareWithOffset index={0} parentIndex={lastIndex} />
    </Square>
   </div>
  </div>
 );
}

function SquareWithOffset({
 index,
 parentIndex,
}: {
 index: number;
 parentIndex: number;
}) {
 const image = images[index];

 // For the specific case of the first square (index 0) inside the last square (index 7),
 // we want to position it at the same place as the original first square would be
 // This creates the illusion of continuity in the circle
 const firstSquareOffset = useMotionValue(0);

 useEffect(() => {
  // Create animation that goes from current value to 1
  const controls = animate(firstSquareOffset, 1, {
   repeat: Infinity,
   repeatType: "loop",
   repeatDelay: 1,
   ease: [0.42, 0, 0.58, 1],
   duration: 7,
  });
  return () => controls.stop();
 }, [firstSquareOffset]);

 // Transform the offset to x and y coordinates relative to the parent square
 const x = useTransform(firstSquareOffset, (offset) => {
  // Calculate the angle for both the first square and the last square
  const firstAngle = ((getPathOffset(index) + offset) % 1) * Math.PI * 2;
  const lastAngle = ((getPathOffset(parentIndex) + offset) % 1) * Math.PI * 2;

  // Calculate the x position difference
  return Math.cos(firstAngle) * 180 - Math.cos(lastAngle) * 180;
 });

 const y = useTransform(firstSquareOffset, (offset) => {
  // Calculate the angle for both the first square and the last square
  const firstAngle = ((getPathOffset(index) + offset) % 1) * Math.PI * 2;
  const lastAngle = ((getPathOffset(parentIndex) + offset) % 1) * Math.PI * 2;

  // Calculate the y position difference
  return Math.sin(firstAngle) * 180 - Math.sin(lastAngle) * 180;
 });

 return (
  <motion.div
   className="absolute inset-0 rounded-lg overflow-clip"
   style={{ x, y }}>
   <Image
    src={image}
    alt={`VR Tour ${index}`}
    fill
    sizes="150px"
    priority
    className="object-cover"
    draggable={false}
   />
  </motion.div>
 );
}

function Square({
 index,
 children,
 className,
}: {
 index: number;
 children?: React.ReactNode;
 className?: string;
}) {
 const image = images[index];
 const pathOffset = useMotionValue(getPathOffset(index));

 // Animate the path offset
 useEffect(() => {
  // Create animation that goes from current value to current value + 1
  const controls = animate(pathOffset, pathOffset.get() + 1, {
   repeat: Infinity,
   repeatType: "loop",
   repeatDelay: 1,
   ease: [0.42, 0, 0.58, 1],
   duration: 7,
  });
  return () => controls.stop();
 }, [pathOffset]);

 // Transform the offset to x and y coordinates
 const x = useTransform(pathOffset, (offset) => {
  const angle = (offset % 1) * Math.PI * 2;
  return Math.cos(angle) * 180;
 });

 const y = useTransform(pathOffset, (offset) => {
  const angle = (offset % 1) * Math.PI * 2;
  return Math.sin(angle) * 180;
 });

 return (
  <motion.div
   key={index}
   className={`absolute rounded-lg overflow-clip w-[150px] h-[150px] shadow-xl ${className}`}
   style={{
    width: 150,
    height: 150,
    left: "calc(50% - 75px)",
    top: "calc(50% - 75px)",
    x,
    y,
   }}
   initial={{
    opacity: 0,
    scale: 0.9,
   }}
   animate={{
    opacity: 1,
    scale: 1,
   }}
   transition={{
    opacity: {
     duration: 1,
     delay: index * 0.12 + 0.35,
     ease: "easeOut",
    },
    scale: {
     duration: 1,
     delay: index * 0.12 + 0.35,
     ease: "easeOut",
    },
   }}>
   <Image
    src={image}
    alt={`VR Tour ${index}`}
    fill
    sizes="150px"
    priority
    className="object-cover"
    draggable={false}
   />
   <motion.div
    className="absolute inset-0 rounded-lg overflow-clip"
    initial={{
     scale: 1.1,
    }}
    animate={{
     scale: 1,
    }}
    transition={{
     duration: 1,
     delay: index * 0.12 + 0.35,
     ease: "easeOut",
    }}>
    {children}
   </motion.div>
  </motion.div>
 );
}

// Helper function to get the path offset for a specific index
function getPathOffset(index: number) {
 return index / 8;
}
