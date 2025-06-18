"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username, password, referralCode })
    });
    setLoading(false);
    if (res.ok) {
      setSuccess(true);
      setTimeout(() => router.push("/auth/signin"), 1200);
    } else {
      const data = await res.json();
      setError(data.error || "Sign up failed.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white animate-fade-in">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md"
        aria-label="Sign up form"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
        <label className="block mb-2 text-gray-300" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <label className="block mb-2 text-gray-300" htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <label className="block mb-2 text-gray-300" htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <label className="block mb-2 text-gray-300" htmlFor="referralCode">Referral Code (optional)</label>
        <input
          id="referralCode"
          type="text"
          value={referralCode}
          onChange={e => setReferralCode(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter a referral code if you have one"
        />
        {error && <div className="text-red-400 mb-4 text-sm">{error}</div>}
        {success && <div className="text-green-400 mb-4 text-sm">Account created! Redirecting...</div>}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-4 rounded-full text-lg shadow transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-300 mb-4 disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
        <div className="text-center text-gray-400 text-sm">
          Already have an account? <Link href="/auth/signin" className="text-green-400 underline">Sign in</Link>
        </div>
      </form>
    </main>
  );
} 