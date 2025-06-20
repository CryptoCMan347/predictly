import React from 'react';

const Announcements: React.FC = () => {
  return (
    <section className="mb-6 p-4 rounded-lg bg-gradient-to-r from-green-800 via-black to-yellow-800 text-center shadow">
      <span className="font-bold text-green-400">🚨 New Contest:</span> Premier League PvP starts this weekend! Prize pool: <span className="text-yellow-300">5000 creds</span>
    </section>
  );
};

export default Announcements; 