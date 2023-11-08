import { useState } from 'react';
import { useGame } from '../../hooks/game';
import Button from '../../components/ui/Button/button';
import Input from '../../components/ui/Input/input';

const PlayerInput = () => {
  const { addPlayer } = useGame();
  const [username, setUsername] = useState('');

  const handleAddPlayer = () => {
    if (username.trim() !== '') {
      addPlayer(username);
      setUsername('');
    }
  };

  return (
    <div className='border-b pb-6 flex flex-col gap-3 items-center justify-center'>
      <div className='flex flex-col w-full'>
        <label className='text-xs mb-3' htmlFor='playername'>
          Nom du joueur
        </label>
        <Input
          type='text'
          id='playername'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <Button onClick={handleAddPlayer}> Ajouter un joueur</Button>
    </div>
  );
};

export default PlayerInput;
