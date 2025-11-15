import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Watsaap from "@/components/ui/Watsaap";

const geistSans = Geist({
 variable: "--font-geist-sans",
 subsets: ["latin"],
});

const geistMono = Geist_Mono({
 variable: "--font-geist-mono",
 subsets: ["latin"],
});

export const metadata: Metadata = {
 title: "3D Vision Edge",
 description: "#No.1 3D Visualizers in Lahore Pakistan",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <Watsaap />
   <SmoothScroll />
   <body
    className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white!`}>
    <div id="smooth-wrapper">
     <div id="smooth-content"> {children}</div>
    </div>
   </body>
  </html>
 );
}
