// src/context/GameContext.jsx
import { createContext, useContext, useState } from 'react';
import { db } from '../firebase';
import {
  doc,
  getDoc,
  setDoc,
  increment,
  serverTimestamp,
} from 'firebase/firestore';

const GameContext = createContext();

export function GameProvider({ children }) {
  const [playerName, setPlayerName] = useState('');
  const [gameResult, setGameResult] = useState(null); // 'win' or 'loss'

  const logout = () => {
    setPlayerName('');
    setGameResult(null);
  };

  const submitResult = async (result) => {
    if (!playerName) return;

    const ref = doc(db, 'story_leaderboard', playerName);
    const snapshot = await getDoc(ref);

    if (snapshot.exists()) {
      await setDoc(
        ref,
        {
          wins: result === 'win' ? increment(1) : increment(0),
          losses: result === 'loss' ? increment(1) : increment(0),
          lastPlayed: serverTimestamp(),
        },
        { merge: true }
      );
    } else {
      await setDoc(ref, {
        wins: result === 'win' ? 1 : 0,
        losses: result === 'loss' ? 1 : 0,
        lastPlayed: serverTimestamp(),
      });
    }

    setGameResult(result);
  };

  return (
    <GameContext.Provider
      value={{
        playerName,
        setPlayerName,
        gameResult,
        setGameResult,
        logout,
        submitResult,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}

