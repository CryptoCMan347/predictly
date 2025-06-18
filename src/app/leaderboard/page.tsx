import React from 'react';

/**
 * Leaderboard Page
 * Shows weekly winners, all-time top earners, and a future pro-exclusive leaderboard.
 * Includes gamification elements: XP bars, streaks, trophies (placeholders for now).
 *
 * To customize: Replace placeholder data with real leaderboard info and gamification logic.
 */
const weeklyWinners = [
  { name: 'CryptoKing', prize: 5000 },
  { name: 'SportsGuru', prize: 3000 },
  { name: 'LuckyStrike', prize: 1500 }
];

const allTimeEarners = [
  { name: 'CryptoKing', total: 25000 },
  { name: 'SportsGuru', total: 18000 },
  { name: 'LuckyStrike', total: 12000 }
];

export default function LeaderboardPage() {
  return (
    <main className="min-h-screen bg-black text-white py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-center">🏆 Leaderboard</h1>

        {/* Weekly Winners */}
        <section className="mb-10 bg-gray-900 rounded-lg p-6 shadow">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">Weekly Winners</h2>
          <ol className="list-decimal list-inside">
            {weeklyWinners.map((w, idx) => (
              <li key={w.name} className="mb-2 flex justify-between items-center bg-gray-800 rounded p-3">
                <span className="font-semibold text-green-400">{w.name}</span>
                <span className="text-yellow-300">+{w.prize} creds</span>
                {/* Trophy icon for top 1 */}
                {idx === 0 && <span className="ml-2 text-2xl">🏆</span>}
              </li>
            ))}
          </ol>
        </section>

        {/* All-Time Top Earners */}
        <section className="mb-10 bg-gray-900 rounded-lg p-6 shadow">
          <h2 className="text-2xl font-bold mb-4 text-green-400">All-Time Top Earners</h2>
          <ol className="list-decimal list-inside">
            {allTimeEarners.map((e, idx) => (
              <li key={e.name} className="mb-2 flex justify-between items-center bg-gray-800 rounded p-3">
                <span className="font-semibold text-yellow-400">{e.name}</span>
                <span className="text-green-300">{e.total} creds</span>
                {/* XP bar placeholder */}
                <span className="ml-2 w-24 h-3 bg-gray-700 rounded-full overflow-hidden">
                  <span className="block h-3 bg-green-400" style={{ width: `${80 - idx * 20}%` }}></span>
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* Pro-Exclusive Leaderboard (future) */}
        <section className="mb-10 bg-gray-900 rounded-lg p-6 shadow opacity-50">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Pro-Exclusive Leaderboard <span className="text-xs">(Coming Soon)</span></h2>
          <div className="text-gray-400">Upgrade to Pro to compete for exclusive prizes and trophies!</div>
        </section>

        {/* Gamification Placeholders */}
        <section className="text-center mt-8">
          <div className="inline-block bg-gray-800 rounded-full px-6 py-2 text-lg text-yellow-300 font-bold mr-4">🔥 Streak: 5 days</div>
          <div className="inline-block bg-gray-800 rounded-full px-6 py-2 text-lg text-green-300 font-bold">XP: 12,000</div>
        </section>
      </div>
    </main>
  );
} 