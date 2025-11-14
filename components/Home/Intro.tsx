import { motion } from "motion/react";

import { OpacityTextReveal, SlideIn, Transition } from "../ui/Transitions";
import Link from "next/link";
import { Phone } from "lucide-react";
function Intro() {
 return (
  <section className="md:pt-[140px] md:pb-10 pt-[100px] pb-[50px] w-full bg-white">
   <div className="container mx-auto px-4">
    <h1 className="text-heading px-4 text-[28px] leading-[33px]  md:px-[100px] md:text-[52px] md:leading-[58px] font-bold tracking-[-1px] text-center capitalize">
     {" "}
     <OpacityTextReveal>
      We create breathtaking visual representations of architectural concepts
      that effectively communicate with your target audience
     </OpacityTextReveal>
    </h1>
    <div className="flex justify-center py-6 md:pt-12 lg:space-x-2 h-full items-center">
     <Link
      href="tel:+923011463337"
      className={` bg-secondary text-white font-medium tracking-[0.4px] px-10 py-4 rounded-full shadow-lg transition-all duration-300  flex items-center space-x-2 text-md`}>
      <Phone size={18} />
      <span>Call Now</span>
     </Link>
    </div>
   </div>
  </section>
 );
}

export default Intro;
