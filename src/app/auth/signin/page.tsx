"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    setLoading(false);
    if (res?.error) {
      setError("Invalid email or password.");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white animate-fade-in">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md"
        aria-label="Sign in form"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>
        <label className="block mb-2 text-gray-300" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <label className="block mb-2 text-gray-300" htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-2 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        {/* Forgot password link */}
        <div className="mb-4 text-right">
          <Link href="/auth/forgot-password" className="text-sm text-yellow-400 hover:underline">Forgot password?</Link>
        </div>
        {error && <div className="text-red-400 mb-4 text-sm">{error}</div>}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-4 rounded-full text-lg shadow transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-300 mb-4 disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
        <div className="text-center text-gray-400 text-sm">
          Don&apos;t have an account? <Link href="/auth/signup" className="text-green-400 underline">Sign up</Link>
        </div>
      </form>
    </main>
  );
} 