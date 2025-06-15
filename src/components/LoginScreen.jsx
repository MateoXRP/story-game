// src/components/LoginScreen.jsx
import { useState } from 'react';
import { useGame } from '../context/GameContext';

export default function LoginScreen({ onLogin }) {
  const { setPlayerName } = useGame();
  const [nameInput, setNameInput] = useState('');

  const handleLogin = () => {
    const trimmed = nameInput.trim();
    if (trimmed.length === 0) return;
    setPlayerName(trimmed);
    onLogin();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-4xl font-bold">🕹️ Story Game</h1>
        <p className="text-lg">Enter your name to begin</p>
        <input
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Your Name"
          className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white text-lg"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}

