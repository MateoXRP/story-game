// src/App.jsx
import React, { useState } from 'react';
import ScenarioSelect from './components/ScenarioSelect';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';
import { getMockStoryForScenario } from './utils/storyGenerator';

const emojiMap = {
  'Knight Quest': '🛡️',
  'Crime Noir': '🕵️‍♂️',
  'Sci-Fi Adventure': '🚀',
  'Time Travel': '⏳',
};

function App() {
  const [gameState, setGameState] = useState('select');
  const [scenario, setScenario] = useState(null); // full name (e.g., "Knight Quest")
  const [story, setStory] = useState([]);
  const [endings, setEndings] = useState(null);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [badEndingDetails, setBadEndingDetails] = useState(null);

  const startGame = (chosenScenario) => {
    const generatedStory = getMockStoryForScenario(chosenScenario);
    setScenario(chosenScenario);
    setStory(generatedStory.phases);
    setEndings(generatedStory.endings);
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
        choiceId,
        choice: current.choices.find((c) => c.id === choiceId)?.text || 'Unknown choice',
      });
      setGameState('lose');
    }
  };

  const restartGame = () => {
    setGameState('select');
    setScenario(null);
    setStory([]);
    setEndings(null);
    setCurrentPhase(0);
    setBadEndingDetails(null);
  };

  const emoji = scenario ? emojiMap[scenario] || '' : '';

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {gameState === 'select' && <ScenarioSelect onStart={startGame} />}

      {gameState === 'playing' && story.length > 0 && story[currentPhase] && (
        <GameScreen
          phase={story[currentPhase]}
          phaseIndex={currentPhase}
          totalPhases={story.length}
          scenario={scenario}
          emoji={emoji}
          onChoice={handleChoice}
        />
      )}

      {(gameState === 'win' || gameState === 'lose') && (
        <EndScreen
          outcome={gameState}
          scenario={scenario}
          finalPhase={currentPhase + 1}
          badEndingDetails={badEndingDetails}
          endingText={endings}
          onRestart={restartGame}
        />
      )}
    </div>
  );
}

export default App;
