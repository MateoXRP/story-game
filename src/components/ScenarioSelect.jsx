// src/components/ScenarioSelect.jsx
import React from 'react';

const scenarios = [
  { id: 'knight', label: '🛡️ Knight Quest' },
  { id: 'noir', label: '🕵️‍♂️ Crime Noir' },
  { id: 'sci-fi', label: '🚀 Sci-Fi Adventure' },
  { id: 'time', label: '⏳ Time Travel' },
  { id: 'spy', label: '🕶️ Spy Hunter' }, // 🆕
];

function ScenarioSelect({ onStart }) {
  return (
    <div className="text-center max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📚 Choose Your Adventure</h1>
      <p className="mb-4">Pick a scenario to begin your story.</p>
      <div className="space-y-4">
        {scenarios.map((scenario) => (
          <button
            key={scenario.id}
            className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white text-lg"
            onClick={() => onStart(scenario.label.replace(/^[^ ]+ /, ''))} // remove emoji before passing
          >
            {scenario.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ScenarioSelect;
