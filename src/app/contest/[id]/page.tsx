"use client";
import React, { useState } from 'react';
import { useParams } from 'next/navigation';

/**
 * Contest Detail Page
 * Shows all info for a specific contest and lets the user submit predictions.
 *
 * Sections: Contest Name, Entry Fee, Prize Pool, Format, Deadline, Match List, Prediction Form, Confirm Button
 *
 * To customize: Replace placeholder data with real contest info and connect the form to backend logic.
 */
export default function ContestDetailPage() {
  // Placeholder: In a real app, fetch contest data using the id param
  // const { id } = useParams();
  const contest = {
    name: 'Weekend Premier League Clash',
    entryFee: 10,
    prizePool: 200,
    format: '1v1 PvP',
    deadline: '2024-06-15 15:00 UTC',
    matches: [
      { id: 1, teams: 'Arsenal vs Chelsea', abbr: 'ARS vs CHE' },
      { id: 2, teams: 'Liverpool vs Man City', abbr: 'LIV vs MCI' }
    ]
  };

  // State for predictions, error, and success
  const [predictions, setPredictions] = useState<{ [key: number]: string }>({});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Handle prediction change
  const handlePredictionChange = (matchId: number, value: string) => {
    setPredictions((prev) => ({ ...prev, [matchId]: value }));
    setError('');
    setSuccess(false);
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate: all matches must have a prediction
    const allSelected = contest.matches.every((m) => predictions[m.id] && predictions[m.id] !== 'Choose');
    if (!allSelected) {
      setError('Please make a prediction for every match.');
      setSuccess(false);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setError('');
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-black text-white py-8 px-4 animate-fade-in">
      <div className="max-w-2xl mx-auto bg-gray-900 rounded-lg p-8 shadow-lg">
        {/* Contest Name */}
        <h1 className="text-3xl font-extrabold mb-2">{contest.name}</h1>
        <div className="mb-6 text-gray-400">Entry Fee: <span className="text-yellow-400">{contest.entryFee} creds</span> | Prize Pool: <span className="text-green-400">{contest.prizePool} creds</span></div>
        <div className="mb-4 flex gap-4 text-sm">
          <span className="bg-gray-800 px-3 py-1 rounded-full">Format: {contest.format}</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full">Deadline: {contest.deadline}</span>
        </div>

        {/* Match List */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Matches</h2>
          <ul>
            {contest.matches.map((m) => (
              <li key={m.id} className="mb-2 flex justify-between bg-gray-800 rounded p-3">
                <span>{m.teams}</span>
                <span className="text-gray-400 text-xs">({m.abbr})</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Prediction Form with validation and feedback */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Submit Your Predictions</h2>
          <form className="space-y-4" onSubmit={handleSubmit} aria-label="Prediction Form">
            {contest.matches.map((m) => (
              <div key={m.id} className="flex items-center gap-4">
                <label className="w-40 text-gray-200" htmlFor={`prediction-${m.id}`}>{m.teams}</label>
                <select
                  id={`prediction-${m.id}`}
                  className="flex-1 bg-gray-700 text-white rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  value={predictions[m.id] || 'Choose'}
                  onChange={(e) => handlePredictionChange(m.id, e.target.value)}
                  aria-label={`Prediction for ${m.teams}`}
                  required
                >
                  <option>Choose</option>
                  <option>Home Win</option>
                  <option>Draw</option>
                  <option>Away Win</option>
                </select>
              </div>
            ))}
            {error && <div className="text-red-400 text-sm mt-2">{error}</div>}
            {success && <div className="text-green-400 text-sm mt-2">Predictions submitted! Good luck!</div>}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-200 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-300 mb-4 disabled:opacity-60"
              disabled={submitting}
              aria-label="Confirm Entry"
            >
              {submitting ? 'Submitting...' : 'Confirm Entry'}
            </button>
          </form>
        </section>
        <div className="text-yellow-300 text-sm mt-2">💡 This is a skill-based contest. Predictions lock in at kickoff.</div>
      </div>
    </main>
  );
} 