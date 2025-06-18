import React from 'react';

/**
 * HeroBanner Component
 * This is the main hero section for the Predictly landing page.
 * It should instantly communicate the brand, value, and call to action.
 *
 * Visual Vibe: Crypto-meets-sports, bold, energetic, and modern.
 *
 * To customize: Replace the slogan, CTA, and add a logo or background image as needed.
 */
const HeroBanner: React.FC = () => {
  return (
    // Fade-in animation for the section
    <section className="bg-gradient-to-br from-black via-gray-900 to-green-900 text-white py-16 px-4 animate-fade-in">
      <div className="max-w-3xl mx-auto text-center">
        {/* Logo placeholder - swap with your logo */}
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">
            {/* Logo Icon */}
            ⚡
          </div>
        </div>
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
          Predictly
        </h1>
        <p className="text-xl font-semibold mb-6">
          <span className="text-green-400">Crypto</span>-meets-<span className="text-yellow-400">sports</span> battleground.<br />
          Monetize your knowledge. Compete. Win.
        </p>
        {/* CTA button with pulse animation and ARIA label */}
        <a
          href="#join"
          aria-label="Join the Battle and start predicting"
          className="inline-block bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-200 animate-pulse focus:outline-none focus:ring-4 focus:ring-green-300"
        >
          Join the Battle
        </a>
        {/* Tooltip for extra info */}
        <div className="mt-4 text-sm text-gray-400 relative group cursor-pointer">
          <span>Skill-based. PvP. Real rewards.</span>
          <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-gray-800 text-xs text-gray-200 rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
            PvP = Player vs Player. Compete directly with others for prizes!
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

// Tailwind custom animation (add to tailwind.config.js if not present):
// animation: {
//   'fade-in': 'fadeIn 1s ease-out',
//   'pulse': 'pulse 2s infinite',
// },
// keyframes: {
//   fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
// }, 