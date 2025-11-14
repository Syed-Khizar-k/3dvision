"use client";

import { useEffect, useState } from "react";

// It's good practice to define a type for your data
type FormEntry = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  message: string;
  date: string;
};

export default function AdminDashboard() {
  const [forms, setForms] = useState<FormEntry[]>([]); // Use the type here

  useEffect(() => {
    async function loadData() {
      const res = await fetch("/api/contact/all");
      const data = await res.json();

      if (data.success) setForms(data.data);
    }
    loadData();
  }, []);

  return (
    <div className="p-4 md:p-10 bg-primary min-h-screen"> {/* Added responsive padding */}
      <h1 className="text-3xl md:text-4xl font-bold text-heading tracking-[-1px] text-center">
        Welcome Back, Syed Furqan Haider!
      </h1>

      <div className="pt-12 md:pt-20">
        <h1 className="text-2xl md:text-3xl font-bold text-heading mb-6">
          Contact Form Submissions
        </h1>

        {/* --- MOBILE CARD VIEW --- */}
        {/* This div is visible on mobile and hidden on medium screens and up */}
        <div className="md:hidden space-y-4">
          {forms.map((f) => (
            <div
              key={f._id}
              className="border rounded-lg shadow-lg p-4 bg-white text-black"
            >
              {/* Card Header */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-lg">{f.name}</h3>
                <span className="text-xs text-gray-500">
                  {new Date(f.date).toLocaleDateString()}
                </span>
              </div>

              {/* Card Body */}
              <div className="space-y-2 text-sm">
                <div>
                  <strong className="text-gray-700">Email: </strong>
                  <a href={`mailto:${f.email}`} className="text-blue-600 break-all">
                    {f.email}
                  </a>
                </div>
                <div>
                  <strong className="text-gray-700">Phone: </strong> {f.phone}
                </div>
                <div>
                  <strong className="text-gray-700">Company: </strong> {f.company}
                </div>
                <div>
                  <strong className="text-gray-700">Type: </strong> {f.projectType}
                </div>
              </div>

              {/* Card Footer for Message */}
              <div className="mt-4 pt-3 border-t border-gray-200">
                <strong className="text-gray-700">Message:</strong>
                <p className="mt-1 text-sm text-gray-800 whitespace-pre-wrap">
                  {f.message}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- DESKTOP TABLE VIEW --- */}
        {/* This div is hidden on mobile and visible (as a block) on medium screens and up */}
        <div className="hidden md:block overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full border-collapse border text-sm"> {/* Added text-sm */}
            <thead className="text-xs uppercase bg-gray-50"> {/* Improved header style */}
              <tr className="border bg-secondary">
                <th className="border p-3">Name</th>
                <th className="border p-3">Email</th>
                <th className="border p-3">Phone</th>
                <th className="border p-3">Company</th>
                <th className="border p-3">Type</th>
                <th className="border p-3">Message</th>
                <th className="border p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {forms.map((f) => (
                <tr key={f._id} className="border text-black bg-white hover:bg-gray-50">
                  <td className="border p-3">{f.name}</td>
                  <td className="border p-3">{f.email}</td>
                  <td className="border p-3">{f.phone}</td>
                  <td className="border p-3">{f.company}</td>
                  <td className="border p-3">{f.projectType}</td>
                  <td className="border p-3 max-w-xs truncate">{f.message}</td> {/* Truncate long messages */}
                  <td className="border p-3">{new Date(f.date).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}