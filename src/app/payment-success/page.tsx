"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white animate-fade-in">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-green-400">Payment Successful!</h1>
        <p className="mb-4 text-lg">Thank you for your purchase.</p>
        <p className="mb-4 text-green-300">Your credits will be added to your account shortly.</p>
        <a href="/my-credits" className="inline-block mt-4 bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-6 rounded-full text-lg shadow transition-all duration-200">Go to My Credits</a>
        {/* Optionally show session ID for debugging */}
        {sessionId && <div className="mt-4 text-xs text-gray-400">Session ID: {sessionId}</div>}
      </div>
    </main>
  );
} 