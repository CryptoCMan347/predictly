"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function MyCreditsPage() {
  const { data: session, status } = useSession();
  const [showDialog, setShowDialog] = useState(false);
  const [creditsToBuy, setCreditsToBuy] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [inputError, setInputError] = useState("");
  const [transactions, setTransactions] = useState<any[]>([]);
  const [transactionsLoading, setTransactionsLoading] = useState(false);
  const [transactionsError, setTransactionsError] = useState("");

  const minCredits = 50;
  const price = creditsToBuy && !isNaN(Number(creditsToBuy)) ? (Number(creditsToBuy) / 10).toFixed(2) : "0.00";

  useEffect(() => {
    if (session?.user) {
      fetchTransactions();
    }
    // eslint-disable-next-line
  }, [session?.user]);

  const fetchTransactions = async () => {
    setTransactionsLoading(true);
    setTransactionsError("");
    try {
      const res = await fetch("/api/transactions");
      const data = await res.json();
      if (res.ok && data.transactions) {
        setTransactions(data.transactions);
      } else {
        setTransactionsError(data.error || "Failed to fetch transactions.");
      }
    } catch (err) {
      setTransactionsError("Failed to fetch transactions.");
    } finally {
      setTransactionsLoading(false);
    }
  };

  const handleOpenDialog = () => {
    setCreditsToBuy("");
    setInputError("");
    setError("");
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    setInputError("");
    setError("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setCreditsToBuy("");
      setInputError("");
    } else if (/^\d+$/.test(value)) {
      setCreditsToBuy(value);
      if (Number(value) < minCredits) {
        setInputError(`Minimum purchase is ${minCredits} credits.`);
      } else {
        setInputError("");
      }
    }
  };

  // Helper to get userId robustly
  const getUserId = async () => {
    if (session?.user?.id) return session.user.id;
    // Fallback: fetch from /api/account
    try {
      const res = await fetch('/api/account');
      const data = await res.json();
      if (res.ok && data.user && data.user.id) return data.user.id;
    } catch (err) {}
    return undefined;
  };

  const handleBuyCredits = async () => {
    console.log("session.user", session?.user);
    setInputError(""); // Always clear error at the start
    const creditsNum = Number(creditsToBuy);
    if (!creditsToBuy || isNaN(creditsNum) || creditsNum < minCredits) {
      setInputError(`Minimum purchase is ${minCredits} credits.`);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const userId = await getUserId();
      if (!userId) {
        setError("Could not determine user ID. Please sign in again.");
        setLoading(false);
        return;
      }
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ credits: creditsNum, userId }),
      });
      const data = await res.json();
      if (res.ok && data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Failed to start checkout.");
      }
    } catch (err) {
      setError("Failed to start checkout.");
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading") return <div>Loading...</div>;
  if (!session?.user) return <div>Please sign in to view your credits.</div>;

  return (
    <main className="min-h-screen bg-black text-white py-8 px-4 animate-fade-in">
      <div className="max-w-md mx-auto bg-gray-900 rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">My Credits</h1>
        <div className="mb-8 text-center">
          <span className="text-lg text-gray-300">Current Balance:</span>
          <span className="text-4xl font-extrabold text-green-400 ml-2">{session.user.credits ?? 0}</span>
        </div>
        <button
          onClick={handleOpenDialog}
          className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-4 rounded-full text-lg shadow transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-300 mb-2"
        >
          Buy Credits
        </button>
      </div>
      {/* Modal Dialog */}
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-sm relative">
            <button
              onClick={handleCloseDialog}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-400 text-2xl font-bold focus:outline-none"
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Buy Credits</h2>
            <label htmlFor="credits" className="block mb-2 text-gray-300 font-semibold">Number of Credits</label>
            <input
              id="credits"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              min={minCredits}
              value={creditsToBuy}
              onChange={handleInputChange}
              placeholder="Enter number of credits"
              className={`w-full mb-2 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400 ${inputError ? 'border border-red-400' : ''}`}
              autoFocus
            />
            <div className="mb-2 text-gray-400 text-sm">Minimum purchase: {minCredits} credits</div>
            <div className="mb-4 text-green-300 text-lg">Total: <span className="font-bold">${price}</span></div>
            <button
              onClick={handleBuyCredits}
              disabled={loading || !!inputError}
              className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-4 rounded-full text-lg shadow transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-300 disabled:opacity-60"
            >
              {loading ? "Redirecting to Stripe..." : `Proceed to Checkout`}
            </button>
            {inputError ? (
              <div className="text-red-400 mt-2 text-sm">{inputError}</div>
            ) : error ? (
              <div className="text-red-400 mt-2 text-sm">{error}</div>
            ) : null}
          </div>
        </div>
      )}
      {/* Transaction History */}
      <div className="max-w-md mx-auto bg-gray-900 rounded-lg shadow p-8 mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Transaction History</h2>
        {transactionsLoading ? (
          <div>Loading...</div>
        ) : transactionsError ? (
          <div className="text-red-400">{transactionsError}</div>
        ) : transactions.length === 0 ? (
          <div className="text-gray-400">No transactions yet.</div>
        ) : (
          <ul>
            {transactions.map(tx => (
              <li key={tx.id} className="mb-3 bg-gray-800 rounded p-3 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="font-mono text-green-300">+{tx.credits} credits</div>
                  <div className="text-gray-400 text-xs">${tx.amount.toFixed(2)} via {tx.paymentType} ({tx.status})</div>
                </div>
                <div className="text-gray-400 text-xs mt-1 md:mt-0">{new Date(tx.createdAt).toLocaleString()}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
} 