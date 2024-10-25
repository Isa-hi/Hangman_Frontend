import LoseMenu from "../components/game/LoseMenu";
import WonMenu from "../components/game/WonMenu";
import Hangman from "../components/Hangman";
import LettersKeyboard from "../components/LettersKeyboard";
import MainGameMenu from "../components/MainGameMenu";
import useStore from "../hooks/useStore";

function App() {
  const { isGameStarted, isGameOver, lives } = useStore();

  return (
    <div className={`flex bg-red p-8 justify-center ${!isGameStarted && 'bg-[#1f0105]' }`}>
      {isGameStarted ? (
        isGameOver ? (
          lives <= 0 ? (<LoseMenu />) : (<WonMenu />) 
        ) : (
          <>
            <Hangman />
            <LettersKeyboard />
          </>
        )
      ) : (
        <MainGameMenu />
      )}
    </div>
  );
}

export default App;
