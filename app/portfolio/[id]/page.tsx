"use client";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, User, Tag } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { Navbar } from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

const ProjectDetailsPage = () => {
 const params = useParams();
 const id = Number(params.id);
 const project = PROJECTS.find((p) => p.id === id);

 if (!project) {
  return notFound();
 }

 return (
  <div className="min-h-screen bg-stone-50 font-sans">
   <Navbar />

   {/* Hero Section */}
   <div className="relative h-[60vh] md:h-[80vh] w-full ">
    <Image
     src={project.image}
     alt={project.title}
     fill
     className="object-cover"
     priority
    />
    <div className="absolute inset-0 bg-black/40" />
    <div className="absolute inset-0 flex items-center justify-center">
     <div className="text-center text-white px-4 max-w-4xl">
      <motion.span
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       className="inline-block px-4 py-1 mb-4 border border-white/30 rounded-full text-sm font-medium tracking-wider uppercase backdrop-blur-sm">
       {project.category}
      </motion.span>
      <motion.h1
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: 0.1 }}
       className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
       {project.title}
      </motion.h1>
     </div>
    </div>
   </div>

   <div className="container mx-auto px-4! py-16! md:py-24">
    {/* Back Link */}
    <Link
     href="/portfolio"
     className="inline-flex items-center text-secondary hover:text-heading transition-colors mb-12 group">
     <ArrowLeft
      size={20}
      className="mr-2 group-hover:-translate-x-1 transition-transform"
     />
     Back to Portfolio
    </Link>

    {/* Project Info Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-y border-gray-200 py-12">
     <div className="space-y-2">
      <div className="flex items-center text-secondary mb-2">
       <User size={18} className="mr-2" />
       <span className="text-sm font-medium uppercase tracking-wider">
        Client
       </span>
      </div>
      <p className="text-lg font-semibold text-heading">{project.client}</p>
     </div>
     <div className="space-y-2">
      <div className="flex items-center text-secondary mb-2">
       <MapPin size={18} className="mr-2" />
       <span className="text-sm font-medium uppercase tracking-wider">
        Location
       </span>
      </div>
      <p className="text-lg font-semibold text-heading">{project.location}</p>
     </div>
     <div className="space-y-2">
      <div className="flex items-center text-secondary mb-2">
       <Calendar size={18} className="mr-2" />
       <span className="text-sm font-medium uppercase tracking-wider">
        Year
       </span>
      </div>
      <p className="text-lg font-semibold text-heading">{project.year}</p>
     </div>
     <div className="space-y-2">
      <div className="flex items-center text-secondary mb-2">
       <Tag size={18} className="mr-2" />
       <span className="text-sm font-medium uppercase tracking-wider">
        Category
       </span>
      </div>
      <p className="text-lg font-semibold text-heading">{project.category}</p>
     </div>
    </div>

    {/* Content Section */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 mb-24">
     <div className="lg:col-span-2 space-y-8">
      <h2 className="text-3xl font-bold text-heading">Project Overview</h2>
      <p className="text-lg text-gray-600 leading-relaxed">
       {project.longDescription}
      </p>

      <div className="pt-8 space-y-8">
       <div>
        <h3 className="text-xl font-bold text-heading mb-4">The Challenge</h3>
        <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
       </div>
       <div>
        <h3 className="text-xl font-bold text-heading mb-4">The Solution</h3>
        <p className="text-gray-600 leading-relaxed">{project.solution}</p>
       </div>
      </div>
     </div>

     {/* Sidebar / Additional Info could go here */}
     <div className="lg:col-span-1 bg-white p-8 rounded-2xl shadow-sm h-fit sticky top-24">
      <h3 className="text-xl font-bold text-heading mb-6">Services Provided</h3>
      <ul className="space-y-3">
       <li className="flex items-center text-gray-600">
        <span className="w-2 h-2 bg-primary rounded-full mr-3" />
        Architectural Design
       </li>
       <li className="flex items-center text-gray-600">
        <span className="w-2 h-2 bg-primary rounded-full mr-3" />
        Interior Planning
       </li>
       <li className="flex items-center text-gray-600">
        <span className="w-2 h-2 bg-primary rounded-full mr-3" />
        3D Visualization
       </li>
       <li className="flex items-center text-gray-600">
        <span className="w-2 h-2 bg-primary rounded-full mr-3" />
        Project Management
       </li>
      </ul>
     </div>
    </div>

    {/* Gallery Section */}
    <div className="space-y-8">
     <h2 className="text-3xl font-bold text-heading mb-8">Project Gallery</h2>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {project.images.map((img, index) => (
       <div
        key={index}
        className={`relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${
         index === 0 ? "md:col-span-2 h-[500px]" : "h-[400px]"
        }`}>
        <Image
         src={img}
         alt={`${project.title} - Image ${index + 1}`}
         fill
         className="object-cover hover:scale-105 transition-transform duration-700"
        />
       </div>
      ))}
     </div>
    </div>
   </div>

   <Footer />
  </div>
 );
};

export default ProjectDetailsPage;
