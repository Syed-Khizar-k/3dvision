"use client";

import { X, ShoppingCart, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
 GalleryProduct,
 phoneNumber,
 createPurchaseMessage,
} from "./GalleryProducts";

interface RenderModalProps {
 product: GalleryProduct | null;
 onClose: () => void;
}

export default function RenderModal({ product, onClose }: RenderModalProps) {
 if (!product) return null;

 const whatsappUrl = `https://wa.me/${phoneNumber}?text=${createPurchaseMessage(product)}`;

 return (
  <div
   className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
   onClick={onClose}>
   <div
    className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-scaleIn"
    onClick={(e) => e.stopPropagation()}>
    {/* Close Button */}
    <button
     onClick={onClose}
     className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all group">
     <X className="w-6 h-6 text-gray-800 group-hover:rotate-90 transition-transform duration-300" />
    </button>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
     {/* Image Section */}
     <div className="relative h-64 md:h-auto bg-gray-100">
      <Image
       src={product.imageUrl}
       alt={product.title}
       fill
       className="object-cover"
       priority
      />
      {/* Category Badge */}
      <div className="absolute top-4 left-4">
       <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
        <Tag size={14} />
        {product.category}
       </span>
      </div>
     </div>

     {/* Details Section */}
     <div className="p-8 flex flex-col justify-between">
      <div>
       <h2 className="text-3xl font-bold text-heading mb-3">{product.title}</h2>

       <p className="text-gray-600 leading-relaxed mb-6">
        {product.description}
       </p>

       <div className="border-t border-gray-200 pt-6 mb-6">
        <div className="flex items-baseline gap-2">
         <span className="text-sm text-gray-500 uppercase tracking-wide">
          Price
         </span>
        </div>
        <div className="text-4xl font-bold text-primary mt-2">
         {product.price}
        </div>
        <p className="text-sm text-gray-500 mt-1">
         High-resolution 3D render • Digital delivery
        </p>
       </div>

       <div className="space-y-3 mb-6 bg-stone-50 rounded-lg p-4">
        <h3 className="font-semibold text-heading text-sm uppercase tracking-wide">
         What's Included:
        </h3>
        <ul className="space-y-2 text-sm text-gray-600">
         <li className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
          High-resolution 4K render
         </li>
         <li className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
          Multiple angle variations
         </li>
         <li className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
          Commercial usage rights
         </li>
         <li className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
          Instant digital delivery
         </li>
        </ul>
       </div>
      </div>

      {/* Purchase Button */}
      <Link
       href={whatsappUrl}
       target="_blank"
       rel="noopener noreferrer"
       className="w-full bg-heading hover:bg-primary text-white font-bold py-4 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3 group">
       <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
       Purchase via WhatsApp
      </Link>
     </div>
    </div>
   </div>

   <style jsx>{`
    @keyframes fadeIn {
     from {
      opacity: 0;
     }
     to {
      opacity: 1;
     }
    }
    @keyframes scaleIn {
     from {
      opacity: 0;
      transform: scale(0.9);
     }
     to {
      opacity: 1;
      transform: scale(1);
     }
    }
    .animate-fadeIn {
     animation: fadeIn 0.2s ease-out;
    }
    .animate-scaleIn {
     animation: scaleIn 0.3s ease-out;
    }
   `}</style>
  </div>
 );
}
