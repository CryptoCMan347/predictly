"use client";
export const dynamic = "force-dynamic";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function PaymentSuccessPage() {
  const { data: session, update } = useSession();
  const router = useRouter();
  const [isRefreshing, setIsRefreshing] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 5;
  const retryDelay = 2000; // 2 seconds

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const refreshSession = async () => {
      try {
        await update();
        
        // If we've hit max retries, stop trying
        if (retryCount >= maxRetries) {
          setIsRefreshing(false);
          return;
        }

        // Schedule next retry if needed
        timeoutId = setTimeout(() => {
          setRetryCount(prev => prev + 1);
        }, retryDelay);

      } catch (error) {
        console.error('Error refreshing session:', error);
        setIsRefreshing(false);
      }
    };

    refreshSession();

    // Cleanup timeout on unmount
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [update, retryCount]);

  const handleViewCredits = () => {
    router.push('/my-credits');
    router.refresh();
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-4 text-green-400">Payment Successful!</h1>
          <p className="mb-4 text-lg">Thank you for your purchase.</p>
          {isRefreshing ? (
            <div className="space-y-3">
              <p className="text-green-400">Updating your credits...</p>
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-400"></div>
              </div>
            </div>
          ) : (
            <p className="text-green-400">Your credits have been added to your account.</p>
          )}
        </div>
        
        <div className="space-y-3">
          <button
            onClick={handleViewCredits}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
          >
            View My Credits
          </button>
          
          <Link 
            href="/"
            className="block w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
} 