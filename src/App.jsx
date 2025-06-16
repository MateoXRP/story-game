// src/App.jsx
import React, { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import ScenarioSelect from './components/ScenarioSelect';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';
import { getStoryForScenario } from './utils/storyGenerator';
import { useGame } from './context/GameContext';

const emojiMap = {
  'Knight Quest': '🛡️',
  'Crime Noir': '🕵️‍♂️',
  'Sci-Fi Adventure': '🚀',
  'Time Travel': '⏳',
  'Spy Hunter': '🕶️',
  'Mystic Adventure': '🧭',
  'Wild West': '🤠',
  'Kung Fu Showdown': '🥷',
  'Haunted House': '🏚️',
  'Rom Com': '💘', // ✅ Added
};

function App() {
  const { playerName, submitResult } = useGame();

  const [gameState, setGameState] = useState('login');
  const [scenario, setScenario] = useState(null);
  const [story, setStory] = useState([]);
  const [endings, setEndings] = useState(null);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [badEndingDetails, setBadEndingDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setGameState('select');
  };

  const startGame = async (chosenScenario) => {
    setLoading(true);
    const generatedStory = await getStoryForScenario(chosenScenario);
    setScenario(chosenScenario);
    setStory(generatedStory.phases);
    setEndings({
      ...generatedStory.endings,
      phases: generatedStory.phases,
    });
    setCurrentPhase(0);
    setBadEndingDetails(null);
    setLoading(false);
    setGameState('playing');
  };

  const handleChoice = (choiceId) => {
    const current = story[currentPhase];
    if (choiceId === current.correctChoice) {
      if (currentPhase === story.length - 1) {
        submitResult('win');
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
      submitResult('loss');
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
      {!playerName && <LoginScreen onLogin={handleLogin} />}
      {gameState === 'select' && <ScenarioSelect onStart={startGame} loading={loading} />}
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
