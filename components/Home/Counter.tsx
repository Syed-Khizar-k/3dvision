"use client";
import { CheckSquare, Heart, Users, Trophy } from "lucide-react";
import CountUpContent from "../utils/CountUpContent";
import { motion } from "framer-motion";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CounterDefault = () => {
 const sectionRef = useRef<HTMLElement>(null);
 const bgRef = useRef<HTMLDivElement>(null);

 useLayoutEffect(() => {
  const ctx = gsap.context(() => {
   if (sectionRef.current && bgRef.current) {
    ScrollTrigger.create({
     trigger: sectionRef.current,
     start: "top bottom",
     end: "bottom top",
     scrub: true, // Smooths the update if there's lag, but onUpdate is direct.
    //  onUpdate: (self) => {
    //   // Calculate the required translation to keep the background fixed relative to viewport
    //   // y = scrollY - sectionOffsetTop
    //   const scrollY = self.scroll();
    //   const sectionTop = sectionRef.current?.offsetTop || 0;
    //   gsap.set(bgRef.current, { y: scrollY - sectionTop });
    //  },
    });
   }
  }, sectionRef);

  return () => ctx.revert();
 }, []);

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
  <section ref={sectionRef} className="relative py-40 w-full overflow-hidden">
   {/* Fixed Background Image Simulation */}
   <div
    ref={bgRef}
    className="absolute top-0 left-0 w-full h-[100vh] z-0 pointer-events-none"
    style={{
     backgroundImage: "url('/images/experience.webp')",
     backgroundPosition: "center",
     backgroundSize: "cover",
     backgroundRepeat: "no-repeat",
     willChange: "transform",
    }}
   />

   {/* Black Overlay */}
   <div className="absolute inset-0 bg-black/30 z-0"></div>

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
