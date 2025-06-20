import React from 'react';

interface CreditsDisplayProps {
  credits: number;
}

const CreditsDisplay: React.FC<CreditsDisplayProps> = ({ credits }) => {
  return (
    <section className="mb-8 flex items-center justify-between bg-gray-900 rounded-lg p-6 shadow">
      <div>
        <div className="text-lg text-gray-400">My Credits</div>
        <div className="text-4xl font-extrabold text-green-400">{credits}</div>
      </div>
    </section>
  );
};

export default CreditsDisplay; 