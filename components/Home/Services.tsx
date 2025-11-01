import React from "react";

// Define the data for the cards, including the SVG path for the icon and the HTML for the body.
const cardData = [
 {
  id: 1,
  title: "INTERIOR DESIGNERS IN LAHORE",
  bodyHtml: `With our intellectually driven, dedicated team of artistic ideology and trained top interior designers in lahore, we endeavor to serve our clients with aesthetic design for project, <strong class="text-(--color-secondary)">interior design services in lahore</strong> and architecture designs`,
  iconPath:
   "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", // Box/Shelves icon
  link: "#",
 },
 {
  id: 2,
  title: "CONSTRUCTION",
  bodyHtml: `We are proud <strong class="text-(--color-secondary)">construction company in lahore</strong>. We execute construction projects with professional and advanced solutions in the most desirable duration with design excellence and building quality, making your home more luxurious.`,
  iconPath:
   "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 0h-1m1 0v4m-1-4h-1m1 0v4m-1-4V7h-1m1 0v4m-1-4V7h-1m1 0V7m-1 0V7m-1 0V7m-1 0V7m-1 0V7M7 7h1m-1 0v4m-1-4h-1m1 0v4m-1-4V7h-1m1 0v4m-1-4V7h-1m1 0V7m-1 0V7m-1 0V7m-1 0V7M12 7h1m-1 0v4m-1-4h-1m1 0v4m-1-4V7h-1m1 0v4m-1-4V7h-1m1 0V7m-1 0V7m-1 0V7M7 11h1m-1 0v4m-1-4h-1m1 0v4m-1-4V11h-1m1 0v4m-1-4V11h-1m1 0v4m-1-4V11M12 11h1m-1 0v4m-1-4h-1m1 0v4m-1-4V11h-1m1 0v4m-1-4V11h-1m1 0v4m-1-4V11M7 15h1m-1 0v4m-1-4h-1m1 0v4m-1-4V15h-1m1 0v4m-1-4V15h-1m1 0v4m-1-4V15M12 15h1m-1 0v4m-1-4h-1m1 0v4m-1-4V15h-1m1 0v4m-1-4V15h-1m1 0v4m-1-4V15", // Construction icon
  link: "#",
 },
 {
  id: 3,
  title: "ARCHITECTURE DESIGN",
  bodyHtml: `Spacesnplaces is the top architect design company in lahore, Pakistan. At <strong class="text-(--color-secondary)">spaces&places</strong>, we distinguish ourselves by providing architectural designs for houses and offices.`,
  iconPath:
   "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", // Home/Architecture icon
  link: "#",
 },
 {
  id: 4,
  title: "FURNITURE",
  bodyHtml: `Matching international standards, our <strong class="text-(--color-secondary)">furniture services in Lahore</strong> focus on designing high-end contemporary and classic pieces with customization options, delivering supreme quality furniture built to last.`,
  iconPath:
   "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", // Box/Shelves icon (reused)
  link: "#",
 },
];

const Services = () => {
 return (
  <section className="py-10 w-full bg-white">
   <div className="container mx-auto px-4">
    <div className="text-center mb-10">
     <h2 className="text-4xl font-light text-gray-800 mb-4">
      Our Services that Defines us
     </h2>
     <p className="text-lg text-(--color-secondary) md:text-md">
      Our commitment to quality products and on time services ensure our clients{" "}
      <br />
      happy. We’re happy to make you feel more comfortable on your home.
     </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
     {cardData.map((card) => (
      <div
       key={card.id}
       className="bg-(--color-three) p-8 relative z-0 rounded-3xl shadow-sm h-full w-full border-b-6 border-(--color-secondary) overflow-hidden group">
       {/* Black overlay that slides from left to right on hover */}
       <div className="absolute inset-0 bg-(--color-primary) transform rounded-lg -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out pointer-events-none z-[-1]" />

       {/* Icon Container */}
       <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white mb-6">
        <svg
         className="h-8 w-8 text-(--color-secondary)"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor">
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={card.iconPath}
         />
        </svg>
       </div>

       {/* Title */}
       <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-(--color-secondary) transition-colors duration-300">
        {card.title}
       </h3>

       {/* Body Content */}
       <p
        className="text-gray-600 mb-6 group-hover:text-(--color-secondary) transition-colors duration-300"
        dangerouslySetInnerHTML={{ __html: card.bodyHtml }}
       />

      </div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default Services;
