"use client";
import React, { useState, useEffect } from 'react';
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
  // Referral code state
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const [referralLoading, setReferralLoading] = useState(false);
  const [referralError, setReferralError] = useState<string | null>(null);
  // Referred users state
  const [referred, setReferred] = useState<any[]>([]);
  const [referredLoading, setReferredLoading] = useState(false);
  const [referredError, setReferredError] = useState<string | null>(null);
  // Track total bonus credits from referrals
  const [bonusCredits, setBonusCredits] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (session?.user) {
      fetchReferralCode();
      fetchReferred();
    }
  }, [session?.user]);

  useEffect(() => {
    // Each referral gives 100 credits (as in the API logic)
    setBonusCredits(referred.length * 100);
  }, [referred]);

  const fetchReferralCode = async () => {
    setReferralLoading(true);
    setReferralError(null);
    try {
      const res = await fetch('/api/referral');
      const data = await res.json();
      if (res.ok && data.code) {
        setReferralCode(data.code);
      } else {
        setReferralCode(null);
      }
    } catch (err) {
      setReferralError('Failed to fetch referral code.');
    } finally {
      setReferralLoading(false);
    }
  };

  const fetchReferred = async () => {
    setReferredLoading(true);
    setReferredError(null);
    try {
      const res = await fetch('/api/referral/referred');
      const data = await res.json();
      if (res.ok && data.referred) {
        setReferred(data.referred);
      } else {
        setReferred([]);
      }
    } catch (err) {
      setReferredError('Failed to fetch referred users.');
    } finally {
      setReferredLoading(false);
    }
  };

  const handleGenerateReferral = async () => {
    setReferralLoading(true);
    setReferralError(null);
    try {
      const res = await fetch('/api/referral', { method: 'POST' });
      const data = await res.json();
      if (res.ok && data.code) {
        setReferralCode(data.code);
      } else {
        setReferralError(data.error || 'Failed to generate referral code.');
      }
    } catch (err) {
      setReferralError('Failed to generate referral code.');
    } finally {
      setReferralLoading(false);
    }
  };

  const handleCopy = () => {
    if (referralCode) {
      navigator.clipboard.writeText(referralCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 1500);
    }
  };

  const handleCopyInviteLink = () => {
    if (referralCode) {
      const url = `${window.location.origin}/auth/signup?ref=${referralCode}`;
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 1500);
    }
  };

  const shareMessage = encodeURIComponent(
    "Join me on Predictly and earn bonus credits! Sign up with my referral link:"
  );

  const getInviteLink = () =>
    referralCode ? `${window.location.origin}/auth/signup?ref=${referralCode}` : '';

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
    setMessage('');
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
        {/* Profile Editing Form */}
        {session?.user && (
          <form onSubmit={handleProfileUpdate} className="bg-gray-900 p-6 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
            <label className="block mb-2 text-gray-300" htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full mb-4 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <label className="block mb-2 text-gray-300" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full mb-4 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <label className="block mb-2 text-gray-300" htmlFor="currentPassword">Current Password (required to change email or password)</label>
            <input
              id="currentPassword"
              type="password"
              value={currentPassword}
              onChange={e => setCurrentPassword(e.target.value)}
              className="w-full mb-4 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <label className="block mb-2 text-gray-300" htmlFor="newPassword">New Password (leave blank to keep current)</label>
            <input
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              className="w-full mb-4 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {error && <div className="text-red-400 mb-4 text-sm">{error}</div>}
            {message && <div className="text-green-400 mb-4 text-sm">{message}</div>}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-4 rounded-full text-lg shadow transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-300 mb-4 disabled:opacity-60"
              disabled={loading}
            >
              {loading ? 'Updating...' : 'Update Profile'}
            </button>
          </form>
        )}
        {/* Credits and Withdraw */}
        <section className="mb-8 bg-gray-900 rounded-lg p-6 shadow flex items-center justify-between">
          <div>
            <div className="text-lg text-gray-400">Total Credits</div>
            <div className="text-3xl font-bold text-green-400">1,200</div>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-6 rounded-full text-lg shadow transition-all duration-200">
            Withdraw (Crypto)
          </button>
        </section>

        {/* Purchase History */}
        <section className="mb-8 bg-gray-900 rounded-lg p-6 shadow">
          <h2 className="text-2xl font-bold mb-4">Purchase History</h2>
          <ul>
            <li className="mb-2 flex justify-between bg-gray-800 rounded p-2">
              <span>+500 creds</span>
              <span className="text-gray-400">2024-06-01</span>
            </li>
            <li className="mb-2 flex justify-between bg-gray-800 rounded p-2">
              <span>+700 creds</span>
              <span className="text-gray-400">2024-05-20</span>
            </li>
          </ul>
        </section>

        {/* Upgrade to Pro */}
        <section className="mb-8 bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 rounded-lg p-6 shadow text-black text-center">
          <h2 className="text-2xl font-bold mb-2">Upgrade to Pro</h2>
          <p className="mb-4">Unlock exclusive contests, bigger prizes, and leaderboard access.</p>
          <button className="bg-black hover:bg-gray-800 text-yellow-300 font-bold py-2 px-8 rounded-full text-lg shadow transition-all duration-200">
            Upgrade Now
          </button>
        </section>

        {/* Referral Codes and Bonuses */}
        <section className="mb-8 bg-gray-900 rounded-lg p-6 shadow">
          <h2 className="text-2xl font-bold mb-4">Referral Codes & Bonuses</h2>
          <div className="flex items-center gap-4 mb-2">
            {referralLoading ? (
              <span className="text-lg">Loading...</span>
            ) : referralCode ? (
              <>
                <span className="bg-gray-800 px-4 py-2 rounded text-green-400 font-mono">{referralCode}</span>
                <button onClick={handleCopy} className="bg-green-500 hover:bg-green-400 text-black font-bold py-1 px-4 rounded-full text-sm">
                  {copiedCode ? 'Copied!' : 'Copy Code'}
                </button>
                <button onClick={handleCopyInviteLink} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-4 rounded-full text-sm">
                  {copiedLink ? 'Copied!' : 'Copy Invite Link'}
                </button>
                <button onClick={() => handleShare('twitter')} className="bg-[#1DA1F2] hover:bg-blue-400 text-white font-bold py-1 px-3 rounded-full text-sm" title="Share on X">
                  Share on X
                </button>
              </>
            ) : !referralError ? (
              <button
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-6 rounded-full text-lg shadow transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-60"
                onClick={handleGenerateReferral}
                disabled={referralLoading}
              >
                Generate Referral Code
              </button>
            ) : null}
          </div>
          {!referralCode && referralError && <div className="text-red-400 mt-2 text-sm">{referralError}</div>}
          <div className="mt-2 text-gray-400 text-sm">Share your code to earn bonus credits!</div>
          <div className="mt-2 text-green-300 text-sm">Total bonus credits earned: <span className="font-bold">{bonusCredits}</span></div>
        </section>
        {/* Referred Users List */}
        <section className="mb-8 bg-gray-900 rounded-lg p-6 shadow">
          <h2 className="text-2xl font-bold mb-4">Users You Referred</h2>
          {referredLoading ? (
            <div>Loading...</div>
          ) : referredError ? (
            <div className="text-red-400">{referredError}</div>
          ) : referred.length === 0 ? (
            <div className="text-gray-400">You haven't referred any users yet.</div>
          ) : (
            <>
              <div className="mb-2 text-green-400 font-semibold">Total referred: {referred.length}</div>
              <ul>
                {referred.map((user) => (
                  <li key={user.id} className="mb-2 bg-gray-800 rounded p-2 flex flex-col md:flex-row md:items-center md:justify-between">
                    <span className="font-mono text-yellow-300">{user.username || user.email}</span>
                    <span className="text-gray-400 text-xs ml-2">Joined: {new Date(user.created_at).toLocaleDateString()}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>

        {/* Support/Contact */}
        <section className="mb-8 bg-gray-900 rounded-lg p-6 shadow">
          <h2 className="text-2xl font-bold mb-4">Support & Contact</h2>
          <p className="mb-2">Need help? Reach out to our support team:</p>
          <a href="mailto:support@predictly.com" className="text-green-400 underline">support@predictly.com</a>
        </section>
      </div>
    </main>
  );
} 