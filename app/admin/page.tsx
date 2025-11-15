"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

// ---- TYPES ----
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
 // UI State
 const [sidebarOpen, setSidebarOpen] = useState(false);

 // Data State
 const [forms, setForms] = useState<FormEntry[]>([]);
 const [selected, setSelected] = useState<string[]>([]);
 const [fromDate, setFromDate] = useState("");
 const [toDate, setToDate] = useState("");

 // Load Forms
 async function loadData() {
  const res = await fetch("/api/admin/forms", {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({ from: fromDate, to: toDate }),
  });

  const data = await res.json();
  if (data.success) setForms(data.forms);
 }

 useEffect(() => {
  loadData();
 }, []);

 // Checkbox Toggle
 const toggleSelect = (id: string) => {
  setSelected((prev) =>
   prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
  );
 };

 // Delete Single
 const deleteSingle = async (id: string) => {
  await fetch("/api/admin/forms/delete", {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({ id }),
  });
  loadData();
 };

 // Bulk Delete
 const deleteBulk = async () => {
  await fetch("/api/admin/forms/delete-many", {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({ ids: selected }),
  });

  setSelected([]);
  loadData();
 };

 return (
  <div className="flex min-h-screen bg-primary text-white max-md:pt-[70px]">
   {/* ---------- SIDEBAR ---------- */}
   <aside
    className={`fixed z-20 top-0 left-0 h-full bg-[#0F172A] w-64 p-6 transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} md:translate-x-0`}>
    <h2 className="text-2xl font-bold mb-8">3D Vision Admin</h2>

    <nav className="space-y-4">
     <Link
      href="/admin"
      className="block bg-secondary text-white px-4 py-2 rounded shadow">
      📄 Contact Forms
     </Link>

     {/* Future Tabs */}
     <button className="block w-full text-left px-4 py-2 rounded bg-white/10 hover:bg-white/20 cursor-not-allowed opacity-40">
      📦 Payments
     </button>

     <button className="block w-full text-left px-4 py-2 rounded bg-white/10 hover:bg-white/20 cursor-not-allowed opacity-40">
      ⚙️ Settings
     </button>
    </nav>
   </aside>

   {/* ---------- MOBILE SIDEBAR TOGGLE ---------- */}
   <button
    className="md:hidden fixed top-4 left-4 bg-secondary text-white p-2 rounded-full z-30"
    onClick={() => setSidebarOpen(!sidebarOpen)}>
    {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
   </button>

   {/* ---------- MAIN CONTENT ---------- */}
   <main className="flex-1 md:ml-64 p-6 md:p-10">
    <h1 className="text-3xl md:text-4xl font-bold text-heading text-center">
     Welcome Back, Syed Furqan Haider!
    </h1>

    {/* ---------- FILTER BAR ---------- */}
    <div className="pt-10  flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-end">
     <div>
      <label className="text-heading font-semibold">From Date:</label>
      <input
       type="date"
       className="block cursor-pointer p-2 rounded text-black border w-full"
       value={fromDate}
       onChange={(e) => setFromDate(e.target.value)}
      />
     </div>

     <div>
      <label className="text-heading font-semibold">To Date:</label>
      <input
       type="date"
       className="block p-2 cursor-pointer rounded text-black border w-full"
       value={toDate}
       onChange={(e) => setToDate(e.target.value)}
      />
     </div>

     <button
      onClick={loadData}
      className="bg-secondary cursor-pointer text-white px-4 py-2 rounded">
      Apply Filter
     </button>

     {selected.length > 0 && (
      <button
       onClick={deleteBulk}
       className="bg-red-600 text-white px-4 py-2 rounded">
       Delete Selected ({selected.length})
      </button>
     )}

     <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded">
      Home Page
     </Link>
    </div>

    {/* ---------- TABLE (DESKTOP) ---------- */}
    <div className="hidden md:block mt-10 overflow-x-auto relative shadow-md sm:rounded-lg">
     <table className="w-full border-collapse border text-sm">
      <thead className="bg-gray-100 text-xs uppercase">
       <tr className="bg-secondary text-white">
        <th className="border p-3">✓</th>
        <th className="border p-3">Name</th>
        <th className="border p-3">Email</th>
        <th className="border p-3">Phone</th>
        <th className="border p-3">Company</th>
        <th className="border p-3">Type</th>
        <th className="border p-3">Message</th>
        <th className="border p-3">Date</th>
        <th className="border p-3">Delete</th>
       </tr>
      </thead>

      <tbody>
       {forms.map((f) => (
        <tr key={f._id} className="border bg-white text-black hover:bg-gray-50">
         <td className="border p-3 text-center">
          <input
           type="checkbox"
           className="cursor-pointer"
           checked={selected.includes(f._id)}
           onChange={() => toggleSelect(f._id)}
          />
         </td>
         <td className="border p-3">{f.name}</td>
         <td className="border p-3">{f.email}</td>
         <td className="border p-3">{f.phone}</td>
         <td className="border p-3">{f.company}</td>
         <td className="border p-3">{f.projectType}</td>
         <td className="border p-3 max-w-xs truncate">{f.message}</td>
         <td className="border p-3">{new Date(f.date).toLocaleString()}</td>
         <td className="border p-3">
          <button
           className="bg-red-500 cursor-pointer text-white px-3 py-1 rounded"
           onClick={() => deleteSingle(f._id)}>
           Delete
          </button>
         </td>
        </tr>
       ))}

       {forms.length === 0 && (
        <tr>
         <td
          colSpan={9}
          className="text-center p-4 text-gray-500 font-semibold">
          No records found.
         </td>
        </tr>
       )}
      </tbody>
     </table>
    </div>

    {/* ---------- MOBILE VIEW CARDS ---------- */}
    <div className="pt-10 md:hidden space-y-4">
     {forms.map((f) => (
      <div
       key={f._id}
       className="border rounded-lg shadow-lg p-4 bg-white text-black">
       <div className="flex justify-between mb-2">
        <input
         type="checkbox"
         className="cursor-pointer"
         checked={selected.includes(f._id)}
         onChange={() => toggleSelect(f._id)}
        />
        <span className="text-xs text-gray-500">
         {new Date(f.date).toLocaleDateString()}
        </span>
       </div>

       <h3 className="font-bold text-lg">{f.name}</h3>

       <div className="space-y-2 text-sm mt-2">
        <div>
         <strong>Email: </strong>
         <a href={`mailto:${f.email}`} className="text-blue-600">
          {f.email}
         </a>
        </div>
        <div>
         <strong>Phone: </strong> {f.phone}
        </div>
        <div>
         <strong>Company: </strong> {f.company}
        </div>
        <div>
         <strong>Type: </strong> {f.projectType}
        </div>
       </div>

       <div className="mt-3">
        <strong>Message:</strong>
        <p className="text-sm mt-1 whitespace-pre-wrap">{f.message}</p>
       </div>

       <button
        className="mt-3 bg-red-500 text-white px-3 py-1 rounded"
        onClick={() => deleteSingle(f._id)}>
        Delete
       </button>
      </div>
     ))}
    </div>
   </main>
  </div>
 );
}
