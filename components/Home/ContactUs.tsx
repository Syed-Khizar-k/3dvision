"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
 const sectionRef = useRef<HTMLElement>(null);

 // Native Fixed Background logic using CSS
 // The 'bg-fixed' class handles the fixed background.

 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [phone, setPhone] = useState("");
 const [company, setCompany] = useState("");
 const [projectType, setProjectType] = useState("");
 const [message, setMessage] = useState("");
 const [status, setStatus] = useState(""); // "idle", "loading", "success", "error"
 const [error, setError] = useState(""); // For any errors during the submission
 const [thankYouMessage, setThankYouMessage] = useState(""); // For success message
 const reset = () => {
  setName("");
  setEmail("");
  setPhone("");
  setCompany("");
  setProjectType("");
  setMessage("");
 };
 const handleSubmit = async (e: any) => {
  e.preventDefault();
  setStatus("loading");
  setError("");
  setThankYouMessage(""); // Clear any previous messages

  // Log form data to make sure it's being collected correctly
  console.log(name, email, phone, company, projectType, message);

  try {
   const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, phone, company, projectType, message }),
   });

   const result = await res.json(); // Parse JSON response from server

   if (result.success) {
    // If the response is successful (200 status)
    setStatus("success");
    setThankYouMessage(
     "Thank you! Our team will contact you as soon as possible."
    );
    reset(); // Reset the form fields
   } else {
    // If the response is not successful (error status)
    setStatus("error");
    setError("Something went wrong.");
   }
  } catch (err) {
   console.error("Error: ", err);
   setStatus("error");
   setError("Network error. Please try again.");
  }
 };

 return (
  <section
   ref={sectionRef}
   className="relative w-full bg-[url('/images/experience.webp')] bg-cover bg-center bg-fixed bg-no-repeat py-20 overflow-hidden">
   {/* Black overlay with slight transparency */}
   <div className="absolute inset-0 bg-black/40 z-0"></div>

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
     initial={{ opacity: 0, y: 100 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.6, ease: "easeOut" }}
     viewport={{ once: true }}
     className="md:w-1/2 w-full">
     <form className="bg-white/10 backdrop-blur-xs p-6 md:p-8 rounded-2xl border border-white/20 shadow-lg">
      {/* Name & Email */}
      <div className="flex flex-col md:flex-row md:gap-6">
       <div className="mb-4 md:w-1/2">
        <label className="block text-white mb-2 font-medium">
         Name <span className="text-red-500">*</span>
        </label>
        <input
         type="text"
         name="name"
         value={name}
         onChange={(e) => setName(e.target.value)}
         required
         className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-gray-400/40"
         placeholder="Enter your name"
        />
       </div>

       <div className="mb-4 md:w-1/2">
        <label className="block text-white mb-2 font-medium">
         Email <span className="text-red-500">*</span>
        </label>
        <input
         type="email"
         name="email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         required
         className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-gray-400/40"
         placeholder="Enter your email"
        />
       </div>
      </div>

      {/* Phone */}
      <div className="mb-4">
       <label className="block text-white mb-2 font-medium">
        Phone <span className="text-red-500">*</span>
       </label>
       <input
        type="text"
        name="phone"
        required
        className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-gray-400/40"
        placeholder="Enter your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
       />
      </div>

      {/* Company & Project Type */}
      <div className="flex flex-col md:flex-row md:gap-6">
       <div className="mb-4 md:w-1/2">
        <label className="block text-white mb-2 font-medium">Company</label>
        <input
         value={company}
         onChange={(e) => setCompany(e.target.value)}
         type="text"
         name="company"
         className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-gray-400/40"
         placeholder="Your company name"
        />
       </div>

       <div className="mb-4 md:w-1/2">
        <label className="block text-white mb-2 font-medium">
         Project Type
        </label>
        <select
         value={projectType}
         onChange={(e) => setProjectType(e.target.value)}
         name="projectType"
         className="
    w-full 
    p-3 
    rounded-xl
    bg-white/20 
    text-white 
    border border-gray-400/40 
    appearance-none 
    focus:outline-none 
    focus:ring-2 
    focus:ring-white/40
  "
         style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          color: "white",
         }}>
         <option className="text-black" value="">
          Select Project Type
         </option>
         <option className="text-black" value="residential">
          Residential
         </option>
         <option className="text-black" value="commercial">
          Commercial
         </option>
         <option className="text-black" value="industrial">
          Industrial
         </option>
        </select>
       </div>
      </div>

      {/* Message */}
      <div className="mb-6">
       <label className="block text-white mb-2 font-medium">Message</label>
       <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        name="message"
        rows={4}
        required
        className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-gray-400/40"
        placeholder="Write your message here..."
       />
      </div>

      {/* Status message */}
      {status === "success" && (
       <p className="text-green-400 mb-2">{thankYouMessage}</p>
      )}
      {status === "error" && <p className="text-red-400 mb-2">{error}</p>}

      {/* Button */}
      <button
       onClick={handleSubmit}
       type="submit"
       disabled={status === "loading"}
       className="w-full bg-secondary cursor-pointer disabled:opacity-50 text-white font-semibold py-3 rounded-xl transition">
       {status === "loading" ? "Submitting..." : "Submit"}
      </button>
     </form>
    </motion.div>
   </div>
  </section>
 );
};

export default ContactUs;
