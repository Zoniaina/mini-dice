import { useContext, useState } from 'react';

import { GameContext } from '../../context/game.provider';
import Die from '../../components/Dice';

const DICE_FACES = 6;

const Dice = () => {
  const [dicesState, setDicesState] = useState({
    first: 1,
    second: 1,
  });
  const [username, setUsername] = useState('');

  const {
    setPlayers,
    players,
    currentPlayer,
    setCurrentPlayer,
    getPlayerTurn,
    setRollingCount,
    rollingCount,
    winnerIndex,
    reinitGame,
    resetScore,
  } = useContext(GameContext);

  const handleThroughDice = () => {
    const dice1 = Math.floor(Math.random() * (DICE_FACES - 1 + 1) + 1);
    const dice2 = Math.floor(Math.random() * (DICE_FACES - 1 + 1) + 1);

    setRollingCount((prev: number) => prev + 1);

    setDicesState((prev) => ({
      ...prev,
      second: dice1,
      first: dice2,
    }));

    setPlayers((prev) => {
      const playersCopy = [...players];
      playersCopy[currentPlayer].score =
        playersCopy[currentPlayer].score + dice1 + dice2;
      return playersCopy;
    });

    getPlayerTurn();
  };

  const handleAddPlayer = () => {
    const id = new Date().getTime();
    if (!username || username.length < 1) return;
    if (!currentPlayer) setCurrentPlayer(0);

    setPlayers((prev) => [
      ...prev,
      {
        id,
        name: username,
        score: 0,
      },
    ]);
    setUsername('');
  };

  return (
    <div className='container mx-auto my-40 flex flex-wrap'>
      <div className='w-full md:w-3/4 flex flex-col justify-center items-center'>
        {players.length > 1 && rollingCount >= players.length && (
          <div className='py-14 px-8 bg-yellow-200 border rounded-md font-bold border-amber-400 my-6'>
            <p className='text-amber-700 text-sm'>
              🎉 Le gagnant en ce moment est 🏆
            </p>
            <p className='text-center'>
              {players[winnerIndex] && players[winnerIndex].name}
            </p>
          </div>
        )}
        {players.length > 0 ? (
          <div>
            <h2>Tour du joueur : {players[currentPlayer].name} </h2>
          </div>
        ) : (
          <h2>Ajouter un joueur pour jouer</h2>
        )}
        <div className='flex gap-6 py-8'>
          <Die pip={dicesState.first} />
          <Die pip={dicesState.second} />
        </div>

        <div className='text-2xl font-bold text-center'>
          {dicesState.first + dicesState.second}
        </div>

        <button
          className='bg-black text-white shadow-md text-sm px-4 py-2 rounded-sm cursor-pointer disabled:opacity-20'
          onClick={handleThroughDice}
          disabled={players.length < 1}
        >
          Lancer le dés
        </button>
      </div>
      <div className='md:w-1/4'>
        <div className='border-b pb-6 flex flex-col gap-3 items-center justify-center'>
          {rollingCount > 0 && (
            <button
              className='bg-black text-white shadow-md text-sm px-4 py-2 rounded-sm h-fit w-full cursor-pointer'
              onClick={reinitGame}
            >
              Reinitialiser le jeux
            </button>
          )}
          <div className='flex flex-col w-full'>
            <label className='text-xs mb-3' htmlFor='playername'>
              Nom du joueur
            </label>
            <input
              type='text'
              className='border border-slate-300 text-xs py-2 px-5 '
              id='playername'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) =>
                e.key === 'Enter' ? setUsername(e.target.value) : undefined
              }
            />
          </div>
          <button
            className='bg-black text-white shadow-md text-sm px-4 py-2 rounded-sm h-fit w-full cursor-pointer'
            onClick={handleAddPlayer}
          >
            Ajouter un joueur
          </button>
        </div>
        {players.map((player) => (
          <div
            className='text-sm px-1 py-4 flex justify-between'
            key={player.id}
          >
            <p className=''>{player.name}</p>
            <p>
              <span className='font-bold'>{player.score}</span> pts
            </p>
          </div>
        ))}
        {rollingCount > 0 && (
          <button
            className='bg-black text-white shadow-md text-sm px-4 py-2 rounded-sm h-fit w-full cursor-pointer'
            onClick={resetScore}
          >
            Reinitialiser le scrore
          </button>
        )}
      </div>
    </div>
  );
};

export default Dice;
