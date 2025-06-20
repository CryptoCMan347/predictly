import React from 'react';

interface MyCreditsProps {
  credits: number;
  onBuyMore: () => void;
  buying: boolean;
}

const MyCredits: React.FC<MyCreditsProps> = ({ credits, onBuyMore, buying }) => {
  return (
    <section className="mb-8 flex items-center justify-between bg-gray-900 rounded-lg p-6 shadow">
      <div>
        <div className="text-lg text-gray-400">My Credits</div>
        <div className="text-4xl font-extrabold text-green-400">{credits}</div>
      </div>
      <button
        className="bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-6 rounded-full text-lg shadow transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-300 disabled:opacity-60"
        onClick={onBuyMore}
        disabled={buying}
        aria-label="Buy more credits"
      >
        {buying ? 'Processing...' : 'Buy More'}
      </button>
    </section>
  );
};

export default MyCredits; 