import { createContext, useState } from 'react';
import { PlayerSchema, GameContextType, Player } from '../types/player';
import randomFace from '../utils/random';

export const GameContext = createContext<GameContextType | undefined>(
  undefined
);

const GameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [currentTurn, setCurrentTurn] = useState(0);
  const [dice1, setDice1] = useState(0);
  const [dice2, setDice2] = useState(0);

  const addPlayer = (name: string) => {
    const newPlayer = {
      id: players.length + 1,
      name,
      score: 0,
      dice: [0, 0],
      winner: false,
    };
    PlayerSchema.parse(newPlayer);
    setPlayers([...players, newPlayer]);
  };

  const rollDice = (playerId: number) => {
    const dice1 = randomFace();
    const dice2 = randomFace();
    const total = dice1 + dice2;
    setDice1(dice1);
    setDice2(dice2);
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === playerId
          ? { ...player, score: player.score + total, dice: [dice1, dice2] }
          : player
      )
    );
    setWinner();
  };

  const nextTurn = () => {
    setCurrentTurn((prevTurn) => (prevTurn + 1) % players.length);
  };

  const initGame = () => {
    setPlayers([]);
    setCurrentTurn(0);
  };

  const reinitScores = () => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => ({ ...player, score: 0, dice: [0, 0] }))
    );
  };

  const setWinner = () => {
    const maxScore = Math.max(...players.map((player) => player.score));
    const winners = players.filter((player) => player.score === maxScore);
    if (winners.length === 1) {
      setPlayers((prevPlayers) =>
        prevPlayers.map((player) =>
          player.id === winners[0].id
            ? { ...player, winner: true }
            : { ...player, winner: false }
        )
      );
    }
  };

  const contextValue: GameContextType = {
    players,
    addPlayer,
    rollDice,
    currentTurn,
    nextTurn,
    initGame,
    reinitScores,
    dice1,
    dice2,
    winner: players.find((player) => player.winner) || null,
    findWinner: setWinner,
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};

export default GameProvider;
