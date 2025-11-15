"use client";

import { useEffect, useMemo, useState } from "react";
import SideBar from "../SideBar";

type Payment = {
 _id: string;
 projectName: string;
 startDate: string;
 totalAmount: number;
 receivedAmount: number;
 status: "pending" | "partial" | "paid";
 notes: string;
 createdAt: string;
};

const formatCurrency = (amount: number) => {
 return `Rs ${amount?.toLocaleString()}`;
};

export default function PaymentsPage() {
 const [payments, setPayments] = useState<Payment[]>([]);
 const [selected, setSelected] = useState<string[]>([]);
 const [isFormOpen, setIsFormOpen] = useState(false);

 const [form, setForm] = useState({
  projectName: "",
  startDate: "",
  totalAmount: "",
  receivedAmount: "",
  notes: "",
 });

 const [filters, setFilters] = useState({
  month: "",
  status: "",
 });

 // --- EDIT STATE ---
 const [isEditOpen, setIsEditOpen] = useState(false);
 const [editPayment, setEditPayment] = useState<Payment | null>(null);

 async function loadPayments() {
  const res = await fetch("/api/admin/payments/list", {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify(filters),
  });

  const data = await res.json();
  if (data.success) setPayments(data.payments);
 }

 useEffect(() => {
  loadPayments();
 }, []);

 // --- STATUS AUTO LOGIC ---
 function computeStatus(received: number, total: number) {
  if (received === 0) return "pending";
  if (received < total) return "partial";
  return "paid";
 }

 // --- CREATE PAYMENT ---
 async function createPayment(e: any) {
  e.preventDefault();

  const total = Number(form.totalAmount);
  const received = Number(form.receivedAmount || 0);

  const autoStatus = computeStatus(received, total);

  const res = await fetch("/api/admin/payments/create", {
   method: "POST",
   body: JSON.stringify({ ...form, status: autoStatus }),
   headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();
  if (data.success) {
   setForm({
    projectName: "",
    startDate: "",
    totalAmount: "",
    receivedAmount: "",
    notes: "",
   });
   setIsFormOpen(false);
   loadPayments();
  }
 }

 function toggleSelect(id: string) {
  setSelected((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
 }

 async function deleteSingle(id: string) {
  if (window.confirm("Are you sure you want to delete this payment?")) {
   await fetch("/api/admin/payments/delete", {
    method: "POST",
    body: JSON.stringify({ id }),
   });
   loadPayments();
  }
 }

 async function deleteBulk() {
  if (window.confirm(`Delete ${selected.length} selected payments?`)) {
   await fetch("/api/admin/payments/delete-many", {
    method: "POST",
    body: JSON.stringify({ ids: selected }),
   });
   setSelected([]);
   loadPayments();
  }
 }

 // SUMMARY STATS
 const summaryStats = useMemo(() => {
  const totalProjectAmount = payments.reduce(
   (acc, p) => acc + p.totalAmount,
   0
  );
  const totalReceived = payments.reduce((acc, p) => acc + p.receivedAmount, 0);
  const totalRemaining = totalProjectAmount - totalReceived;

  return { totalProjectAmount, totalReceived, totalRemaining };
 }, [payments]);

 // --- OPEN EDIT MODAL ---
 function openEditModal(payment: Payment) {
  setEditPayment(payment);
  setIsEditOpen(true);
 }

 // --- UPDATE PAYMENT ---
 async function updatePayment(e: any) {
  e.preventDefault();

  const total = editPayment!.totalAmount;
  const received = editPayment!.receivedAmount;

  const autoStatus = computeStatus(received, total);

  const res = await fetch("/api/admin/payments/update", {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({ ...editPayment, status: autoStatus }),
  });

  const data = await res.json();
  if (data.success) {
   setIsEditOpen(false);
   setEditPayment(null);
   loadPayments();
  }
 }

 return (
  <div className="flex">
   <SideBar />
   <div className="space-y-8 ml-0 md:ml-64 p-6 w-full bg-primary min-h-screen">
    <h1 className="text-3xl font-bold text-heading">💰 Payments Dashboard</h1>

    {/* SUMMARY CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
     <StatCard
      title="Total Amount"
      value={formatCurrency(summaryStats.totalProjectAmount)}
      color="blue"
     />
     <StatCard
      title="Total Received"
      value={formatCurrency(summaryStats.totalReceived)}
      color="green"
     />
     <StatCard
      title="Total Remaining"
      value={formatCurrency(summaryStats.totalRemaining)}
      color="yellow"
     />
    </div>

    {/* ADD PAYMENT FORM */}
    <div className="bg-[#0F172A] rounded-lg text-white shadow-md">
     <button
      onClick={() => setIsFormOpen(!isFormOpen)}
      className="w-full p-4 flex justify-between cursor-pointer items-center text-xl font-semibold">
      <span>{isFormOpen ? "➖ Hide Form" : "➕ Add Payment Record"}</span>
      <span
       className={`transform transition-transform duration-300 ${
        isFormOpen ? "rotate-180" : ""
       }`}>
       ▼
      </span>
     </button>

     <div
      className={`transition-all duration-500 overflow-hidden ${
       isFormOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
      }`}>
      <form onSubmit={createPayment} className="p-6 pt-0 space-y-4">
       <input
        required
        className="w-full p-3 rounded bg-[#1E293B] text-white border border-gray-600"
        placeholder="Project Name"
        value={form.projectName}
        onChange={(e) => setForm({ ...form, projectName: e.target.value })}
       />

       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
         required
         type="date"
         className="w-full p-3 rounded bg-[#1E293B] text-white border border-gray-600"
         value={form.startDate}
         onChange={(e) => setForm({ ...form, startDate: e.target.value })}
        />

        <input
         required
         type="number"
         className="w-full p-3 rounded bg-[#1E293B] text-white border border-gray-600"
         placeholder="Total Amount"
         value={form.totalAmount}
         onChange={(e) => setForm({ ...form, totalAmount: e.target.value })}
        />
       </div>

       <input
        type="number"
        className="w-full p-3 rounded bg-[#1E293B] text-white border border-gray-600"
        placeholder="Received Amount"
        value={form.receivedAmount}
        onChange={(e) => setForm({ ...form, receivedAmount: e.target.value })}
       />

       <textarea
        className="w-full p-3 rounded bg-[#1E293B] text-white border border-gray-600"
        placeholder="Notes (optional)"
        value={form.notes}
        onChange={(e) => setForm({ ...form, notes: e.target.value })}
       />

       <button className="bg-secondary cursor-pointer w-full p-3 rounded text-white font-bold">
        Add Payment
       </button>
      </form>
     </div>
    </div>

    {/* FILTERS */}
    <div className="p-4 bg-white rounded-lg shadow-md mt-4 mb-4">
     <h3 className="font-semibold text-lg mb-4 text-gray-700">
      Filters & Actions
     </h3>

     <div className="flex flex-wrap gap-4 items-center">
      <input
       type="month"
       className="p-3 rounded cursor-pointer text-black border border-gray-300"
       value={filters.month}
       onChange={(e) => setFilters({ ...filters, month: e.target.value })}
      />

      <select
       className="p-3 rounded cursor-pointer text-black border border-gray-300"
       value={filters.status}
       onChange={(e) => setFilters({ ...filters, status: e.target.value })}>
       <option value="">All Status</option>
       <option value="pending">Pending</option>
       <option value="partial">Partial</option>
       <option value="paid">Paid</option>
      </select>

      <button
       onClick={loadPayments}
       className="bg-secondary px-6 py-3 cursor-pointer rounded text-white font-semibold">
       Apply Filter
      </button>

      {selected.length > 0 && (
       <button
        onClick={deleteBulk}
        className="bg-red-600 px-6 py-3 rounded text-white font-semibold">
        Delete Selected ({selected.length})
       </button>
      )}
     </div>
    </div>

    {/* DESKTOP TABLE */}
    <div className="hidden md:block bg-white shadow-md rounded-lg overflow-hidden">
     <table className="w-full text-sm">
      <thead className="bg-gray-100">
       <tr>
        <th className="p-4"></th>
        <th className="p-4 text-left font-semibold text-gray-600 uppercase">
         Project
        </th>
        <th className="p-4 text-left font-semibold text-gray-600 uppercase">
         Start Date
        </th>
        <th className="p-4 text-left font-semibold text-gray-600 uppercase">
         Total
        </th>
        <th className="p-4 text-left font-semibold text-gray-600 uppercase">
         Received
        </th>
        <th className="p-4 text-left font-semibold text-gray-600 uppercase">
         Remaining
        </th>
        <th className="p-4 text-center font-semibold text-gray-600 uppercase">
         Status
        </th>
        <th className="p-4 text-center font-semibold text-gray-600 uppercase">
         Actions
        </th>
       </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
       {payments.map((p) => {
        const remaining = p.totalAmount - p.receivedAmount;

        return (
         <tr key={p._id} className="text-black hover:bg-gray-50">
          <td className="p-4 text-center">
           <input
            type="checkbox"
            className="cursor-pointer"
            checked={selected.includes(p._id)}
            onChange={() => toggleSelect(p._id)}
           />
          </td>

          <td className="p-4">{p.projectName}</td>

          <td className="p-4">
           {new Date(p.startDate).toLocaleDateString("en-US")}
          </td>

          <td className="p-4">{formatCurrency(p.totalAmount)}</td>

          <td className="p-4">{formatCurrency(p.receivedAmount)}</td>

          <td className="p-4 font-semibold">{formatCurrency(remaining)}</td>

          <td className="p-4 text-center">
           <StatusBadge status={p.status} />
          </td>

          <td className="p-4 flex gap-2 justify-center">
           <button
            className="bg-red-600 cursor-pointer text-white px-3 py-1 rounded"
            onClick={() => deleteSingle(p._id)}>
            Delete
           </button>

           <button
            className="text-heading cursor-pointer font-bold px-3 py-1 rounded"
            onClick={() => openEditModal(p)}>
            Edit
           </button>
          </td>
         </tr>
        );
       })}
      </tbody>
     </table>
    </div>

    {/* MOBILE CARDS */}
    <div className="md:hidden space-y-4">
     {payments.map((p) => {
      const remaining = p.totalAmount - p.receivedAmount;

      return (
       <div key={p._id} className="bg-white p-4 rounded-lg shadow text-black">
        <div className="flex justify-between items-center">
         <h3 className="font-bold text-lg">{p.projectName}</h3>
         <input
          type="checkbox"
          checked={selected.includes(p._id)}
          onChange={() => toggleSelect(p._id)}
         />
        </div>

        <p className="mt-2 text-sm">
         <strong>Total:</strong> {formatCurrency(p.totalAmount)}
        </p>
        <p className="text-sm">
         <strong>Received:</strong> {formatCurrency(p.receivedAmount)}
        </p>
        <p className="text-sm">
         <strong>Remaining:</strong> {formatCurrency(remaining)}
        </p>

        <p className="flex items-center gap-2 mt-2">
         <strong>Status:</strong> <StatusBadge status={p.status} />
        </p>

        <button
         className="mt-3 w-full text-black p-2 rounded"
         onClick={() => openEditModal(p)}>
         Edit
        </button>

        <button
         className="mt-2 w-full bg-red-600 text-white p-2 rounded"
         onClick={() => deleteSingle(p._id)}>
         Delete
        </button>
       </div>
      );
     })}
    </div>

    {/* EDIT MODAL */}
    {isEditOpen && editPayment && (
     <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-[400px] p-6 space-y-4 text-black shadow-xl">
       <h2 className="text-xl font-bold">Edit Payment</h2>

       <form onSubmit={updatePayment} className="space-y-4">
        <input
         className="w-full p-3 border rounded"
         value={editPayment.projectName}
         onChange={(e) =>
          setEditPayment({
           ...editPayment,
           projectName: e.target.value,
          })
         }
        />

        <input
         type="date"
         className="w-full p-3 border rounded"
         value={editPayment.startDate.slice(0, 10)}
         onChange={(e) =>
          setEditPayment({
           ...editPayment,
           startDate: e.target.value,
          })
         }
        />

        {/* --- FIXED: TOTAL AUTO-STATUS LOGIC --- */}
        <input
         type="number"
         className="w-full p-3 border rounded"
         value={editPayment.totalAmount}
         onChange={(e) => {
          const total = Number(e.target.value);
          const received = editPayment.receivedAmount;
          const newStatus = computeStatus(received, total);
          setEditPayment({
           ...editPayment,
           totalAmount: total,
           status: newStatus,
          });
         }}
        />

        {/* --- FIXED: RECEIVED AUTO-STATUS LOGIC --- */}
        <input
         type="number"
         className="w-full p-3 border rounded"
         value={editPayment.receivedAmount}
         onChange={(e) => {
          const received = Number(e.target.value);
          const total = editPayment.totalAmount;
          const newStatus = computeStatus(received, total);
          setEditPayment({
           ...editPayment,
           receivedAmount: received,
           status: newStatus,
          });
         }}
        />

        <textarea
         className="w-full p-3 border rounded"
         value={editPayment.notes}
         onChange={(e) =>
          setEditPayment({
           ...editPayment,
           notes: e.target.value,
          })
         }
        />

        <select
         className="w-full p-3 border rounded"
         value={editPayment.status}
         onChange={(e) =>
          setEditPayment({
           ...editPayment,
           status: e.target.value as any,
          })
         }>
         <option value="pending">Pending</option>
         <option value="partial">Partial</option>
         <option value="paid">Paid</option>
        </select>

        <div className="flex gap-3 pt-2">
         <button
          type="submit"
          className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded w-full">
          Save Changes
         </button>

         <button
          type="button"
          className="bg-gray-300 cursor-pointer px-4 py-2 rounded w-full"
          onClick={() => setIsEditOpen(false)}>
          Cancel
         </button>
        </div>
       </form>
      </div>
     </div>
    )}
   </div>
  </div>
 );
}

// STATUS BADGE
function StatusBadge({ status }: { status: "paid" | "partial" | "pending" }) {
 const colors = {
  paid: "bg-green-100 text-green-800",
  partial: "bg-yellow-100 text-yellow-800",
  pending: "bg-red-100 text-red-800",
 };

 return (
  <span
   className={`px-3 py-1 rounded-full text-xs font-semibold ${colors[status]}`}>
   {status.charAt(0).toUpperCase() + status.slice(1)}
  </span>
 );
}

// STAT CARD
function StatCard({
 title,
 value,
 color,
}: {
 title: string;
 value: string;
 color: "blue" | "green" | "yellow";
}) {
 const colors = {
  blue: "border-t-blue-500",
  green: "border-t-green-500",
  yellow: "border-t-yellow-500",
 };
 return (
  <div
   className={`bg-white p-4 shadow-md rounded-lg border-t-4 ${colors[color]}`}>
   <h4 className="text-sm font-medium text-gray-500 uppercase">{title}</h4>
   <p className="text-2xl font-bold text-black">{value}</p>
  </div>
 );
}
