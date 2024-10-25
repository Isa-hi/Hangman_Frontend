import { useState } from "react";
import useStore from "../hooks/useStore";
import { gameOver, gameWon, loseLife } from "../api/HangmanController";

export default function LettersKeyboard() {
  const {
    lives,
    loadedWord,
    guessedWord,
    setLives,
    setguessedWord,
    setIsGameOver,
  } = useStore();

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [usedLetters, setUsedLetters] = useState<string[]>([]);

  const handleClick = (letter: string) => {
    if (loadedWord.split("").includes(letter)) {
      const newGuessedWord = guessedWord.map((char, index) =>
        loadedWord[index] === letter ? letter : char
      ) as string[];

      setguessedWord(newGuessedWord);

      if (!newGuessedWord.includes("_ ")) {
        gameWon();
        setIsGameOver(true)
      }
    } else {
      const newLives = lives - 1;
      setLives(newLives);
      loseLife(); // Send event to arduino
      if (newLives <= 0) {
        gameOver();
        setIsGameOver(true)
      }
    }
    setUsedLetters([...usedLetters, letter]);
  };

  return (
    <div className="grid grid-cols-6 gap-4">
      {letters.map((letter) => (
        <button
          key={letter}
          className={`text-white text-2xl font-bold w-16 h-16 rounded-xl transition-colors ${
            usedLetters.includes(letter)
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#4A0E0E] hover:bg-amber-500 "
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

{
  /*  */
}
