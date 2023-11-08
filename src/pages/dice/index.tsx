import Die from '../../components/Dice';
import WinnerBoard from '../../components/WinnerBoard';
import Button from '../../components/ui/Button/button';
import Player from '../../components/Player';
import { useGame } from '../../hooks/game';
import PlayerInput from '../../features/PlayerInput';

const Dice = () => {
  const {
    rollDice,
    initGame,
    reinitScores,
    currentTurn,
    nextTurn,
    players,
    dice1,
    dice2,
    winner,
  } = useGame();

  const handleRollDice = () => {
    rollDice(players[currentTurn].id);
    nextTurn();
  };
  const handleInitGame = () => {
    initGame();
  };

  const handleReinitScores = () => {
    reinitScores();
  };

  return (
    <div className='container mx-auto my-40 flex'>
      <div className='w-full md:w-3/4 flex flex-col justify-center items-center'>
        {winner && players.length > 1 && (
          <WinnerBoard winnerName={winner.name} />
        )}
        {players && players.length > 0 ? (
          <div>
            <h2>Tour du joueur : {players[currentTurn].name} </h2>
          </div>
        ) : (
          <h2>Ajouter un joueur pour jouer</h2>
        )}
        <div className='flex gap-6 py-8'>
          <Die pip={dice1} />
          <Die pip={dice2} rolling={false} />
        </div>

        <div className='text-2xl font-bold text-center'>{dice1 + dice2}</div>
        <Button onClick={handleRollDice} disabled={players.length < 1}>
          Lancer le dés
        </Button>
      </div>
      <div className='w-full md:w-1/4 flex flex-col justify-center'>
        <PlayerInput />
        {players.map(({ name, id, score }) => (
          <Player name={name} score={score} key={id} />
        ))}
        <div className='flex justify-between gap-2 pt-4'>
          <Button onClick={handleReinitScores}> Reinitiaiser le scrore</Button>
          <Button onClick={handleInitGame}>Reinitialiser le jeux</Button>
        </div>
      </div>
    </div>
  );
};

export default Dice;
