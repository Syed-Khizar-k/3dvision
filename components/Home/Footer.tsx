// app/components/Footer.tsx (or wherever you keep it)
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faInstagram,
 faFacebookF,
 faPinterestP,
 faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

// Navigation Sections
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

// Contact Info with SVG Icons
const contactInfo = [
 {
  icon: <MdLocationOn className="text-white text-2xl" />,
  title: "Location",
  content: "Sector C DHA Phase 6, Lahore, 54000",
 },
 {
  icon: <MdPhone className="text-white text-2xl" />,
  title: "Phone",
  content: "0301 1463337",
 },
 {
  icon: <MdEmail className="text-white text-2xl" /> ,
  title: "Email",
  content: "furqan4479@gmail.com",
 },
];

// Social Links with Font Awesome Icons
const socialLinks = [
 { href: "https://instagram.com", icon: faInstagram },
 { href: "https://facebook.com", icon: faFacebookF },
 { href: "https://pinterest.com", icon: faPinterestP },
 { href: "https://linkedin.com", icon: faLinkedinIn },
];

const Footer = () => {
 return (
  <footer className="bg-secondary py-12 md:py-20 text-white">
   <div className="container mx-auto px-4">
    {/* Main Grid */}
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-[1fr_1fr_2fr_2fr] gap-10 md:gap-8">
     {/* === Pages === */}
     <div>
      <h4 className="text-xl font-semibold mb-6">Pages</h4>
      <ul className="space-y-3">
       {navSections[0].links.map((link, i) => (
        <li key={i}>
         <a
          href={link.href}
          className="text-sm tracking-wider opacity-80 transition-opacity hover:opacity-100 text-[var(--color-primary)] hover:text-white">
          {link.name}
         </a>
        </li>
       ))}
      </ul>
     </div>

     {/* === Support === */}
     <div>
      <h4 className="text-xl font-semibold mb-6">Support</h4>
      <ul className="space-y-3">
       {navSections[1].links.map((link, i) => (
        <li key={i}>
         <a
          href={link.href}
          className="text-sm tracking-wider opacity-80 transition-opacity hover:opacity-100 text-[var(--color-primary)] hover:text-white">
          {link.name}
         </a>
        </li>
       ))}
      </ul>
     </div>

     {/* === Logo & About === */}
     <div className="text-center md:text-left md:col-span-2 lg:col-span-1">
      <div className="flex justify-center md:justify-start mb-6">
       <Image
        src="/images/logo.png"
        alt="Spaces & Places Logo"
        width={105}
        height={44}
        className="h-11 w-auto"
       />
      </div>

      <p className="text-sm opacity-80 max-w-sm mx-auto md:mx-0 mb-6">
       Where we design your homes, an ultimate guide in Pakistan, for creative
       solutions and tools of construction, furniture, and properties under one
       roof in the pursuit of perfection.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center md:justify-start space-x-3">
       {socialLinks.map((social, i) => (
        <Link
         key={i}
         href={social.href}
         target="_blank"
         rel="noopener noreferrer"
         className="flex items-center justify-center h-8 w-8 rounded-full border border-primary text-primary hover:bg-primary hover:text-white hover:border-[var(--color-primary)] transition-all"
         aria-label={social.href.split("#")[i]}>
         <FontAwesomeIcon icon={social.icon} className="h-4 w-4" />
        </Link>
       ))}
      </div>
     </div>

     {/* === Contact Info === */}
     <div className="md:col-span-2 lg:col-span-1">
      <div className="space-y-6">
       {contactInfo.map((item, i) => (
        <div key={i} className="flex items-start space-x-4">
         <div className="shrink-0 mt-1 text-primary">{item.icon}</div>
         <div>
          <h5 className="text-lg font-semibold mb-1">{item.title}</h5>
          <p className="text-sm opacity-80">{item.content}</p>
         </div>
        </div>
       ))}
      </div>
     </div>
    </div>

    {/* Copyright */}
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
