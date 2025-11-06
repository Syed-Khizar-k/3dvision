"use client";
import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const ContactUs = () => {
 return (
  <section
   className="relative w-full py-20 bg-fixed bg-center bg-cover bg-no-repeat"
   style={{
    backgroundImage: "url('/images/experience.webp')", // ⬅️ Replace with your actual image path
   }}>
   {/* Black overlay with slight transparency */}
   <div className="absolute inset-0 bg-black/30 z-0"></div>

   <div className="container mx-auto flex md:flex-row flex-col justify-center items-center gap-10 relative z-10 px-6">
    {/* LEFT SIDE */}
    <div className="md:w-1/2 w-full text-white">
     <div className="mb-8 text-center md:text-left space-y-4">
      <h2 className="text-4xl font-bold text-white">CONTACT US</h2>
      <p className="text-lg leading-relaxed text-gray-100">
       3D Vision Edge is committed to providing outstanding 3D visualization to
       bring to life your architectural visions. Our team is available to work
       closely with you as an architect, designer, or developer to produce
       visually stunning and detailed renderings that enhance your projects.
       We’re prepared to help your next idea with cutting-edge visual solutions,
       with a focus on accuracy, creativity, and client satisfaction. Get in
       touch with us now; let’s start transforming your idea into a reality.
      </p>
     </div>

     <ul className="md:text-left text-center space-y-2 text-gray-200">
      <li className="pb-2 flex gap-2">
       <MdEmail className="text-white text-2xl" />
       <span> furqan4479@gmail.com</span>
      </li>
      <li className="pb-2 flex gap-2">
       <MdPhone className="text-white text-2xl" />
       <span> +92 301 1463337</span>
      </li>
      <li className="pb-2 flex gap-2">
       <MdLocationOn className="text-white text-2xl" />
       <span> DHA Phase 6, Lahore, Pakistan</span>
      </li>
     </ul>
    </div>

    {/* RIGHT SIDE FORM */}
    <motion.div
     initial={{ opacity: 0, y: 200 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.6, ease: "easeOut" }}
     viewport={{ once: true }}
     className="md:w-1/2 w-full">
     <form
      action="submit"
      className="bg-white/10 backdrop-blur-xs p-6 md:p-8 rounded-2xl border border-white/20 shadow-lg">
      {/* Name & Email */}
      <div className="flex flex-col md:flex-row md:gap-6">
       <div className="mb-4 md:w-1/2">
        <label htmlFor="name" className="block text-white mb-2 font-medium">
         Name <span className="text-red-500">*</span>
        </label>
        <input
         type="text"
         id="name"
         name="name"
         required
         className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-gray-400/40 focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)] focus:outline-none transition"
         placeholder="Enter your name"
        />
       </div>

       <div className="mb-4 md:w-1/2">
        <label htmlFor="email" className="block text-white mb-2 font-medium">
         Email <span className="text-red-500">*</span>
        </label>
        <input
         type="email"
         id="email"
         name="email"
         required
         className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-gray-400/40 focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)] focus:outline-none transition"
         placeholder="Enter your email"
        />
       </div>
      </div>

      {/* Phone */}
      <div className="mb-4">
       <label htmlFor="phone" className="block text-white mb-2 font-medium">
        Phone <span className="text-red-500">*</span>
       </label>
       <input
        type="tel"
        id="phone"
        name="phone"
        required
        className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-gray-400/40 focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)] focus:outline-none transition"
        placeholder="Enter your phone number"
       />
      </div>

      {/* Company & Project Type */}
      <div className="flex flex-col md:flex-row md:gap-6">
       <div className="mb-4 md:w-1/2">
        <label htmlFor="company" className="block text-white mb-2 font-medium">
         Company
        </label>
        <input
         type="text"
         id="company"
         name="company"
         className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-gray-400/40 focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)] focus:outline-none transition"
         placeholder="Your company name"
        />
       </div>

       <div className="mb-4 md:w-1/2">
        <label
         htmlFor="project-type"
         className="block text-white mb-2 font-medium">
         Project Type
        </label>
        <select
         id="project-type"
         name="project-type"
         required
         className="w-full p-3 rounded-xl bg-white/20 text-white border border-gray-400/40 focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)] focus:outline-none transition">
         <option value="">Select Project Type</option>
         <option value="residential">Residential</option>
         <option value="commercial">Commercial</option>
         <option value="industrial">Industrial</option>
        </select>
       </div>
      </div>

      {/* Message */}
      <div className="mb-6">
       <label htmlFor="message" className="block text-white mb-2 font-medium">
        Message
       </label>
       <textarea
        id="message"
        name="message"
        rows={4}
        className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-gray-400/40 focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)] focus:outline-none transition"
        placeholder="Write your message here..."
        required></textarea>
      </div>

      {/* Submit Button */}
      <button
       type="submit"
       className="w-full cursor-pointer bg-(--color-secondary) hover:bg-(--color-primary) text-white font-semibold py-3 rounded-xl transition duration-300">
       Submit
      </button>
     </form>
    </motion.div>
   </div>
  </section>
 );
};

export default ContactUs;
