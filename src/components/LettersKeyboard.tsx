import { Dispatch, useState } from "react";
import useStore from "../hooks/useStore";

export default function LettersKeyboard() {

  // Import zustand store
  const { lives, word, guessed, setLives, setGuessed, isGameInProgress} = useStore();


  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXZ".split("");
  const [usedLetters, setUsedLetters] = useState<string[]>([]);

  const handleClick = (letter: string) => {    
    if(word.split('').includes(letter)){
      // Guess should show the letter in the correct position
      
    } else {
      setLives(lives - 1);
    }
    setUsedLetters([...usedLetters, letter]);    
  }

  return ( 
    <div className="grid grid-cols-6 gap-4">
      {letters.map((letter) => (
        <button
          key={letter}
          className={`text-white text-2xl font-bold w-16 h-16 rounded-xl transition-colors ${
            usedLetters.includes(letter) ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#4A0E0E] hover:bg-amber-500 '
          }`}
          onClick={() => handleClick(letter)}
          disabled={usedLetters.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
