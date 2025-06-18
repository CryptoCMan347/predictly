import React from 'react';

/**
 * HowItWorks Component
 * Shows a simple 3-step process for how Predictly works.
 * Visual, clear, and engaging for new users.
 *
 * Steps: Buy credits → Predict games → Win prizes
 *
 * To customize: Replace icons, text, or add animation as needed.
 */
const steps = [
  {
    icon: '💳',
    title: 'Buy Credits',
    desc: 'Purchase credits to enter contests and make predictions.'
  },
  {
    icon: '⚽',
    title: 'Predict Games',
    desc: 'Use your knowledge to predict match outcomes.'
  },
  {
    icon: '🏆',
    title: 'Win Prizes',
    desc: 'Compete, climb the leaderboard, and win real rewards!'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="flex flex-col items-center bg-gray-800 rounded-xl p-6 shadow-lg w-full md:w-1/3"
            >
              {/* Icon placeholder - swap for SVG or animation later */}
              <div className="text-5xl mb-4">{step.icon}</div>
              <div className="text-xl font-semibold mb-2">{step.title}</div>
              <div className="text-gray-300">{step.desc}</div>
              {/* Arrow for flow, except last step */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block text-3xl text-green-400 mt-6">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 