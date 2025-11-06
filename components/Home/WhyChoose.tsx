"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
// --- Typescript Interface for Feature Data ---
interface Feature {
 title: string;
 description: string;
}

// --- Data for the Why Choose Us Section ---
const featuresData: Feature[] = [
 {
  title: "QUALITY & DURABILITY",
  description:
   "Quality assurance is our top priority; we ensure supreme quality products to meet our discerning clients' uncompromising tastes.",
 },
 {
  title: "HONEST & TRANSPARENT",
  description:
   "Our faith is that transparency in communication builds trust and long-term relations both within an organization and with our customers.",
 },
 {
  title: "AFFORDABLE PRICES",
  description:
   "We plan to provide elite services and create exquisite spaces for our customers at an exceptional and affordable value.",
 },
 {
  title: "FLEXIBILITY",
  description:
   "We offer flexible work services to meet our clients' profound and unparallel lifestyle needs with various innovative options.",
 },
 {
  title: "COMMUNICATION",
  description:
   "We effectively and consistently communicate with you, avoid distractions to listen to your preferred styles, and update you with in-process changes.",
 },
 {
  title: "INTELLIGENT SELECTION",
  description:
   "We always persuade the prestigious and renowned manufacturers to our clients that deliver their products and services with excellence.",
 },
];

// --- SVG Icon Component (Mimics the circle icon with a logo inside) ---
// (This component is not used in your FeatureItem, but left intact)
const CircleIcon: React.FC = () => (
 <svg
  aria-hidden="true"
  className="h-10 w-10 text-blue-400 mb-4"
  viewBox="0 0 640 512"
  xmlns="http://www.w3.org/2000/svg">
  <path d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"></path>
 </svg>
);

// --- Feature Item Component ---
const FeatureItem: React.FC<{ feature: Feature }> = ({ feature }) => (
 // Set to relative and z-10 to appear ON TOP of the dotted line
 <div className="flex items-start relative z-10">
  {/* This container is w-10 (2.5rem) wide.
      The bg-white (or bg-your-page-color) is ESSENTIAL
      as it covers the dotted line passing behind it.
    */}
  <div className="shrink-0 w-10 h-10 bg-white flex items-center justify-center">
   <Image
    src="/images/handshake.svg"
    alt="Feature Icon"
    width={40}
    height={40}
    className="" // Removed mr-4
   />
  </div>
  {/* Added ml-4 here to create space, replacing the icon's mr-4 */}
  <div className="flex-1 ml-4">
   <h3 className="text-lg font-bold tracking-wider text-gray-800 mb-1 leading-tight">
    {feature.title}
   </h3>
   <p className="text-sm text-gray-600">{feature.description}</p>
  </div>
 </div>
);

// --- Why Choose Us Section Component ---
const WhyChooseUsSection: React.FC = () => {
 // A placeholder image URL for the left column
 const imageUrl = "/images/why.jpg";

 return (
  <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 ">
   <div className="container">
    {/* Main Content Grid */}
    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
     {/* Left Column: Image Container (Styling to mimic the framed, luxurious look) */}
     <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mb-12 lg:mb-0">
      <div className="relative overflow-hidden rounded-b-4xl md:rounded-r-[60px] shadow-2xl">
       <div className="bg-[#FAF8F5] p-2 rounded-b-4xl md:rounded-r-xl md:h-screen h-[400px]">
        <Image
         src={imageUrl}
         alt="Luxurious Interior Design, modern bathroom vanity"
         fill
         className="w-full  object-cover object-center rounded-b-4xl md:rounded-r-lg"
        />
       </div>
      </div>
     </motion.div>

     {/* Right Column: Features List */}
     <div className="py-8">
      <h2 className="text-3xl md:text-4xl text-center md:text-left font-bold text-heading mb-12  tracking-tight">
       Why choose <br className="md:hidden block" />{" "}
       <span className="">3D Vision Edge</span>
      </h2>

      {/* Features List Container */}
      {/* Set to relative to act as a container for the absolute line */}
      <div className="relative">
       {/* Dotted Vertical Line */}
       {/* This line is positioned at left-5 (1.25rem),
                which is the exact center of the w-10 (2.5rem) icon container.
                It stretches top-to-bottom and sits at z-0 (behind items).
              */}
       <div
        aria-hidden="true"
        className="absolute left-5 top-0 bottom-0 w-0 border-l-2 border-dotted border-primary z-0"></div>

       {/* This inner div re-applies the space-y-6 
                to properly space the FeatureItem components.
              */}
       <div className="space-y-6">
        {featuresData.map((feature, index) => (
         <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          key={index}>
          <FeatureItem feature={feature} />
         </motion.div>
        ))}
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

// The main export component, required for the single-file workflow
const App: React.FC = () => {
 return <WhyChooseUsSection />;
};

export default App;
