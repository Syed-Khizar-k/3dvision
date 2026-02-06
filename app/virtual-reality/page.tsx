import type { Metadata } from "next";
import VirtualRealityComp from "@/components/VirtualReality/VirtualRealityComp";

export const metadata: Metadata = {
 title: "Virtual Reality Tours",
 description:
  "Experience immersive 360-degree virtual reality tours of stunning interior designs. Explore our photorealistic 3D visualizations with interactive VR walkthroughs of living rooms, bedrooms, kitchens, and more.",
 keywords: [
  "Virtual Reality Tours",
  "VR Walkthrough",
  "360 Virtual Tour",
  "3D Virtual Reality",
  "VR Interior Design",
  "Panoramic Virtual Tour",
  "360 Degree View",
  "Interactive VR Experience",
  "Virtual Reality Architecture",
  "VR Property Tour",
  "Immersive Virtual Tour",
 ],
 openGraph: {
  title: "360° Virtual Reality Tours | 3D Vision Edge",
  description:
   "Explore stunning interior designs in immersive 360-degree virtual reality. Interactive VR walkthroughs of modern living spaces.",
  url: "https://3dvisionedge.com/virtual-reality",
  type: "website",
  images: [
   {
    url: "/images/vr/vr1.webp",
    width: 1200,
    height: 630,
    alt: "360° Virtual Reality Tours",
   },
  ],
 },
 twitter: {
  card: "summary_large_image",
  title: "360° VR Tours | 3D Vision Edge",
  description:
   "Experience immersive virtual reality tours of stunning interior designs",
  images: ["/images/vr/vr1.webp"],
 },
 alternates: {
  canonical: "https://3dvisionedge.com/virtual-reality",
 },
};

export default function VirtualRealityPage() {
 return <VirtualRealityComp />;
}
