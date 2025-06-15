// src/components/EndScreen.jsx
import React from 'react';

function EndScreen({ outcome, scenario, finalPhase, badEndingDetails, endingText, onRestart }) {
  const isWin = outcome === 'win';

  const getLossMessage = () => {
    if (!badEndingDetails) return 'Your journey ends here.';

    const { text, choice, choiceId, phase } = badEndingDetails;

    const customEnding =
      endingText?.losses?.[phase]?.[choiceId] ||
      `Your decision — "${choice}" — was your undoing.`;

    return (
      <>
        <p className="mb-4 italic text-yellow-300">"{text}"</p>
        <p className="mb-2 text-blue-300">You chose: <span className="font-semibold">"{choice}"</span></p>
        <p>{customEnding}</p>
      </>
    );
  };

  const getWinMessage = () => {
    return endingText?.win || 'You completed your quest.';
  };

  return (
    <div className="text-center max-w-xl mx-auto">
      <h1 className={`text-4xl font-bold mb-4 ${isWin ? 'text-green-400' : 'text-red-400'}`}>
        {isWin ? 'Victory!' : 'Game Over'}
      </h1>
      <div className="text-lg mb-6">
        {isWin ? getWinMessage() : getLossMessage()}
      </div>
      <button
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-white text-lg"
        onClick={onRestart}
      >
        Play Again
      </button>
    </div>
  );
}

export default EndScreen;
