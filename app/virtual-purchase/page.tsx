import type { Metadata } from "next";
import { ShoppingBag, Eye, MousePointer, CreditCard } from "lucide-react";
import Footer from "@/components/Home/Footer";
import VirtualGalleryViewer from "@/components/VirtualPurchase/VirtualGalleryViewer";

export const metadata: Metadata = {
 title: "Virtual Purchase Gallery - Buy 3D Renders",
 description:
  "Browse and purchase high-quality 3D architectural renders in our immersive virtual gallery. Explore stunning interior and exterior designs with 360° views.",
 keywords: [
  "Buy 3D Renders",
  "Purchase Architectural Renders",
  "Virtual Gallery",
  "3D Render Shop",
  "Interior Design Renders",
  "Architectural Visualization Purchase",
  "Virtual Showroom",
  "360 Gallery",
  "3D Render Marketplace",
 ],
 openGraph: {
  title: "Virtual Purchase Gallery | 3D Vision Edge",
  description:
   "Browse and buy premium 3D architectural renders in our immersive virtual gallery",
  url: "https://3dvisionedge.com/virtual-purchase",
  type: "website",
  images: [
   {
    url: "/images/vr/vr1.webp",
    width: 1200,
    height: 630,
    alt: "Virtual Purchase Gallery",
   },
  ],
 },
 twitter: {
  card: "summary_large_image",
  title: "Virtual Purchase Gallery | 3D Vision Edge",
  description: "Browse and buy premium 3D renders in immersive gallery",
  images: ["/images/vr/vr1.webp"],
 },
 alternates: {
  canonical: "https://3dvisionedge.com/virtual-purchase",
 },
};

export default function VirtualPurchasePage() {
 return (
  <div className="bg-stone-50 min-h-screen font-sans">
   {/* Hero Section */}
   <section className="relative bg-gradient-to-br from-heading via-heading to-primary text-white py-20 md:py-28">
    <div className="absolute inset-0 bg-black/20"></div>
    <div className="container mx-auto px-4 relative z-10">
     <div className="text-center max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
       <ShoppingBag className="w-5 h-5" />
       <span className="text-sm font-medium tracking-wide uppercase">
        Virtual Showroom
       </span>
      </div>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
       Virtual Purchase Gallery
      </h1>
      <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
       Explore our immersive virtual gallery and purchase premium 3D
       architectural renders. Browse stunning designs in 360° and bring your
       vision to life.
      </p>
     </div>
    </div>
   </section>

   {/* How It Works Section */}
   <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
     <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
       How It Works
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
       Follow these simple steps to explore and purchase your favorite renders
      </p>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
      {[
       {
        icon: <Eye size={32} />,
        step: "01",
        title: "Navigate Gallery",
        description: "Explore the virtual space by dragging to look around",
       },
       {
        icon: <MousePointer size={32} />,
        step: "02",
        title: "Click Hotspots",
        description: "Click on glowing icons to view render details",
       },
       {
        icon: <ShoppingBag size={32} />,
        step: "03",
        title: "View Details",
        description: "See full image, description, and pricing",
       },
       {
        icon: <CreditCard size={32} />,
        step: "04",
        title: "Purchase",
        description: "Buy instantly via WhatsApp with secure payment",
       },
      ].map((item, index) => (
       <div key={index} className="text-center">
        <div className="relative mb-4">
         <div className="w-16 h-16 bg-stone-100 rounded-xl flex items-center justify-center text-primary mx-auto mb-3">
          {item.icon}
         </div>
         <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
          {item.step}
         </div>
        </div>
        <h3 className="text-lg font-bold text-heading mb-2">{item.title}</h3>
        <p className="text-sm text-gray-600">{item.description}</p>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* Gallery Viewer Section */}
   <section className="py-20 md:py-28 container mx-auto px-4">
    <div className="text-center mb-12">
     <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
      Explore the Virtual Gallery
     </h2>
     <p className="text-gray-600 max-w-2xl mx-auto mb-8">
      Drag to look around • Scroll to zoom • Click glowing icons to view renders
     </p>
    </div>

    <div className="max-w-7xl mx-auto">
     <VirtualGalleryViewer />
    </div>

    {/* Tips */}
    <div className="mt-8 max-w-3xl mx-auto bg-stone-100 rounded-xl p-6">
     <h3 className="font-bold text-heading mb-3 flex items-center gap-2">
      <span className="text-xl">💡</span>
      Pro Tips
     </h3>
     <ul className="space-y-2 text-sm text-gray-600">
      <li className="flex items-start gap-2">
       <span className="text-primary mt-1">•</span>
       <span>Use fullscreen mode for the best immersive experience</span>
      </li>
      <li className="flex items-start gap-2">
       <span className="text-primary mt-1">•</span>
       <span>
        Look for pulsing icons on the walls - these are clickable renders
       </span>
      </li>
      <li className="flex items-start gap-2">
       <span className="text-primary mt-1">•</span>
       <span>Zoom in to see render details before clicking</span>
      </li>
      <li className="flex items-start gap-2">
       <span className="text-primary mt-1">•</span>
       <span>All renders come with commercial usage rights</span>
      </li>
     </ul>
    </div>
   </section>

   {/* Footer */}
   <Footer />
  </div>
 );
}
