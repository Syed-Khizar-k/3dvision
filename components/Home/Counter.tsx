"use client";
import { CheckSquare, Heart, Users, Trophy } from "lucide-react";
import CountUpContent from "../utils/CountUpContent";
import { motion } from "framer-motion";

const CounterDefault = () => {
 const counters = [
  {
   Icon: CheckSquare, // Lucide Component
   countNum: 85,
   countTitle: "Project Complete",
  },
  {
   Icon: Heart, // Lucide Component
   countNum: 80,
   countTitle: "Happy Clients",
  },
  {
   Icon: Users, // Lucide Component
   countNum: 7,
   countTitle: "Years of Experience",
  },
  {
   Icon: Trophy, // Lucide Component
   countNum: 5,
   countTitle: "Active Projects",
  },
 ];

 return (
  // Converted: counter-area bg-(--color-three)
  <div className="py-20 w-full bg-three">
   <div className="container mx-auto">
    {counters && (
     <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
      {counters.map((item, num) => (
       <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        key={num}>
        <div className="group relative w-full text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.02] overflow-hidden">
         <span className="pointer-events-none absolute inset-0 bg-secondary opacity-0 scale-0 group-hover:opacity-90 group-hover:scale-110 transition duration-500 ease-out" />
         <div className="relative z-10">
          <div className="text-secondary mb-4 flex justify-center group-hover:text-white transition-colors duration-300">
           <item.Icon className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <div className="mt-4">
           <h1 className="text-[18px] md:text-[32px] font-bold text-secondary flex justify-center items-center group-hover:text-white transition-colors duration-300">
            <CountUpContent number={item.countNum} text="" />
            <span className="text-secondary text-3xl ml-2 group-hover:text-white transition-colors duration-300">
             +
            </span>
           </h1>
           <p className="text-lg font-medium text-gray-600 mt-1 group-hover:text-white transition-colors duration-300">
            {item.countTitle}
           </p>
          </div>
         </div>
        </div>
       </motion.div>
      ))}
     </div>
    )}
   </div>
  </div>
 );
};

export default CounterDefault;
