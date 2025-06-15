// src/components/GameScreen.jsx
import React from 'react';

function GameScreen({ phase, phaseIndex, totalPhases, scenario, emoji, onChoice }) {
  return (
    <div className="relative max-w-2xl mx-auto text-center">
      {/* Scenario Overlay with Emoji */}
      <div className="absolute top-0 left-0 bg-gray-800 text-white px-3 py-1 rounded-br-lg text-sm font-semibold shadow-lg z-10">
        {emoji} {scenario}
      </div>

      <h2 className="text-xl text-gray-400 mb-2 mt-6">
        Phase {phaseIndex + 1} of {totalPhases}
      </h2>

      <div className="bg-gray-800 p-6 rounded shadow mb-6">
        <p className="text-lg">{phase.text}</p>
      </div>

      <div className="space-y-4">
        {phase.choices.map((choice) => (
          <button
            key={choice.id}
            className="w-full bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white text-lg"
            onClick={() => onChoice(choice.id)}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GameScreen;
