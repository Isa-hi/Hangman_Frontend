import useStore from "../hooks/useStore";

export default function () {

  const { lives, word, guessed, setLives, setWord, setGuessed, setIsGameInProgress } = useStore();

  const handleStartGame = () => {
    setLives(5);
    setWord('EXAMPLE'); // Replace with logic to set a random word
    setIsGameInProgress(true);
    const wordLength = word.length;
    // Create a string full of _ with the same length as the word
    const wordArray = Array(wordLength).fill('_ ').join('');
    
    setGuessed(wordArray);
  }

  return (
      <div className="flex flex-col justify-between p-4">
            <div>
                <span className="text-2xl font-bold">Vidas: </span>
                <span className="text-2xl font-bold text-red-500"> {lives} </span>
            </div>
            <button className="bg-[#4A0E0E] text-white text-2xl font-bold w-16 h-16 rounded-md hover:bg-amber-700 transition-colors">🔄</button>
        
            <div>
                <span className="text-2xl font-bold">Palabra: </span>
                <span className="text-2xl font-bold text-red-500">{word}</span>
            </div>
            <div>
                <span className="text-2xl font-bold">Guess: </span>
                <span className="text-2xl font-bold text-red-500">{guessed}</span>
            </div>

            <div className="flex justify-center mt-4">
              <button 
                className="bg-green-500 text-white text-2xl font-bold py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                onClick={() => handleStartGame()}
              >
                Start Game
              </button>
            </div>
    </div>
  )
}

{/* Implement lives counter and reset button*/}