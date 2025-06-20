import React from 'react';

const CurrentContests: React.FC = () => {
  return (
    <section className="mb-8 bg-gray-900 rounded-lg p-6 shadow">
      <h2 className="text-2xl font-bold mb-4">Current Contests</h2>
      <ul>
        <li className="mb-3 flex justify-between items-center bg-gray-800 rounded p-3">
          <span className="font-semibold text-yellow-400">Premier League PvP</span>
          <span className="text-green-300">Prize: 5000 creds</span>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-1 px-4 rounded-full text-sm shadow transition-transform duration-150 active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-300" aria-label="Join Premier League PvP">Join</button>
        </li>
        <li className="mb-3 flex justify-between items-center bg-gray-800 rounded p-3">
          <span className="font-semibold text-yellow-400">Solo Challenge</span>
          <span className="text-green-300">Prize: 500 creds</span>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-1 px-4 rounded-full text-sm shadow transition-transform duration-150 active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-300" aria-label="Play Solo Challenge">Play</button>
        </li>
      </ul>
    </section>
  );
};

export default CurrentContests; 