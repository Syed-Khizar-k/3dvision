"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
 Award,
 Users,
 CheckCircle,
 TrendingUp,
 PencilRuler,
 MonitorPlay,
 Armchair,
 ArrowRight,
} from "lucide-react";
import Link from "next/link";

// --- Data ---
const STATS = [
 {
  icon: <CheckCircle size={32} />,
  value: "200+",
  label: "Projects Completed",
 },
 {
  icon: <TrendingUp size={32} />,
  value: "98%",
  label: "Success Rate",
 },
 {
  icon: <Users size={32} />,
  value: "100%",
  label: "Client Satisfaction",
 },
 {
  icon: <Award size={32} />,
  value: "#1",
  label: "Choice in Pakistan",
 },
];

const EXPERTISE = [
 {
  icon: <MonitorPlay size={40} />,
  title: "3D Visualization",
  description:
   "We are Pakistan's leading 3D visualization studio, creating hyper-realistic renders that bring your architectural dreams to life before construction begins.",
 },
 {
  icon: <Armchair size={40} />,
  title: "Interior Design",
  description:
   "Our interior designs blend aesthetics with functionality, creating spaces that are not only beautiful but also perfectly tailored to your lifestyle.",
 },
 {
  icon: <PencilRuler size={40} />,
  title: "Architectural Planning",
  description:
   "From initial concept to detailed blueprints, we provide comprehensive architectural planning services that prioritize sustainability and innovation.",
 },
];

const phoneNumber = "923011463337"; // Use international format without + or 00
const message = "Hello! I Want Some Discussion on my project.";
const encodedMessage = encodeURIComponent(message);
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
const AboutComp = () => {
 return (
  <div className="bg-stone-50 min-h-screen font-sans">
   {/* --- Hero Section --- */}
   <section className="relative h-[80vh] md:h-[100vh] flex items-center justify-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
     <Image
      src="/images/experience.webp"
      alt="About Hero"
      fill
      className="object-cover"
      priority
     />
     <div className="absolute inset-0 bg-black/60" />
    </div>

    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto text-white">
     <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-4 text-primary">
      Who We Are
     </motion.p>
     <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
      Pakistan's Premier <br /> Design & Visualization Studio
     </motion.h1>
     <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
      We are a team of visionary architects and designers dedicated to
      transforming spaces into masterpieces. With a focus on detail and a
      passion for excellence, we deliver results that exceed expectations.
     </motion.p>
    </div>
   </section>

   {/* --- Stats Section --- */}
   <section className="py-12! bg-white relative z-20 -mt-16! mx-4! md:mx-auto! max-w-6xl rounded-2xl shadow-xl">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
     {STATS.map((stat, index) => (
      <motion.div
       key={index}
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ delay: index * 0.1 }}
       className="text-center">
       <div className="text-primary flex justify-center mb-3">{stat.icon}</div>
       <h3 className="text-3xl md:text-4xl font-bold text-heading mb-1">
        {stat.value}
       </h3>
       <p className="text-gray-500 text-sm md:text-base font-medium uppercase tracking-wide">
        {stat.label}
       </p>
      </motion.div>
     ))}
    </div>
   </section>

   {/* --- Our Story Section --- */}
   <section className="py-20! md:py-28! container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center gap-16">
     <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full md:w-1/2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
      <Image
       src="/images/why.jpg"
       alt="Our Story"
       fill
       className="object-cover"
      />
     </motion.div>
     <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full md:w-1/2">
      <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">
       Crafting Excellence Since Day One
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed mb-6">
       At 3D Vision, we believe that every space has a story to tell. Our
       journey began with a simple mission: to provide the highest quality
       architectural and interior design services in Pakistan.
      </p>
      <p className="text-gray-600 text-lg leading-relaxed mb-8">
       We specialize in 3D visualization, offering our clients a hyper-realistic
       glimpse into their future projects. Our detail-oriented approach ensures
       that every texture, light, and angle is perfect, resulting in a 98%
       success rate and 100% client satisfaction.
      </p>
      <div className="flex items-center gap-4">
       <div className="h-px bg-gray-300 flex-1" />
       <span className="text-primary font-bold text-lg">The Gold Standard</span>
       <div className="h-px bg-gray-300 flex-1" />
      </div>
     </motion.div>
    </div>
   </section>

   {/* --- Core Expertise Section --- */}
   <section className="py-20 bg-stone-100">
    <div className="container mx-auto px-4">
     <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
       Our Core Expertise
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
       We offer a comprehensive suite of services designed to meet the diverse
       needs of our clients.
      </p>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {EXPERTISE.map((item, index) => (
       <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center group">
        <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
         {item.icon}
        </div>
        <h3 className="text-xl font-bold text-heading mb-4">{item.title}</h3>
        <p className="text-gray-600 leading-relaxed">{item.description}</p>
       </motion.div>
      ))}
     </div>
    </div>
   </section>

   {/* --- Why Choose Us Section --- */}
   <section className="py-20 container mx-auto px-4">
    <div className="bg-heading rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
     {/* Decorative Circle */}
     <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
     <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full -ml-32 -mb-32 blur-3xl" />

     <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="md:w-1/2">
       <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Why We Are The Best Choice
       </h2>
       <ul className="space-y-4">
        {[
         "Unmatched Attention to Detail",
         "Hyper-Realistic 3D Renders",
         "Timely Delivery & Professionalism",
         "Customized Design Solutions",
        ].map((item, i) => (
         <li key={i} className="flex items-center gap-3">
          <CheckCircle className="text-primary" size={24} />
          <span className="text-lg text-gray-200">{item}</span>
         </li>
        ))}
       </ul>
      </div>
      <div className="md:w-1/2 text-center md:text-right">
       <p className="text-xl md:text-2xl font-light italic text-gray-300 mb-8">
        "We don't just design spaces; we create experiences that inspire and
        endure."
       </p>
       <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-heading px-8 py-4 cursor-pointer rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center">
        Start Your Project <ArrowRight className="ml-2" size={20} />
       </Link>
      </div>
     </div>
    </div>
   </section>
  </div>
 );
};

export default AboutComp;
