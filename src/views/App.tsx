import Hangman from "../components/Hangman";
import LettersKeyboard from "../components/LettersKeyboard";

function App() {

  return (
      <div className="flex bg-red p-16 justify-center">
        <Hangman />

        <LettersKeyboard />
      </div>
  );
}

export default App;
