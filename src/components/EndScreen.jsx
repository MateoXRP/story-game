import React from 'react';

function EndScreen({ outcome, onRestart }) {
  const isWin = outcome === 'win';

  return (
    <div className="text-center max-w-xl mx-auto">
      <h1 className={`text-4xl font-bold mb-4 ${isWin ? 'text-green-400' : 'text-red-400'}`}>
        {isWin ? 'Victory!' : 'Game Over'}
      </h1>
      <p className="text-lg mb-6">
        {isWin
          ? 'You made all the right choices and completed your quest.'
          : 'Your journey ends here. Try a different path next time.'}
      </p>
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

