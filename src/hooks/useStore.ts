import { create } from "zustand";

type gameState = {
  lives: number;
  loadedWord: string;
  guessedWord: string[];
  isGameStarted: boolean;
  isGameOver: boolean;
  question: string;


  setLives: (lives: number) => void;
  setloadedWord: (loadedWord: string) => void;
  setguessedWord: (guessedWord: string[]) => void;
  setisGameStarted: (isGameStarted: boolean) => void;
  setIsGameOver: (isGameOver: boolean) => void;
  setQuestion: (question: string) => void;
};

const useStore = create<gameState>((set) => ({
  lives: 0,
  loadedWord: "",
  guessedWord: [],
  isGameStarted: false,
  isGameOver: false,
  question: "",

  setLives: (lives: number) => set({ lives }),
  setloadedWord: (loadedWord: string) => set({ loadedWord }),
  setguessedWord: (guessedWord: string[]) => set({guessedWord}),
  setisGameStarted: (isGameStarted: boolean) => set({ isGameStarted }),
  setIsGameOver: (isGameOver: boolean) => set({ isGameOver }),
  setQuestion: (question: string) => set({ question }),
}));
export default useStore;
