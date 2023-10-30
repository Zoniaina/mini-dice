import GameProvider from './context/game.provider';
import Dice from './pages/dice';

function App() {
  return (
    <>
      <GameProvider>
        <Dice />
      </GameProvider>
    </>
  );
}

export default App;
