// src/components/ScenarioSelect.jsx
import React from 'react';

const scenarios = [
  { id: 'knight', label: '🛡️ Knight Quest' },
  { id: 'noir', label: '🕵️‍♂️ Crime Noir' },
  { id: 'sci-fi', label: '🚀 Sci-Fi Adventure' },
  { id: 'time', label: '⏳ Time Travel' },
  { id: 'spy', label: '🕶️ Spy Hunter' },
  { id: 'mystic', label: '🧭 Mystic Adventure' }, // ✅ Correct emoji restored
  { id: 'west', label: '🤠 Wild West' },
];

function ScenarioSelect({ onStart, loading }) {
  return (
    <div className="text-center max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📚 Choose Your Adventure</h1>
      <p className="mb-4">Pick a scenario to begin your story.</p>

      <div className="space-y-4">
        {scenarios.map((scenario) => (
          <button
            key={scenario.id}
            className={`w-full px-4 py-2 rounded text-white text-lg transition ${
              loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
            onClick={() => !loading && onStart(scenario.label.replace(/^[^ ]+ /, ''))}
            disabled={loading}
          >
            {scenario.label}
          </button>
        ))}
      </div>

      {loading && (
        <div className="mt-6 text-yellow-300 font-semibold text-lg animate-pulse">
          🤖 AI generating scenario...
        </div>
      )}
    </div>
  );
}

export default ScenarioSelect;
