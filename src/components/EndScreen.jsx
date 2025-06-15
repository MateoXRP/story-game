// src/components/EndScreen.jsx
import React, { useEffect, useState } from 'react';
import { useGame } from '../context/GameContext';
import { db } from '../firebase';
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
} from 'firebase/firestore';

function EndScreen({ outcome, scenario, finalPhase, badEndingDetails, endingText, onRestart }) {
  const { playerName, logout } = useGame();
  const [leaderboard, setLeaderboard] = useState([]);
  const isWin = outcome === 'win';

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const ref = collection(db, 'story_leaderboard');
      const q = query(ref, orderBy('wins', 'desc'), limit(10));
      const snapshot = await getDocs(q);
      const results = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLeaderboard(results);
    };

    fetchLeaderboard();
  }, []);

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
    <div className="text-center max-w-3xl mx-auto space-y-6">
      <h1 className={`text-4xl font-bold ${isWin ? 'text-green-400' : 'text-red-400'}`}>
        {isWin ? 'Victory!' : 'Game Over'}
      </h1>

      <div className="text-lg">
        {isWin ? getWinMessage() : getLossMessage()}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">🏆 Global Leaderboard</h2>
        <ul className="text-left bg-gray-800 rounded p-4 max-w-md mx-auto space-y-2">
          {leaderboard.map((entry, idx) => (
            <li key={entry.id} className="flex justify-between">
              <span>{idx + 1}. {entry.id}</span>
              <span>✅ {entry.wins} / ❌ {entry.losses}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-white text-lg"
          onClick={onRestart}
        >
          Play Again
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-white text-lg"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default EndScreen;

