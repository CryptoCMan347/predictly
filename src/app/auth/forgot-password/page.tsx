"use client";
import React, { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");
    const res = await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, newPassword })
    });
    setLoading(false);
    if (res.ok) {
      setMessage("Password reset! You can now sign in with your new password.");
      setEmail("");
      setNewPassword("");
    } else {
      const data = await res.json();
      setError(data.error || "Reset failed.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white animate-fade-in">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md"
        aria-label="Forgot password form"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Reset Password</h1>
        <label className="block mb-2 text-gray-300" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <label className="block mb-2 text-gray-300" htmlFor="newPassword">New Password</label>
        <input
          id="newPassword"
          type="password"
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        {error && <div className="text-red-400 mb-4 text-sm">{error}</div>}
        {message && <div className="text-green-400 mb-4 text-sm">{message}</div>}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-4 rounded-full text-lg shadow transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-300 mb-4 disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </main>
  );
} 