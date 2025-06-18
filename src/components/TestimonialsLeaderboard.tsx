import React from 'react';

/**
 * TestimonialsLeaderboard Component
 * Shows social proof (testimonials) and a leaderboard snippet for FOMO.
 *
 * To customize: Replace placeholder testimonials and leaderboard with real data.
 */
const testimonials = [
  {
    name: 'Alex P.',
    text: 'I won my first crypto prize in just one week! Predictly is so much fun.'
  },
  {
    name: 'Samira K.',
    text: 'The PvP mode is super competitive. Love the leaderboard and rewards!'
  }
];

const leaderboard = [
  { name: 'CryptoKing', score: 1200 },
  { name: 'SportsGuru', score: 1100 },
  { name: 'LuckyStrike', score: 950 }
];

const TestimonialsLeaderboard: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold mb-4">What Players Say</h3>
          <ul>
            {testimonials.map((t) => (
              <li key={t.name} className="mb-4 p-4 bg-gray-800 rounded-lg shadow">
                <div className="font-semibold text-green-400">{t.name}</div>
                <div className="text-gray-200">"{t.text}"</div>
              </li>
            ))}
          </ul>
        </div>
        {/* Leaderboard Snippet */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Top Players This Week</h3>
          <ol className="list-decimal list-inside">
            {leaderboard.map((entry, idx) => (
              <li key={entry.name} className="mb-2 flex justify-between bg-gray-800 rounded p-2">
                <span className="font-semibold text-yellow-400">{entry.name}</span>
                <span className="text-green-300">{entry.score} pts</span>
              </li>
            ))}
          </ol>
          <div className="mt-2 text-xs text-gray-400">* Replace with live leaderboard data</div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsLeaderboard; 