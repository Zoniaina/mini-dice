const WinnerBoard = ({ winnerName }: { winnerName: string }) => {
  return (
    <div className='py-14 px-8 bg-yellow-200 border rounded-md font-bold border-amber-400 my-6'>
      <p className='text-amber-700 text-sm'>Le gagnant est</p>
      <p className='text-center text-2xl'>🏆 {winnerName} 🏆</p>
    </div>
  );
};

export default WinnerBoard;
