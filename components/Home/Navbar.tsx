"use client";
import React, { useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// --- Configuration & Data ---

// The primary color derived from the previous Navbar design
const PRIMARY_COLOR = "bg-[#A68C68]";
const TEXT_COLOR = "text-[#2e3535]";

const navItems = [
 { name: "About us", href: "#about", hasDropdown: false },
 { name: "Services", href: "#services", hasDropdown: true },
 { name: "Portfolio", href: "#portfolio", hasDropdown: false },
];

// --- 1. FixedNavbar Component (Adapted and Fixed) ---

const NavItemLink: React.FC<{
 item: (typeof navItems)[0];
 isMobile?: boolean;
}> = ({ item, isMobile = false }) => {
 const [isDropdownOpen, setIsDropdownOpen] = useState(false);

 // Placeholder dropdown items for Services
 const dummyDropdown = [
  { name: "Architecture", href: "#arch" },
  { name: "Interior Design", href: "#int" },
  { name: "Visualization", href: "#viz" },
 ];

 const baseClasses = `font-bold hover:text-blue-400 hover:border-b-2 py-2 transition-colors text-white`;

 // Mobile rendering
 if (isMobile) {
  return (
   <div className="w-full">
    <a
     href={item.href}
     className={`flex justify-between items-center w-full px-4 py-3 text-sm hover:bg-gray-700`}
     onClick={
      item.hasDropdown
       ? (e) => {
          e.preventDefault();
          setIsDropdownOpen(!isDropdownOpen);
         }
       : undefined
     }>
     {item.name}
     {item.hasDropdown && (
      <ChevronDown
       size={16}
       className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
      />
     )}
    </a>
    {item.hasDropdown && isDropdownOpen && (
     <div className="bg-gray-800 border-t border-gray-700">
      {dummyDropdown.map((subItem) => (
       <a
        key={subItem.name}
        href={subItem.href}
        className="block px-8 py-2 text-xs text-gray-300 hover:bg-gray-700">
        {subItem.name}
       </a>
      ))}
     </div>
    )}
   </div>
  );
 }

 // Desktop rendering
 return (
  <div
   className="relative group h-full flex items-center"
   onMouseEnter={() => item.hasDropdown && setIsDropdownOpen(true)}
   onMouseLeave={() => item.hasDropdown && setIsDropdownOpen(false)}>
   <a
    href={item.href}
    className={`flex items-center space-x-3  py-1 px-3 text-(--color-secondary) font-bold hover:border-b-2 hover:border-(--color-secondary)`}>
    <span>{item.name}</span>
    {item.hasDropdown && (
     <ChevronDown
      size={14}
      className="transition-transform group-hover:rotate-180"
     />
    )}
   </a>

   {item.hasDropdown && isDropdownOpen && (
    <div className="absolute left-0 top-full mt-0 w-40 bg-white border border-gray-100 shadow-lg rounded-b-lg z-20 overflow-hidden">
     {dummyDropdown.map((subItem) => (
      <a
       key={subItem.name}
       href={subItem.href}
       className="block px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-100 transition-colors">
       {subItem.name}
      </a>
     ))}
    </div>
   )}
  </div>
 );
};

export const Navbar: React.FC = () => {
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 const NAVBAR_BG_COLOR = "bg-gray-800/80 backdrop-blur-sm"; // Dark, slightly transparent background
 const LOGO_BG_COLOR = "bg-[#1e4d50]"; // Placeholder for the triangular logo background

 const Logo = () => (
  <div
   className={`relative flex items-center h-full  rounded-r-full  text-white font-bold text-lg`}>
   {/* Placeholder for the triangular logo/icon */}
   <div className="h-auto w-auto flex items-center  ">
    <Image
     src={"/images/logo.png"}
     alt={"3d vision edge"}
     height={44}
     width={100}
    />
   </div>
  </div>
 );

 return (
  <header className={`fixed top-6 left-0 w-full z-50 px-6 `}>
   <nav
    className={`max-w-4xl mx-auto px-2 sm:px-4 lg:px-2 h-16 flex items-center bg-(--color-primary) rounded-full`}>
    <div className="flex justify-between items-center w-full">
     {/* Logo Section */}
     <Link href={"/"} className="flex items-center h-full">
      <Logo />
     </Link>

     {/* Desktop Navigation Links */}
     <div className="hidden lg:flex lg:space-x-2 h-full items-center">
      {navItems.map((item) => (
       <NavItemLink key={item.name} item={item} />
      ))}

      {/* CTA Button */}
     </div>
     <div className="hidden lg:flex lg:space-x-2 h-full items-center">
      <Link
       href="tel:+15555551234"
       className={`ml-6 bg-(--color-secondary) text-white font-medium tracking-[0.4px] px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:bg-cyan-500 flex items-center space-x-2 text-md`}>
       <Phone size={18} />
       <span>Call Now</span>
      </Link>
     </div>

     {/* Mobile Menu Toggle */}
     <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className={`text-white lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white`}
      aria-label="Toggle menu">
      {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
     </button>
    </div>
   </nav>

   {/* Mobile Menu Panel */}
   <div
    className={`lg:hidden transition-all duration-300 ease-in-out bg-gray-900 overflow-hidden ${
     isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
    }`}
    style={{ transitionProperty: "max-height, opacity" }}>
    <div className="pb-3 pt-2 space-y-1 border-t border-gray-700">
     {navItems.map((item) => (
      <NavItemLink key={item.name} item={item} isMobile={true} />
     ))}
     {/* Mobile CTA */}
     <a
      href="#quote"
      className={`block text-center mx-4 my-2 bg-cyan-400 text-gray-900 font-bold px-4 py-3 rounded-full transition-all duration-300`}>
      Get A Quote
     </a>
    </div>
   </div>
  </header>
 );
};
