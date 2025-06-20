"use client";
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';

/**
 * Account Dashboard Page
 * Lets users see credits, purchase history, withdraw, upgrade to Pro, view referrals, and contact support.
 *
 * To customize: Replace placeholder data with real user info and connect actions to backend logic.
 */
export default function AccountDashboard() {
  const { data: session, update } = useSession();
  const [username, setUsername] = useState(session?.user?.username || '');
  const [email, setEmail] = useState(session?.user?.email || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopy = () => {
    if (session?.user?.referralCode) {
      navigator.clipboard.writeText(session.user.referralCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 1500);
    }
  };

  const handleCopyInviteLink = () => {
    if (session?.user?.referralCode) {
      const url = `${window.location.origin}/auth/signup?ref=${session.user.referralCode}`;
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 1500);
    }
  };

  const shareMessage = encodeURIComponent(
    "Join me on Predictly and earn bonus credits! Sign up with my referral link:"
  );

  const getInviteLink = () =>
    session?.user?.referralCode ? `${window.location.origin}/auth/signup?ref=${session.user.referralCode}` : '';

  const handleShare = (platform: string) => {
    const url = getInviteLink();
    if (!url) return;
    let shareUrl = '';
    if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?text=${shareMessage}%20${encodeURIComponent(url)}`;
    } else if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    } else if (platform === 'whatsapp') {
      shareUrl = `https://wa.me/?text=${shareMessage}%20${encodeURIComponent(url)}`;
    }
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  // Handle profile update
  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const res = await fetch('/api/account/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, currentPassword, newPassword })
    });
    setLoading(false);
    if (res.ok) {
      setMessage('Profile updated!');
      update(); // Refresh session
      setCurrentPassword('');
      setNewPassword('');
    } else {
      const data = await res.json();
      setError(data.error || 'Update failed.');
    }
  };

  return (
    <main className="min-h-screen bg-black text-white py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* User Info Card */}
        {session?.user && (
          <section className="mb-6 p-4 rounded-lg bg-gray-800 text-green-200 flex flex-col md:flex-row md:items-center md:justify-between shadow">
            <div>
              <div className="font-bold text-lg">Welcome, {session.user.username || session.user.name || session.user.email}!</div>
              <div className="text-sm text-gray-300">Email: {session.user.email}</div>
              <div className="text-sm text-gray-300">Pro Status: {session.user.pro_status ? 'Pro' : 'Free'}</div>
              <div className="text-sm text-gray-300">Credits: {session.user.credits ?? 0}</div>
            </div>
          </section>
        )}
        <h1 className="text-4xl font-extrabold mb-8 text-center">👤 Account Dashboard</h1>
        {/* Credits Display */}
        <section className="mb-8 flex items-center justify-between bg-gray-900 rounded-lg p-6 shadow">
          <div>
            <div className="text-lg text-gray-400">My Credits</div>
            <div className="text-4xl font-extrabold text-green-400">{session?.user?.credits ?? 0}</div>
          </div>
        </section>
        {/* Referral Codes and Bonuses */}
        <section className="mb-8 bg-gray-900 rounded-lg p-6 shadow">
          <h2 className="text-2xl font-bold mb-4">Referral Codes & Bonuses</h2>
          <div className="flex flex-wrap items-center gap-2">
            <code className="bg-[#1a1d24] px-3 py-1.5 rounded text-green-400 font-mono text-sm">
              {session?.user?.referralCode || 'Loading...'}
            </code>
            <button
              onClick={handleCopy}
              className="bg-[#22c55e] hover:bg-[#22c55e]/90 text-white font-bold text-sm py-1.5 px-3 rounded"
            >
              {copiedCode ? 'Copied!' : 'Copy Code'}
            </button>
            <button
              onClick={handleCopyInviteLink}
              className="bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white font-bold text-sm py-1.5 px-3 rounded"
            >
              {copiedLink ? 'Copied!' : 'Copy Invite Link'}
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white font-bold text-sm py-1.5 px-3 rounded"
            >
              Share on X
            </button>
          </div>
          <div className="mt-2 text-gray-400 text-sm">Share your code to earn bonus credits!</div>
          <div className="mt-1 text-[#22c55e] text-sm">
            Total bonus credits earned: <span className="font-bold">{session?.user?.bonusCredits || 0}</span>
          </div>
        </section>
        {/* Purchase History */}
        <section className="mb-8 bg-gray-900 rounded-lg p-6 shadow">
          <h2 className="text-2xl font-bold mb-4">Purchase History</h2>
          {session?.user?.transactions?.length === 0 ? (
            <div className="text-gray-400">No transactions yet.</div>
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
        </section>
        {/* Profile Editing Form */}
        {session?.user && (
          <form onSubmit={handleProfileUpdate} className="bg-gray-900 p-6 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
            <div className="mb-4">
              <label className="block mb-2 text-gray-300" htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-gray-800 text-white p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-300" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-800 text-white p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-300" htmlFor="currentPassword">Current Password</label>
              <input
                id="currentPassword"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full bg-gray-800 text-white p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-300" htmlFor="newPassword">New Password (optional)</label>
              <input
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full bg-gray-800 text-white p-2 rounded"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              {loading ? 'Updating...' : 'Update Profile'}
            </button>
            {message && <div className="mt-2 text-green-400">{message}</div>}
            {error && <div className="mt-2 text-red-400">{error}</div>}
          </form>
        )}
      </div>
    </main>
  );
} 