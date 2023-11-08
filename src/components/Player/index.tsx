import { Player as PlayerType } from '../../types/player';

type PlayerProps = Pick<PlayerType, 'name' | 'score'> & {
  turn?: boolean;
};

const Player: React.FC<PlayerProps> = ({ name, score }) => {
  return (
    <div className='text-sm px-1 py-4 flex justify-between'>
      <p className=''>{name}</p>
      <p>
        <span className='font-bold'>{score}</span> pts
      </p>
    </div>
  );
};

export default Player;
