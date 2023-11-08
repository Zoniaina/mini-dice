import { useContext } from 'react';
import { GameContext } from '../context/game.provider';

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
