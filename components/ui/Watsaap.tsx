"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function WhatsAppButton() {
 const pathname = usePathname();

 // 🔥 Hide button on any route that starts with /admin
 if (pathname.startsWith("/admin")) {
  return null;
 }

 const phone = "923011463337";
 const message = encodeURIComponent(
  "Hello, I want to discuss a project. Is anyone available?"
 );

 const link = `https://wa.me/${phone}?text=${message}`;

 return (
  <Link
   href={link}
   target="_blank"
   rel="noopener noreferrer"
   className="fixed bottom-6 right-6 z-[99999999] bg-green-500 rounded-full p-4 shadow-lg hover:bg-green-600 transition">
   <FaWhatsapp className="text-white" size={32} />
  </Link>
 );
}
