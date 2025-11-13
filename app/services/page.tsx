import { Card } from "@/components/ui/card";
import {
 Building2,
 Hammer,
 Ruler,
 Sofa,
 Phone,
 Mail,
 MapPin,
} from "lucide-react";

import Image from "next/image";

const Services = () => {
 const services = [
  {
   icon: Building2,
   title: "Interior Design",
   subtitle: "Interior Designers in Lahore",
   description:
    "With our intellectually driven, dedicated team of artistic ideology and trained top interior designers in Lahore, we endeavor to serve our clients with aesthetic design for projects and architecture designs. We transform spaces into functional works of art that reflect your unique style and enhance your daily living experience.",
   features: [
    "Residential & Commercial Design",
    "Space Planning & Optimization",
    "Custom Color Schemes",
    "Material Selection & Sourcing",
    "3D Visualization",
    "Project Management",
   ],
   image: "/images/why.jpeg",
   gradient: "from-architectural-teal/10 to-accent/5",
  },
  {
   icon: Hammer,
   title: "Construction",
   subtitle: "Professional Construction Company",
   description:
    "We are a proud construction company in Lahore. We execute construction projects with professional and advanced solutions in the most desirable duration with design excellence and building quality, making your home more luxurious. Our experienced team ensures every project meets the highest standards.",
   features: [
    "Residential Construction",
    "Commercial Buildings",
    "Renovations & Extensions",
    "Quality Assurance",
    "Timeline Management",
    "Budget Optimization",
   ],
   image: "/images/why.jpeg",
   gradient: "from-architectural-bronze/10 to-warm-gray/20",
  },
  {
   icon: Ruler,
   title: "Architecture Design",
   subtitle: "Top Architect Design Company",
   description:
    "3D Vision Edge is the top architect design company in Lahore, Pakistan. We distinguish ourselves by providing comprehensive architectural designs for houses and offices. Our innovative approach combines functionality with aesthetic appeal to create spaces that inspire and endure.",
   features: [
    "Architectural Planning",
    "3D Modeling & Rendering",
    "Structural Design",
    "Sustainable Solutions",
    "Building Permits",
    "Site Analysis",
   ],
   image: "/images/why.jpeg",
   gradient: "from-accent/10 to-muted/50",
  },
  {
   icon: Sofa,
   title: "Furniture Design",
   subtitle: "Premium Furniture Services",
   description:
    "Matching international standards, our furniture services in Lahore focus on designing high-end contemporary and classic pieces with customization options, delivering supreme quality furniture built to last. Each piece is crafted with precision and attention to detail.",
   features: [
    "Custom Furniture Design",
    "Contemporary & Classic Styles",
    "Premium Materials",
    "Bespoke Solutions",
    "Installation Services",
    "Warranty & Support",
   ],
   image: "/images/why.jpeg",
   gradient: "from-warm-gray/30 to-secondary/30",
  },
 ];

 return (
  <main className="min-h-screen bg-background">
   {/* Hero Section */}
   <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
    <div
     className="absolute inset-0 bg-cover bg-center"
     style={{ backgroundImage: `url("image: "/images/why.jpeg")` }}>
     <div className="absolute inset-0 bg-linear-to-r from-charcoal/90 via-charcoal/70 to-charcoal/50" />
    </div>

    <div className="relative z-10 container mx-auto px-6 text-center">
     <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 tracking-tight">
      Our Services
     </h1>
     <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
      Excellence in Design, Construction & Visualization
     </p>
     <div className="mt-8 flex gap-4 justify-center">
      <button className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:scale-105">
       <Phone className="mr-2 h-5 w-5" />
       Contact Us
      </button>
      <button className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300">
       View Portfolio
      </button>
     </div>
    </div>
   </section>

   {/* Services Grid */}
   <section className="py-20 px-6">
    <div className="container mx-auto max-w-7xl">
     <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
       What We Do Best
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
       Our commitment to quality products and on-time services ensures our
       clients are always satisfied
      </p>
     </div>

     <div className="space-y-24">
      {services.map((service, index) => (
       <div
        key={service.title}
        className={`flex flex-col ${
         index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
        } gap-12 items-center`}>
        {/* Image */}
        <div className="flex-1 w-full">
         <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
          <Image
           src={service.image}
           alt={service.title}
           fill
           className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
           className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />
         </div>
        </div>

        {/* Content */}
        <div className="flex-1 w-full">
         <div className="p-8 border-border shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
           <div className="p-3 bg-accent/10 rounded-lg">
            <service.icon className="h-8 w-8 text-accent" />
           </div>
           <div>
            <h3 className="text-3xl font-bold text-foreground">
             {service.title}
            </h3>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">
             {service.subtitle}
            </p>
           </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
           {service.description}
          </p>

          <div className="space-y-3">
           <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {service.features.map((feature) => (
             <div key={feature} className="flex items-start gap-2">
              <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
             </div>
            ))}
           </div>
          </div>

          <button className="mt-6 w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300">
           Learn More
          </button>
         </div>
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* Stats Section */}
   <section className="py-20 bg-linear-to-br from-charcoal to-primary">
    <div className="container mx-auto px-6">
     <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
       { number: "135+", label: "Projects Complete" },
       { number: "80+", label: "Happy Clients" },
       { number: "7+", label: "Years Experience" },
       { number: "5+", label: "Active Projects" },
      ].map((stat) => (
       <div key={stat.label} className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
         {stat.number}
        </div>
        <div className="text-primary-foreground/80 text-sm md:text-base">
         {stat.label}
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* CTA Section */}
   <section className="py-20 px-6">
    <div className="container mx-auto max-w-4xl">
     <div className="p-12 text-center bg-linear-to-br from-accent/5 to-muted border-accent/20">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
       Ready to Start Your Project?
      </h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
       3D Vision Edge is committed to providing outstanding 3D visualization to
       bring your architectural visions to life
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
       <div className="flex items-center gap-3">
        <div className="p-2 bg-accent/10 rounded-lg">
         <Mail className="h-5 w-5 text-accent" />
        </div>
        <span className="text-foreground">furqan4479@gmail.com</span>
       </div>
       <div className="flex items-center gap-3">
        <div className="p-2 bg-accent/10 rounded-lg">
         <Phone className="h-5 w-5 text-accent" />
        </div>
        <span className="text-foreground">+92 301 1463337</span>
       </div>
      </div>

      <div className="flex items-center gap-3 justify-center mb-8">
       <div className="p-2 bg-accent/10 rounded-lg">
        <MapPin className="h-5 w-5 text-accent" />
       </div>
       <span className="text-muted-foreground">
        DHA Phase 6, Lahore, Pakistan
       </span>
      </div>

      <button className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:scale-105">
       Get a Free Consultation
      </button>
     </div>
    </div>
   </section>
  </main>
 );
};

export default Services;
