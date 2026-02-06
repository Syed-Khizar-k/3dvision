export interface GalleryProduct {
 id: string;
 title: string;
 description: string;
 price: string;
 category: string;
 imageUrl: string;
 pitch: number; // Hotspot Y coordinate in Pannellum
 yaw: number; // Hotspot X coordinate in Pannellum
}

export const GALLERY_PRODUCTS: GalleryProduct[] = [
 {
  id: "modern-living-room",
  title: "Modern Living Room",
  description:
   "Contemporary living space with minimalist design, featuring clean lines and natural lighting. Perfect for modern homes.",
  price: "PKR 35,000",
  category: "Interior Design",
  imageUrl: "/images/vr/vr1.webp",
  pitch: -5,
  yaw: 0,
 },
 {
  id: "luxury-bedroom",
  title: "Luxury Bedroom Suite",
  description:
   "Elegant master bedroom with premium finishes, ambient lighting, and sophisticated color palette.",
  price: "PKR 42,000",
  category: "Interior Design",
  imageUrl: "/images/vr/vr2.webp",
  pitch: -8,
  yaw: 60,
 },
 {
  id: "contemporary-kitchen",
  title: "Gourmet Kitchen",
  description:
   "State-of-the-art kitchen design with modern appliances, sleek cabinetry, and functional layout.",
  price: "PKR 50,000",
  category: "Interior Design",
  imageUrl: "/images/contact.webp",
  pitch: -10,
  yaw: 120,
 },
 {
  id: "minimalist-bathroom",
  title: "Minimalist Bathroom",
  description:
   "Spa-inspired bathroom with clean aesthetics, premium fixtures, and calming atmosphere.",
  price: "PKR 28,000",
  category: "Interior Design",
  imageUrl: "/images/experience.webp",
  pitch: -6,
  yaw: 180,
 },
 {
  id: "home-office",
  title: "Home Office Space",
  description:
   "Productive workspace design with ergonomic furniture, natural lighting, and professional ambiance.",
  price: "PKR 32,000",
  category: "Interior Design",
  imageUrl: "/images/why.jpg",
  pitch: -7,
  yaw: 240,
 },
 {
  id: "outdoor-patio",
  title: "Outdoor Patio Design",
  description:
   "Beautiful outdoor living space with comfortable seating, greenery, and ambient lighting.",
  price: "PKR 38,000",
  category: "Exterior Design",
  imageUrl: "/images/experience.webp",
  pitch: -9,
  yaw: 300,
 },
];

export const phoneNumber = "923011463337";
export const createPurchaseMessage = (product: GalleryProduct) => {
 const message = `Hello! I'm interested in purchasing:\n\n${product.title}\nPrice: ${product.price}\nCategory: ${product.category}\n\nPlease provide more details.`;
 return encodeURIComponent(message);
};
