"use client";
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

/**
 * Dashboard Page (Authenticated)
 * This is the main hub for logged-in users.
 * Vibe: Dark mode, neon accents, energetic and modern.
 *
 * Modules: MyCredits, CurrentContests, PastPerformance, LeaderboardSnippet, Announcements
 * Each module is a placeholder for now, with clear comments for future expansion.
 */

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string;
      email?: string;
      image?: string;
      username?: string;
      pro_status?: boolean;
      credits?: number;
    };
  }
}

export default function Dashboard() {
  const { data: session, status } = useSession();
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [buying, setBuying] = useState(false);

  useEffect(() => {
    if (status === 'authenticated') {
      fetchReferralCode();
    }
  }, [status]);

  const fetchReferralCode = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/referral');
      const data = await res.json();
      if (res.ok && data.code) {
        setReferralCode(data.code);
      } else {
        setReferralCode(null);
      }
    } catch (err) {
      setError('Failed to fetch referral code.');
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateReferral = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/referral', { method: 'POST' });
      const data = await res.json();
      if (res.ok && data.code) {
        setReferralCode(data.code);
      } else {
        setError(data.error || 'Failed to generate referral code.');
      }
    } catch (err) {
      setError('Failed to generate referral code.');
    } finally {
      setLoading(false);
    }
  };

  // Simulate loading state for Buy More button
  const handleBuyMore = () => {
    setBuying(true);
    setTimeout(() => setBuying(false), 1200);
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (!session?.user) {
    return <div>Please sign in to view your dashboard.</div>;
  }

  return (
    <main className="min-h-screen bg-black text-white py-8 px-4 animate-fade-in">
      <div className="max-w-5xl mx-auto">
        {/* User Info Card */}
        <section className="mb-6 p-4 rounded-lg bg-gray-800 text-green-200 flex flex-col md:flex-row md:items-center md:justify-between shadow">
          <div>
            <div className="font-bold text-lg">Welcome, {session.user.username || session.user.name || session.user.email}!</div>
            <div className="text-sm text-gray-300">Email: {session.user.email}</div>
            <div className="text-sm text-gray-300">Pro Status: {session.user.pro_status ? 'Pro' : 'Free'}</div>
            <div className="text-sm text-gray-300">Credits: {session.user.credits ?? 0}</div>
          </div>
        </section>
        {/* Announcements Banner */}
        <section className="mb-6 p-4 rounded-lg bg-gradient-to-r from-green-800 via-black to-yellow-800 text-center shadow">
          <span className="font-bold text-green-400">🚨 New Contest:</span> Premier League PvP starts this weekend! Prize pool: <span className="text-yellow-300">5000 creds</span>
        </section>

        {/* My Credits */}
        <section className="mb-8 flex items-center justify-between bg-gray-900 rounded-lg p-6 shadow">
          <div>
            <div className="text-lg text-gray-400">My Credits</div>
            <div className="text-4xl font-extrabold text-green-400">1,200</div>
          </div>
          <button
            className="bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-6 rounded-full text-lg shadow transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-300 disabled:opacity-60"
            onClick={handleBuyMore}
            disabled={buying}
            aria-label="Buy more credits"
          >
            {buying ? 'Processing...' : 'Buy More'}
          </button>
        </section>

        {/* Current Contests */}
        <section className="mb-8 bg-gray-900 rounded-lg p-6 shadow">
          <h2 className="text-2xl font-bold mb-4">Current Contests</h2>
          <ul>
            <li className="mb-3 flex justify-between items-center bg-gray-800 rounded p-3">
              <span className="font-semibold text-yellow-400">Premier League PvP</span>
              <span className="text-green-300">Prize: 5000 creds</span>
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-1 px-4 rounded-full text-sm shadow transition-transform duration-150 active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-300" aria-label="Join Premier League PvP">Join</button>
            </li>
            <li className="mb-3 flex justify-between items-center bg-gray-800 rounded p-3">
              <span className="font-semibold text-yellow-400">Solo Challenge</span>
              <span className="text-green-300">Prize: 500 creds</span>
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-1 px-4 rounded-full text-sm shadow transition-transform duration-150 active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-300" aria-label="Play Solo Challenge">Play</button>
            </li>
          </ul>
        </section>

        {/* Past Performance */}
        <section className="mb-8 bg-gray-900 rounded-lg p-6 shadow">
          <h2 className="text-2xl font-bold mb-4">Past Performance</h2>
          <div className="flex gap-8">
            <div className="relative group">
              <div className="text-gray-400 cursor-pointer">Wins</div>
              <div className="text-2xl font-bold text-green-400">8</div>
              {/* Tooltip for Wins */}
              <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-32 bg-gray-800 text-xs text-gray-200 rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">Total contests won</span>
            </div>
            <div className="relative group">
              <div className="text-gray-400 cursor-pointer">XP Earned</div>
              <div className="text-2xl font-bold text-yellow-400">1,500</div>
              {/* Tooltip for XP */}
              <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-32 bg-gray-800 text-xs text-gray-200 rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">Experience points earned</span>
            </div>
            <div>
              <div className="text-gray-400">Contests Entered</div>
              <div className="text-2xl font-bold text-blue-400">12</div>
            </div>
          </div>
        </section>

        {/* Leaderboard Snippet */}
        <section className="mb-8 bg-gray-900 rounded-lg p-6 shadow">
          <h2 className="text-2xl font-bold mb-4">Top Players This Week</h2>
          <ol className="list-decimal list-inside">
            <li className="mb-2 flex justify-between bg-gray-800 rounded p-2">
              <span className="font-semibold text-yellow-400">CryptoKing</span>
              <span className="text-green-300">1200 pts</span>
            </li>
            <li className="mb-2 flex justify-between bg-gray-800 rounded p-2">
              <span className="font-semibold text-yellow-400">SportsGuru</span>
              <span className="text-green-300">1100 pts</span>
            </li>
            <li className="mb-2 flex justify-between bg-gray-800 rounded p-2">
              <span className="font-semibold text-yellow-400">LuckyStrike</span>
              <span className="text-green-300">950 pts</span>
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
} 