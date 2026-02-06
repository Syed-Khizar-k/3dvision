"use client";

import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";
import Footer from "@/components/Home/Footer";

export default function NotFound() {
 return (
  <div className="min-h-screen bg-stone-50 flex flex-col">
   {/* Main Content */}
   <div className="flex-1 flex items-center justify-center px-4 py-20">
    <div className="max-w-2xl w-full text-center">
     {/* 404 Number */}
     <div className="mb-8">
      <h1 className="text-[150px] md:text-[200px] font-bold text-primary leading-none opacity-20">
       404
      </h1>
     </div>

     {/* Icon */}
     <div className="mb-8 flex justify-center">
      <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center">
       <Search className="w-12 h-12 text-primary" />
      </div>
     </div>

     {/* Message */}
     <h2 className="text-3xl md:text-5xl font-bold text-heading mb-4">
      Page Not Found
     </h2>
     <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
      Oops! The page you're looking for doesn't exist. It might have been moved
      or deleted.
     </p>

     {/* Action Buttons */}
     <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link
       href="/"
       className="inline-flex items-center gap-2 bg-heading hover:bg-primary text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
       <Home className="w-5 h-5" />
       Go to Homepage
      </Link>
      <button
       onClick={() => window.history.back()}
       className="inline-flex items-center gap-2 bg-white hover:bg-stone-100 text-heading font-bold px-8 py-4 rounded-full transition-all duration-300 border-2 border-gray-200 hover:border-primary">
       <ArrowLeft className="w-5 h-5" />
       Go Back
      </button>
     </div>

     {/* Quick Links */}
     <div className="mt-12 pt-8 border-t border-gray-200">
      <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide">
       Popular Pages
      </p>
      <div className="flex flex-wrap justify-center gap-4">
       {[
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Virtual Reality", href: "/virtual-reality" },
        { name: "Virtual Purchase", href: "/virtual-purchase" },
       ].map((link) => (
        <Link
         key={link.href}
         href={link.href}
         className="text-primary hover:text-heading font-medium transition-colors hover:underline">
         {link.name}
        </Link>
       ))}
      </div>
     </div>
    </div>
   </div>

   {/* Footer */}
   <Footer />
  </div>
 );
}
