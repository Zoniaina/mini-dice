import { createContext, useMemo, useState } from 'react';

type Player = {
  id: string;
  name: string;
  score: number;
};

//TODO:update type
// type GameType = {
//   players: Array<Player>;
//   setPlayers: () => void;
// };

const initValue = {
  players: [],
  setPlayers: () => undefined,
  setCurrentPlayer: (value: number) => undefined,
  currentPlayer: null,
  getPlayerTurn: undefined,
  rollingCount: 0,
  setRollingCount: () => undefined,
  winnerIndex: 0,
  resetScore: () => undefined,
  reinitGame: () => undefined,
};

export const GameContext = createContext(initValue);

const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<number>(0);
  const [rollingCount, setRollingCount] = useState(0);

  const getPlayerTurn = () => {
    if (players.length <= 0) return;
    if (currentPlayer < players.length - 1) {
      setCurrentPlayer((prev) => prev + 1);
      return;
    }
    setCurrentPlayer(0);
  };

  const reinitGame = () => {
    setPlayers([]);
    setRollingCount(0);
  };

  const resetScore = () => {
    const newScores = players.map((score) => ({ ...score, score: 0 }));
    setPlayers(newScores);
    setRollingCount(0);
  };

  const winnerIndex = useMemo(() => {
    if (rollingCount && rollingCount < 2) return;
    let maxScore = -Infinity;
    let maxScoreIndex = -1;

    players.forEach((obj, index) => {
      if (obj.score > maxScore) {
        maxScore = obj.score;
        maxScoreIndex = index;
      }
    });
    return maxScoreIndex | 0;
  }, [rollingCount, resetScore]);

  const value = {
    players,
    setPlayers,
    currentPlayer,
    setCurrentPlayer,
    getPlayerTurn,
    rollingCount,
    setRollingCount,
    winnerIndex,
    reinitGame,
    resetScore,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameProvider;
