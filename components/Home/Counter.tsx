"use client";
import { CheckSquare, Heart, Users, Trophy } from "lucide-react";
import CountUpContent from "../utils/CountUpContent";
import { motion } from "framer-motion";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CounterDefault = () => {
 const sectionRef = useRef<HTMLElement>(null);

 // Native Fixed Background logic using CSS

 const counters = [
  {
   Icon: CheckSquare,
   countNum: 135,
   countTitle: "Project Complete",
  },
  {
   Icon: Heart,
   countNum: 80,
   countTitle: "Happy Clients",
  },
  {
   Icon: Users,
   countNum: 7,
   countTitle: "Years of Experience",
  },
  {
   Icon: Trophy,
   countNum: 5,
   countTitle: "Active Projects",
  },
 ];

 return (
  <section className="relative bg-fixed bg-cover bg-center bg-no-repeat bg-[url('/images/experience.webp')] py-40 w-full overflow-hidden">
   {/* Black Overlay */}
   <div className="absolute inset-0 bg-black/40 z-0"></div>

   {/* Counter Content */}
   <div className="container mx-auto relative z-10">
    {counters && (
     <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
      {counters.map((item, num) => (
       <motion.div
        key={num}
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}>
        <div className="group cursor-pointer relative w-full text-center p-8 bg-white/10 backdrop-blur-xs rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.02] overflow-hidden border border-white/20">
         <span className="pointer-events-none absolute inset-0 bg-white/10 backdrop-blur-3xl  opacity-0 scale-0 group-hover:opacity-90 group-hover:scale-110 transition duration-500 ease-out" />
         <div className="relative z-10">
          <div className="text-gray-200 mb-4 flex justify-center group-hover:text-white transition-colors duration-300">
           <item.Icon className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <div className="mt-4">
           <h1 className="text-[18px] md:text-[32px] font-bold text-gray-200 flex justify-center items-center group-hover:text-white transition-colors duration-300">
            <CountUpContent number={item.countNum} text="" />
            <span className="text-gray-200 text-3xl ml-2 group-hover:text-white transition-colors duration-300">
             +
            </span>
           </h1>
           <p className="text-lg font-medium text-gray-200 mt-1 group-hover:text-white transition-colors duration-300">
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
  </section>
 );
};

export default CounterDefault;
