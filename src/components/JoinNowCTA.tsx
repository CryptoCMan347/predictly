import React from 'react';

/**
 * JoinNowCTA Component
 * Prominent call-to-action for joining Predictly.
 *
 * To customize: Change text, link, or add animation as needed.
 */
const JoinNowCTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-green-700 via-black to-yellow-700 text-white py-12 px-4 animate-fade-in">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Join the Battle?</h2>
        <p className="mb-6 text-lg text-gray-200">Sign up now and start competing for crypto prizes!</p>
        <a
          href="#join"
          aria-label="Join Predictly now and start competing"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 px-12 rounded-full text-xl shadow-lg transition-all duration-200 animate-bounce focus:outline-none focus:ring-4 focus:ring-yellow-300"
        >
          Join Now
        </a>
        <div className="mt-4 text-sm text-gray-400 relative group cursor-pointer">
          <span>No credit card required. Skill-based. Fun guaranteed.</span>
          <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-gray-800 text-xs text-gray-200 rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
            You can try Predictly for free. Only pay if you want to compete for real prizes!
          </span>
        </div>
      </div>
    </section>
  );
};

export default JoinNowCTA; 