"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: any) {
    e.preventDefault();

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.success) {
      window.location.href = "/admin";
    } else {
      setError("Invalid Email or Password");
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-primary">
      <form
        onSubmit={handleLogin}
        className="p-6 shadow-lg rounded-xl bg-white w-[350px]"
      >
        <h1 className="text-2xl text-heading mb-4 font-bold">Admin Login</h1>

        {error && <p className="text-red-600 mb-3">{error}</p>}

        {/* Email */}
        <input
          className="border border-heading text-black rounded-xl placeholder:text-black/40 p-3 w-full mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password with Eye Icon */}
        <div className="relative mb-3">
          <input
            className="border border-heading text-black placeholder:text-black/40 rounded-xl p-3 w-full"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer"
          >
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </span>
        </div>

        <button className="bg-secondary cursor-pointer text-white p-3 w-full rounded">
          Login
        </button>
      </form>
    </div>
  );
}
