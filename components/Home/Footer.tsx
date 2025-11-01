import Image from "next/image";
import Link from "next/link";
import React from "react";

// Define the structure for the navigation links
const navSections = [
 {
  title: "Pages",
  links: [
   { name: "Home", href: "#home" },
   { name: "Construction", href: "#construction" },
   { name: "Design", href: "#design" },
   { name: "Furniture", href: "#furniture" },
   { name: "Projects", href: "#projects" },
  ],
 },
 {
  title: "Support",
  links: [
   { name: "Schedule Meeting", href: "#meeting" },
   { name: "Project Management", href: "#pm" },
   { name: "Contact", href: "#contact" },
  ],
 },
];

// Define contact information
const contactInfo = [
 {
  icon: (
   <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="currentColor">
    <path
     fillRule="evenodd"
     d="M11.54 22.351l4.004-5.268a.75.75 0 01.372-.256l4.49-1.554a.75.75 0 00.32-1.396l-1.043-.655c-.178-.112-.348-.222-.516-.331a.75.75 0 01-.132-.931l.942-1.57a.75.75 0 00-.503-1.155l-3.238-.283a.75.75 0 01-.734-.693l-.226-3.266a.75.75 0 00-1.155-.503l-1.57.942a.75.75 0 01-.931-.132c-.109-.168-.219-.338-.331-.516l-.655-1.043a.75.75 0 00-1.396.32l-1.554 4.49a.75.75 0 01-.256.372l-5.268 4.004a.75.75 0 00.177 1.346l1.247.783a.75.75 0 01.298.123l1.854 1.25a.75.75 0 00.675 0l1.25-1.854a.75.75 0 01.123-.298l.783-1.247a.75.75 0 001.346-.177zM11.5 8c2.485 0 4.5 2.015 4.5 4.5s-2.015 4.5-4.5 4.5-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5z"
     clipRule="evenodd"
    />
   </svg>
  ),
  title: "Location",
  content: "Sector C DHA Phase 6, Lahore, 54000",
 },
 {
  icon: (
   <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="currentColor">
    <path
     fillRule="evenodd"
     d="M1.5 4.5a3 3 0 013-3h15a3 3 0 013 3v13.385c0 1.25-1.14 2.222-2.39 2.112A22.75 22.75 0 0112 21c-4.482 0-8.232-.822-9.61-2.113C2.64 19.607 1.5 18.635 1.5 17.385V4.5zm19.5 0a1.5 1.5 0 00-1.5-1.5h-15a1.5 1.5 0 00-1.5 1.5v13.385c0 .354.137.697.39.985A20.762 20.762 0 0012 19.5c4.015 0 7.765-.733 9.61-2.113.253-.288.39-.631.39-.985V4.5z"
     clipRule="evenodd"
    />
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
   </svg>
  ),
  title: "Phone",
  content: "0301 1463337",
 },
 {
  icon: (
   <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="currentColor">
    <path
     fillRule="evenodd"
     d="M2.57 3.23a.75.75 0 011.02-.122L12 11.217l8.41-8.109a.75.75 0 111.02 1.144L12 13.783 2.57 4.254a.75.75 0 01-.002-1.024z"
     clipRule="evenodd"
    />
    <path d="M21.75 6.75v10.5a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6.75a3 3 0 013-3h13.5a3 3 0 013 3zM12 15a3 3 0 100-6 3 3 0 000 6z" />
   </svg>
  ),
  title: "Email",
  content: "furqan4479@gmail.com",
 },
];

// Define social media links (using placeholder icons for simplicity)
const socialLinks = [
 { href: "#instagram", icon: "fa-brands fa-instagram" },
 { href: "#facebook", icon: "fa-brands fa-facebook-f" },
 { href: "#pinterest", icon: "fa-brands fa-pinterest-p" },
 { href: "#linkedin", icon: "fa-brands fa-linkedin-in" },
];

const Footer = () => {
 // Utility class for the primary accent color
 const primaryColorClass = "text-[--color-primary] hover:text-white";
 const darkBackground = "bg-(--color-secondary)"; // Using black as per the image
 const lightTextColor = "text-white";

 return (
  <footer className={`${darkBackground} py-12 md:py-20`}>
   <div className="container mx-auto px-4">
    {/* Main Footer Grid: 4 columns on large screens, stacked/split on mobile */}
    <div
     className={`grid grid-cols-1 md:grid-cols-4 lg:grid-cols-[1fr_1fr_2fr_2fr] gap-10 md:gap-8 ${lightTextColor}`}>
     {/* === 1. Pages Navigation === */}
     <div className="md:order-1">
      <h4 className="text-xl font-semibold mb-6">Pages</h4>
      <ul className="space-y-3">
       {navSections[0].links.map((link, index) => (
        <li key={index}>
         <a
          href={link.href}
          className={`text-sm tracking-wider opacity-80 transition-opacity hover:opacity-100 ${primaryColorClass}`}>
          {link.name}
         </a>
        </li>
       ))}
      </ul>
     </div>

     {/* === 2. Support Navigation === */}
     <div className="md:order-2">
      <h4 className="text-xl font-semibold mb-6">Support</h4>
      <ul className="space-y-3">
       {navSections[1].links.map((link, index) => (
        <li key={index}>
         <a
          href={link.href}
          className={`text-sm tracking-wider opacity-80 transition-opacity hover:opacity-100 ${primaryColorClass}`}>
          {link.name}
         </a>
        </li>
       ))}
      </ul>
     </div>

     {/* === 3. Logo and About Text (Centered on Mobile) === */}
     <div className="md:order-3 md:col-span-2 lg:col-span-1 text-center md:text-left">
      {/* Logo placeholder */}
      <div className="flex  justify-center md:justify-start mb-6">
       <Image
        src="/images/logo.png"
        alt="Spaces & Places Logo"
        height={44}
        width={105}
       />
      </div>

      <p className="text-sm opacity-80 max-w-sm mx-auto md:mx-0 mb-6">
       Where we design your homes, an ultimate guide in Pakistan, for creative
       solutions and tools of construction, furniture, and properties under one
       roof in the pursuit of perfection.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center md:justify-start space-x-3 mt-4">
       {socialLinks.map((social, index) => (
        <Link
         key={index}
         href={social.href}
         target="_blank"
         rel="noopener noreferrer"
         className={`flex items-center justify-center h-8 w-8 rounded-full border border-gray-700 transition-colors ${primaryColorClass} hover:bg-[--color-primary] hover:border-[--color-primary]`}
         // Inline style to make sure the hover works if CSS variable isn't fully set
         aria-label={social.href.split("#")[1]}>
         <i className={social.icon}></i>
        </Link>
       ))}
      </div>
     </div>

     {/* === 4. Contact Information === */}
     <div className="md:order-4 md:col-span-2 lg:col-span-1 md:mt-0 mt-6">
      <div className="space-y-6">
       {contactInfo.map((item, index) => (
        <div key={index} className="flex items-start space-x-4">
         <div className={`shrink-0 mt-1 ${primaryColorClass}`}>{item.icon}</div>
         <div>
          <h5 className="text-lg font-semibold mb-1">{item.title}</h5>
          <p className="text-sm opacity-80">{item.content}</p>
         </div>
        </div>
       ))}
      </div>
     </div>
    </div>

    {/* --- Copyright Section --- */}
    <div className="text-center pt-12 mt-12 border-t border-gray-800">
     <p className="text-xs opacity-70">
      © Copyright 2025 – 3D Vision Edge. Developed By CodeAquarium LTD.
     </p>
    </div>
   </div>
  </footer>
 );
};

export default Footer;
