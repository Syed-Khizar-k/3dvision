"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function SideBar() {
 const [sidebarOpen, setSidebarOpen] = useState(false);

 return (
  <div className="flex min-h-screen bg-primary text-white">
   {/* --- SIDEBAR --- */}
   <aside
    className={`fixed z-20 top-0 left-0 h-full bg-[#0F172A] w-64 p-6 transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} md:translate-x-0`}>
    <h2 className="text-2xl font-bold mb-8">3D Vision Admin</h2>

    <nav className="space-y-4">
     <Link
      href="/admin"
      className="block bg-white/10 text-white px-4 py-2 rounded shadow hover:bg-white/20 transitio">
      📩 Contact Forms
     </Link>

     <Link
      href="/admin/payments"
      className="block bg-white/10 text-white px-4 py-2 rounded shadow hover:bg-white/20 transition">
      💰 Payments
     </Link>

     <Link
      href="/admin/settings"
      className="block bg-white/10 text-white px-4 py-2 rounded shadow hover:bg-white/20 transition">
      ⚙️ Settings
     </Link>
     <Link
      href="/"
      className="block bg-white/10 text-white px-4 py-2 rounded shadow hover:bg-white/20 transition">
      🏠 Home
     </Link>
    </nav>
   </aside>

   {/* --- MOBILE TOGGLE --- */}
   <button
    className="md:hidden fixed top-4 left-4 bg-secondary text-white p-2 rounded-full z-30"
    onClick={() => setSidebarOpen(!sidebarOpen)}>
    {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
   </button>

   {/* --- MAIN CONTENT --- */}
  </div>
 );
}
