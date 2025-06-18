import React from 'react';

/**
 * PvPTeaser Component
 * Highlights both PvP and Solo play modes for Predictly.
 * Shows the value of competing for crypto or playing for free.
 *
 * To customize: Replace icons, text, or add links to mode details.
 */
const modes = [
  {
    icon: '🤼',
    title: 'PvP Mode',
    desc: 'Compete head-to-head for crypto prizes. Prove your skill against real opponents.'
  },
  {
    icon: '🎯',
    title: 'Solo Mode',
    desc: 'Play for free, test your knowledge, and climb the solo leaderboard.'
  }
];

const PvPTeaser: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-green-900 via-gray-900 to-yellow-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Choose Your Battle</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {modes.map((mode) => (
            <div
              key={mode.title}
              className="flex flex-col items-center bg-gray-800 rounded-xl p-6 shadow-lg w-full md:w-1/2"
            >
              {/* Icon placeholder - swap for SVG or animation later */}
              <div className="text-5xl mb-4">{mode.icon}</div>
              <div className="text-xl font-semibold mb-2">{mode.title}</div>
              <div className="text-gray-300">{mode.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PvPTeaser; 