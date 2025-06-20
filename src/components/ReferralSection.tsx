import React, { useState } from 'react';

interface ReferralSectionProps {
  referralCode: string | null;
  referred: any[];
  bonusCredits: number;
}

const ReferralSection: React.FC<ReferralSectionProps> = ({ referralCode, referred, bonusCredits }) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

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

  const handleShare = () => {
    if (referralCode) {
      const url = `${window.location.origin}/auth/signup?ref=${referralCode}`;
      const text = "Join me on Predictly and earn bonus credits! Sign up with my referral link:";
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    }
  };

  return (
    <section className="mb-8 bg-gray-900 rounded-lg p-6 shadow">
      <h2 className="text-2xl font-bold mb-4">Referral Codes & Bonuses</h2>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-2">
        {referralCode ? (
          <>
            <span className="bg-gray-800 px-4 py-2 rounded text-green-400 font-mono">{referralCode}</span>
            <div className="flex gap-2">
              <button
                onClick={handleCopy}
                className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-full text-sm transition-all duration-200"
              >
                {copiedCode ? 'Copied!' : 'Copy Code'}
              </button>
              <button
                onClick={handleCopyInviteLink}
                className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-full text-sm transition-all duration-200"
              >
                {copiedLink ? 'Copied!' : 'Copy Link'}
              </button>
              <button
                onClick={handleShare}
                className="bg-blue-400 hover:bg-blue-300 text-white px-4 py-2 rounded-full text-sm transition-all duration-200"
              >
                Share on X
              </button>
            </div>
          </>
        ) : (
          <span className="text-gray-400">No referral code generated yet.</span>
        )}
      </div>
      <div className="mt-2 text-gray-400 text-sm">Share your code to earn bonus credits!</div>
      <div className="mt-2 text-green-300 text-sm">Total bonus credits earned: <span className="font-bold">{bonusCredits}</span></div>
      <h3 className="text-xl font-semibold mt-6 mb-2">Users You Referred</h3>
      {referred.length === 0 ? (
        <div className="text-gray-400">You haven't referred any users yet.</div>
      ) : (
        <ul>
          {referred.map((user) => (
            <li key={user.id} className="mb-2 bg-gray-800 rounded p-2 flex flex-col md:flex-row md:items-center md:justify-between">
              <span className="font-mono text-yellow-300">{user.username || user.email}</span>
              <span className="text-gray-400 text-xs ml-2">Joined: {new Date(user.created_at).toLocaleDateString()}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ReferralSection; 