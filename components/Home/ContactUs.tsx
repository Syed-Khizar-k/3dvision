"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const ContactUs = () => {
 const [status, setStatus] = useState("idle");
 const [errorMsg, setErrorMsg] = useState("");

 const handleSubmit = async (e:any) => {
  e.preventDefault();
  setStatus("loading");
  setErrorMsg("");

  const formData = new FormData(e.target);
  const payload = Object.fromEntries(formData.entries());

  try {
   const res = await fetch("http://127.0.0.1:8000/api/contact/", {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
   });

   if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    setErrorMsg(data.error || "Something went wrong.");
    setStatus("error");
    return;
   }

   setStatus("success");
   e.target.reset();
  } catch (err) {
   setErrorMsg("Network error. Please try again.");
   setStatus("error");
  }
 };
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
      onSubmit={handleSubmit}
      className="bg-white/10 backdrop-blur-xs p-6 md:p-8 rounded-2xl border border-white/20 shadow-lg">
      {/* Name & Email */}
      <div className="flex flex-col md:flex-row md:gap-6">
       <div className="mb-4 md:w-1/2">
        <label className="block text-white mb-2 font-medium">
         Name <span className="text-red-500">*</span>
        </label>
        <input
         type="text"
         name="name"
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
       />
      </div>

      {/* Company & Project Type */}
      <div className="flex flex-col md:flex-row md:gap-6">
       <div className="mb-4 md:w-1/2">
        <label className="block text-white mb-2 font-medium">Company</label>
        <input
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
         name="project-type"
         className="w-full p-3 rounded-xl bg-white/20 text-white border border-gray-400/40">
         <option value="">Select Project Type</option>
         <option value="residential">Residential</option>
         <option value="commercial">Commercial</option>
         <option value="industrial">Industrial</option>
        </select>
       </div>
      </div>

      {/* Message */}
      <div className="mb-6">
       <label className="block text-white mb-2 font-medium">Message</label>
       <textarea
        name="message"
        rows={4}
        required
        className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-gray-400/40"
        placeholder="Write your message here..."
       />
      </div>

      {/* Status message */}
      {status === "success" && (
       <p className="text-green-300 mb-2">✔ Message sent successfully!</p>
      )}
      {status === "error" && <p className="text-red-300 mb-2">❌ {errorMsg}</p>}

      {/* Button */}
      <button
       type="submit"
       disabled={status === "loading"}
       className="w-full bg-(--color-secondary) hover:bg-(--color-primary) disabled:opacity-50 text-white font-semibold py-3 rounded-xl transition">
       {status === "loading" ? "Sending..." : "Submit"}
      </button>
     </form>
    </motion.div>
   </div>
  </section>
 );
};

export default ContactUs;
