export type Category = "All" | "Architecture" | "Interior" | "Commercial";

export interface ProjectSection {
 name: string;
 images: string[];
}

export interface Project {
 id: number;
 title: string;
 category: Category;
 image: string;
 description: string;
 // Detailed fields
 images: string[];
 sections?: ProjectSection[]; // Optional for backward compatibility
 longDescription: string;
 client: string;
 location: string;
 year: string;
 challenge: string;
 solution: string;
}

export const PROJECTS: Project[] = [
 {
  id: 1,
  title: "Modern Villa Retreat",
  category: "Architecture",
  image: "/images/experience.webp",
  description: "A sustainable luxury villa integrated with nature.",
  images: [
   "/images/experience.webp",
   "/images/contact.webp",
   "/images/why.jpg",
  ],
  longDescription:
   "This modern villa retreat is a testament to sustainable luxury. Nestled in the heart of a lush forest, the design prioritizes harmony with the natural environment. Large glass facades blur the lines between indoors and outdoors, allowing natural light to flood the living spaces while providing breathtaking views of the surrounding landscape.",
  client: "Private Client",
  location: "Aspen, Colorado",
  year: "2024",
  challenge:
   "The primary challenge was to design a luxury residence that minimizes its environmental footprint without compromising on comfort or aesthetics. The site's rugged terrain also presented structural difficulties.",
  solution:
   "We utilized locally sourced materials and implemented passive solar design principles to reduce energy consumption. A cantilevered structure was employed to minimize site disturbance, preserving the existing vegetation.",
 },
 {
  id: 2,
  title: "Urban Loft Redesign",
  category: "Interior",
  image: "/images/contact.webp",
  description: "Industrial chic meets modern comfort in the city heart.",
  images: [
   "/images/contact.webp",
   "/images/experience.webp",
   "/images/why.jpg",
  ],
  longDescription:
   "Located in a converted warehouse, this urban loft redesign celebrates the building's industrial heritage while introducing modern comforts. Exposed brick walls and steel beams are paired with soft textures and warm lighting to create a cozy yet sophisticated atmosphere.",
  client: "Tech Entrepreneur",
  location: "New York City, NY",
  year: "2023",
  challenge:
   "The existing space was dark and compartmentalized, making it feel smaller than it actually was. The client wanted an open-concept layout that still offered distinct zones for work and relaxation.",
  solution:
   "We removed non-structural walls to create a fluid open plan. Glass partitions were used to define the home office, maintaining visual continuity while providing acoustic privacy. A custom lighting scheme was installed to brighten the space.",
 },
 {
  id: 3,
  title: "Skyline Office Complex",
  category: "Commercial",
  image: "/images/why.jpg",
  description: "Next-gen workspace designed for collaboration.",
  images: [
   "/images/why.jpg",
   "/images/contact.webp",
   "/images/experience.webp",
  ],
  longDescription:
   "The Skyline Office Complex redefines the modern workplace. Designed for a leading tech company, the space fosters collaboration and innovation through flexible workstations, breakout areas, and state-of-the-art amenities.",
  client: "Innovate Corp",
  location: "San Francisco, CA",
  year: "2024",
  challenge:
   "The client needed a workspace that could adapt to their rapidly growing team and changing needs. They also wanted to encourage spontaneous interactions among employees.",
  solution:
   "We implemented a modular design with movable partitions and furniture. Central 'hubs' were created on each floor to serve as social gathering points, equipped with coffee bars and comfortable seating.",
 },
 {
  id: 4,
  title: "Minimalist Apartment",
  category: "Interior",
  image: "/images/experience.webp",
  description: "Maximizing space with smart storage and light.",
  images: [
   "/images/experience.webp",
   "/images/contact.webp",
   "/images/why.jpg",
  ],
  longDescription:
   "In this compact city apartment, every square inch counts. Our minimalist approach focused on decluttering and maximizing functionality through smart storage solutions and a neutral color palette.",
  client: "Young Professional",
  location: "Tokyo, Japan",
  year: "2023",
  challenge:
   "The apartment was extremely small (40 sqm) and lacked adequate storage. The client wanted a clean, uncluttered look without sacrificing functionality.",
  solution:
   "We designed custom built-in furniture that serves multiple purposes, such as a bed with storage underneath and a fold-out dining table. Mirrors were strategically placed to create an illusion of more space.",
 },
 {
  id: 5,
  title: "Eco-Friendly Resort",
  category: "Architecture",
  image: "/images/contact.webp",
  description: "Bamboo structures blending seamlessly into the jungle.",
  images: [
   "/images/contact.webp",
   "/images/experience.webp",
   "/images/why.jpg",
  ],
  longDescription:
   "This eco-friendly resort offers a unique immersive experience in nature. Constructed primarily from bamboo and other renewable materials, the structures are designed to have a minimal impact on the delicate ecosystem.",
  client: "Green Travel Co.",
  location: "Bali, Indonesia",
  year: "2024",
  challenge:
   "Building in a remote jungle location required careful logistical planning. The design also needed to withstand the tropical climate while remaining open and airy.",
  solution:
   "We worked with local craftsmen to utilize traditional bamboo construction techniques. The roofs are designed to harvest rainwater, and the open-air structures promote natural ventilation.",
 },
 {
  id: 6,
  title: "Tech Hub HQ",
  category: "Commercial",
  image: "/images/why.jpg",
  description: "Futuristic design for a leading tech giant.",
  images: [
   "/images/why.jpg",
   "/images/contact.webp",
   "/images/experience.webp",
  ],
  longDescription:
   "The Tech Hub HQ is a vision of the future. With its sleek lines, advanced smart building technology, and dynamic lighting, it reflects the cutting-edge nature of the company it houses.",
  client: "Future Systems",
  location: "Austin, Texas",
  year: "2025",
  challenge:
   "The client wanted a headquarters that would serve as a brand statement and attract top talent. The building needed to be energy-efficient and technologically advanced.",
  solution:
   "We incorporated a smart building management system that optimizes energy use based on occupancy. The facade features dynamic LED lighting that can be programmed to display different patterns and colors.",
 },
 {
  id: 7,
  title: "10 Marla House",
  category: "Architecture",
  image: "/images/experience.webp",
  description:
   "Modern family home with elegant interiors and thoughtful spaces.",
  images: [
   "/images/experience.webp",
   "/images/contact.webp",
   "/images/why.jpg",
  ],
  sections: [
   {
    name: "Bathroom",
    images: ["/images/contact.webp", "/images/why.jpg"],
   },
   {
    name: "Bedroom",
    images: [
     "/images/experience.webp",
     "/images/contact.webp",
     "/images/why.jpg",
    ],
   },
     {
    name: "Bedroom",
    images: [
     "/images/experience.webp",
     "/images/contact.webp",
     "/images/why.jpg",
    ],
   },
  
   {
    name: "TV Lounge",
    images: ["/images/why.jpg", "/images/experience.webp"],
   },
  ],
  longDescription:
   "This 10 Marla house showcases modern architectural design with a focus on family living. Each room is carefully designed to maximize space, natural light, and functionality while maintaining a cohesive aesthetic throughout the home.",
  client: "Private Family",
  location: "Lahore, Pakistan",
  year: "2024",
  challenge:
   "The challenge was to create a spacious feeling within a standard 10 Marla plot while incorporating all the modern amenities and spaces the family required, including dedicated areas for entertainment, relaxation, and privacy.",
  solution:
   "We implemented an open-concept design for the ground floor to create flow between spaces, while maintaining privacy in the bedroom areas. Large windows and glass doors were strategically placed to bring in natural light and create a connection with the outdoor spaces.",
 },
];
