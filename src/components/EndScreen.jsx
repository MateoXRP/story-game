import React from 'react';

function EndScreen({ outcome, scenario, finalPhase, badEndingDetails, onRestart }) {
  const isWin = outcome === 'win';

  const getLossMessage = () => {
    if (!badEndingDetails) return 'Your journey ends here.';

    const { text, choice } = badEndingDetails;

    const scenarioFlavor = {
      'Knight Quest': `Your decision — "${choice}" — was not the path of a true knight.`,
      'Crime Noir': `Your choice — "${choice}" — left the case cold and the streets colder.`,
      'Sci-Fi Adventure': `Your selection — "${choice}" — doomed the mission in the stars.`,
      'Time Travel': `That action — "${choice}" — disrupted the timeline beyond repair.`,
    };

    return (
      <>
        <p className="mb-4 italic text-yellow-300">"{text}"</p>
        <p>{scenarioFlavor[scenario] || 'You made the wrong choice and met your end.'}</p>
      </>
    );
  };

  const getWinMessage = () => {
    const endings = {
      'Knight Quest': "You have defeated the sorcerer and restored peace to the realm.",
      'Crime Noir': "You cracked the case and saved the girl. Justice—your way—prevails.",
      'Sci-Fi Adventure': "You embraced the unknown and emerged changed. A legend among the stars.",
      'Time Travel': "You've altered fate and returned home through the stream of time.",
    };
    return endings[scenario] || 'You completed your quest.';
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

