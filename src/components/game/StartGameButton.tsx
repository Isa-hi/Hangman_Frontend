import { startGame } from "../../api/HangmanController";
import useStore from "../../hooks/useStore";
import { WORDS } from "../../constants/words";

export default function StartGameButton() {
  const {
    setLives,
    setloadedWord,
    setisGameStarted,
    setguessedWord,
    setIsGameOver,
    setQuestion
  } = useStore();

  const handleStartGame = () => {
    //Select random word from localstorage
    const storedWords = localStorage.getItem("questions") ?? JSON.stringify(WORDS);
    const storedWordsArray = JSON.parse(storedWords);
    const randomIndex = Math.floor(Math.random() * storedWordsArray.length);
    const wordObject = storedWordsArray[randomIndex];
    const {question, answer} = wordObject;
    
    setLives(5);
    setisGameStarted(true);
    setIsGameOver(false);
    setloadedWord(answer.toUpperCase());
    setguessedWord(Array(answer.length).fill("_ "));
    setQuestion(question);
    startGame(); // Send event to arduino
  };

  return (
        <button
          className="bg-amber-500 text-white text-2xl font-bold py-2 px-4 rounded-md hover:bg-amber-700 transition-colors animate-pulse"
          onClick={handleStartGame}
        >
          Iniciar juego 💀
        </button>
  );
}
