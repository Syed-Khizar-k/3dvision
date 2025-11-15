"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SideBar from "./SideBar";

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
 const [forms, setForms] = useState<FormEntry[]>([]);
 const [selected, setSelected] = useState<string[]>([]);
 const [fromDate, setFromDate] = useState("");
 const [toDate, setToDate] = useState("");

 // LOAD DATA
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

 // TOGGLE SELECT
 const toggleSelect = (id: string) => {
  setSelected((prev) =>
   prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
  );
 };

 // DELETE ONE
 const deleteSingle = async (id: string) => {
  await fetch("/api/admin/forms/delete", {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({ id }),
  });
  loadData();
 };

 // DELETE MANY
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
  <>
   <div className="flex">
    <SideBar />
    <div className="ml-0 md:ml-64 p-6 bg-primary min-h-screen w-full">
     <h1 className="text-3xl md:text-4xl font-bold text-heading text-center">
      📩 Contact Form Submissions
     </h1>

     {/* FILTERS */}
     <div className="pt-10 flex flex-col md:flex-row gap-4 items-start md:items-end">
      <div>
       <label className="text-heading font-semibold">From Date:</label>
       <input
        type="date"
        className="block p-2 rounded text-black border w-full"
        value={fromDate}
        onChange={(e) => setFromDate(e.target.value)}
       />
      </div>

      <div>
       <label className="text-heading font-semibold">To Date:</label>
       <input
        type="date"
        className="block p-2 rounded text-black border w-full"
        value={toDate}
        onChange={(e) => setToDate(e.target.value)}
       />
      </div>

      <button
       onClick={loadData}
       className="bg-secondary text-white px-4 py-2 rounded shadow hover:opacity-90">
       Apply Filter
      </button>

      {selected.length > 0 && (
       <button
        onClick={deleteBulk}
        className="bg-red-600 text-white px-4 py-2 rounded shadow hover:opacity-90">
        Delete Selected ({selected.length})
       </button>
      )}
     </div>

     {/* TABLE */}
     <div className="hidden md:block mt-10 overflow-x-auto shadow-md rounded-lg">
      <table className="w-full border-collapse text-sm">
       <thead className="bg-secondary text-white uppercase text-xs">
        <tr>
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
         <tr key={f._id} className="bg-white text-black hover:bg-gray-50">
          <td className="border p-3 text-center">
           <input
            type="checkbox"
            checked={selected.includes(f._id)}
            onChange={() => toggleSelect(f._id)}
            className="cursor-pointer"
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
            className="bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => deleteSingle(f._id)}>
            Delete
           </button>
          </td>
         </tr>
        ))}

        {forms.length === 0 && (
         <tr>
          <td colSpan={9} className="p-4 text-center text-gray-500">
           No records found.
          </td>
         </tr>
        )}
       </tbody>
      </table>
     </div>

     {/* MOBILE CARDS */}
     <div className="md:hidden mt-10 space-y-4">
      {forms.length === 0 && (
       <div className="text-center text-gray-500 bg-white p-4 rounded-lg shadow">
        No records found.
       </div>
      )}

      {forms.map((f) => (
       <div
        key={f._id}
        className="bg-white p-4 rounded-lg shadow text-black space-y-2">
        <div className="flex justify-between items-center">
         <h3 className="font-bold text-lg">{f.name}</h3>
         <input
          type="checkbox"
          checked={selected.includes(f._id)}
          onChange={() => toggleSelect(f._id)}
         />
        </div>

        <p>
         <strong>Email:</strong> {f.email}
        </p>
        <p>
         <strong>Phone:</strong> {f.phone}
        </p>
        <p>
         <strong>Company:</strong> {f.company || "—"}
        </p>
        <p>
         <strong>Type:</strong> {f.projectType}
        </p>

        <p className="text-sm">
         <strong>Message:</strong> {f.message}
        </p>

        <p className="text-xs text-gray-500">
         {new Date(f.date).toLocaleString()}
        </p>

        <button
         className="w-full bg-red-600 text-white p-2 rounded mt-2"
         onClick={() => deleteSingle(f._id)}>
         Delete
        </button>
       </div>
      ))}
     </div>
    </div>
   </div>
  </>
 );
}
