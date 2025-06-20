"use client";
export const dynamic = "force-dynamic";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function MyCreditsPage() {
  const { data: session, status } = useSession();
  const [showDialog, setShowDialog] = useState(false);
  const [creditsToBuy, setCreditsToBuy] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const minCredits = 50;
  const price = creditsToBuy && !isNaN(Number(creditsToBuy)) ? (Number(creditsToBuy) / 10).toFixed(2) : "0.00";

  const handleOpenDialog = () => {
    setCreditsToBuy("");
    setError("");
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    setError("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setCreditsToBuy("");
      setError("");
    } else if (/^\d+$/.test(value)) {
      setCreditsToBuy(value);
      if (Number(value) < minCredits) {
        setError(`Minimum purchase is ${minCredits} credits.`);
      } else {
        setError("");
      }
    }
  };

  const handleBuyCredits = async () => {
    if (!session?.user?.id) {
      setError("Please sign in to purchase credits");
      return;
    }

    const creditsNum = Number(creditsToBuy);
    if (!creditsToBuy || isNaN(creditsNum) || creditsNum < minCredits) {
      setError(`Minimum purchase is ${minCredits} credits.`);
      return;
    }

    setLoading(true);
    setError("");

    try {
      console.log('Sending checkout request:', { credits: creditsNum, userId: session.user.id });
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          credits: creditsNum,
          userId: session.user.id
        }),
      });

      const data = await res.json();
      console.log('Checkout response:', data);
      
      if (!res.ok) {
        throw new Error(data.error || "Failed to start checkout");
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (err) {
      console.error('Checkout error:', err);
      setError(err instanceof Error ? err.message : "Failed to start checkout");
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
                      <div className="font-mono text-green-400">+{tx.credits} credits</div>
                      <div className="text-sm text-cyan-400">${tx.amount.toFixed(2)} via {tx.paymentType} ({tx.status})</div>
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
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Number of Credits
              </label>
              <input
                type="number"
                value={creditsToBuy}
                onChange={handleInputChange}
                className="w-full bg-gray-700 rounded p-2 text-white"
                placeholder={`Minimum ${minCredits} credits`}
                min={minCredits}
              />
            </div>
            <div className="mb-4">
              <p className="text-lg">
                Total: <span className="font-bold">${price}</span>
              </p>
            </div>
            <button
              onClick={handleBuyCredits}
              disabled={loading || !!error || !creditsToBuy}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              {loading ? "Processing..." : "Buy Now"}
            </button>
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
          </div>
        </div>
      )}
    </div>
  );
} 