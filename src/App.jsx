import React, { useState } from 'react';
import ScenarioSelect from './components/ScenarioSelect';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';
import { getMockStoryForScenario } from './utils/storyGenerator';

function App() {
  const [gameState, setGameState] = useState('select'); // 'select' | 'playing' | 'win' | 'lose'
  const [scenario, setScenario] = useState(null);
  const [story, setStory] = useState([]); // Array of phases
  const [currentPhase, setCurrentPhase] = useState(0);
  const [badEndingDetails, setBadEndingDetails] = useState(null); // track bad choice context

  const startGame = (chosenScenario) => {
    const generatedStory = getMockStoryForScenario(chosenScenario);
    setScenario(chosenScenario);
    setStory(generatedStory);
    setCurrentPhase(0);
    setBadEndingDetails(null);
    setGameState('playing');
  };

  const handleChoice = (choiceId) => {
    const current = story[currentPhase];
    if (choiceId === current.correctChoice) {
      if (currentPhase === story.length - 1) {
        setGameState('win');
      } else {
        setCurrentPhase(currentPhase + 1);
      }
    } else {
      setBadEndingDetails({
        scenario,
        phase: currentPhase + 1,
        text: current.text,
        choice: current.choices.find((c) => c.id === choiceId)?.text || 'Unknown choice',
      });
      setGameState('lose');
    }
  };

  const restartGame = () => {
    setGameState('select');
    setScenario(null);
    setStory([]);
    setCurrentPhase(0);
    setBadEndingDetails(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {gameState === 'select' && <ScenarioSelect onStart={startGame} />}

      {gameState === 'playing' && story.length > 0 && story[currentPhase] && (
        <GameScreen
          phase={story[currentPhase]}
          phaseIndex={currentPhase}
          totalPhases={story.length}
          onChoice={handleChoice}
        />
      )}

      {(gameState === 'win' || gameState === 'lose') && (
        <EndScreen
          outcome={gameState}
          scenario={scenario}
          finalPhase={currentPhase + 1}
          badEndingDetails={badEndingDetails}
          onRestart={restartGame}
        />
      )}
    </div>
  );
}

export default App;
