import React from 'react';

function GameScreen({ phase, phaseIndex, totalPhases, onChoice }) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-xl text-gray-400 mb-2">
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

