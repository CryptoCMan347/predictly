"use client";
export const dynamic = "force-dynamic";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const CREDIT_PACKAGES = [
  { credits: 100, price: 10 },
  { credits: 250, price: 20 },
  { credits: 500, price: 35 }
];

export default function MyCreditsPage() {
  const { data: session, status } = useSession();
  const [showDialog, setShowDialog] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<typeof CREDIT_PACKAGES[0] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleOpenDialog = () => {
    setSelectedPackage(null);
    setError("");
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    setError("");
  };

  const handleStripeCheckout = async () => {
    if (!session?.user?.id || !selectedPackage) {
      setError("Please select a credit package");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          credits: selectedPackage.credits,
          userId: session.user.id
        }),
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || "Failed to start checkout");
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (err) {
      console.error('Stripe checkout error:', err);
      setError(err instanceof Error ? err.message : "Failed to start checkout");
    } finally {
      setLoading(false);
    }
  };

  const handleCryptoCheckout = async () => {
    if (!session?.user?.id || !selectedPackage) {
      setError("Please select a credit package");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/coinbase/checkout", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          creditAmount: selectedPackage.credits
        }),
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || "Failed to start crypto checkout");
      }

      if (data.hostedUrl) {
        window.location.href = data.hostedUrl;
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (err) {
      console.error('Coinbase checkout error:', err);
      setError(err instanceof Error ? err.message : "Failed to start crypto checkout");
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading") {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (status === "unauthenticated") {
    return <div className="flex justify-center items-center min-h-screen">Please sign in to view your credits.</div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white py-8">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">My Credits</h1>

        {/* Credits Card */}
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <h2 className="text-xl mb-2">Current Balance:</h2>
          <div className="text-4xl font-bold text-green-400 mb-4">{session?.user?.credits || 0}</div>
          <button
            onClick={handleOpenDialog}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full text-lg transition duration-200"
          >
            Buy Credits
          </button>
        </div>

        {/* Transaction History */}
        <div className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
          {session?.user?.transactions?.length === 0 ? (
            <div>No transactions yet.</div>
          ) : (
            <div className="space-y-3">
              {session?.user?.transactions?.map((tx: any) => (
                <div key={tx.id} className="bg-gray-800 rounded p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-mono text-green-400">+{tx.amount} credits</div>
                      <div className="text-sm text-cyan-400">${(tx.amount / 10).toFixed(2)} via {tx.paymentType} ({tx.status})</div>
                    </div>
                    <div className="text-sm text-gray-400">
                      {new Date(tx.createdAt).toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Purchase Dialog */}
      {showDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Buy Credits</h3>
              <button
                onClick={handleCloseDialog}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            {/* Credit Packages */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Select Credit Package
              </label>
              <div className="space-y-2">
                {CREDIT_PACKAGES.map((pkg) => (
                  <button
                    key={pkg.credits}
                    onClick={() => setSelectedPackage(pkg)}
                    className={`w-full p-3 rounded-lg border-2 transition-all ${
                      selectedPackage?.credits === pkg.credits
                        ? 'border-green-500 bg-gray-700'
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">{pkg.credits} Credits</span>
                      <span className="text-green-400">${pkg.price}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Payment Options */}
            <div className="space-y-3">
              <button
                onClick={handleStripeCheckout}
                disabled={loading || !selectedPackage}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg disabled:opacity-50 transition duration-200"
              >
                {loading ? "Processing..." : "Pay with Card"}
              </button>
              
              <button
                onClick={handleCryptoCheckout}
                disabled={loading || !selectedPackage}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 rounded-lg disabled:opacity-50 transition duration-200"
              >
                {loading ? "Processing..." : "Pay with Crypto"}
              </button>
            </div>

            {error && <p className="text-red-400 text-sm mt-4">{error}</p>}
          </div>
        </div>
      )}
    </div>
  );
} 