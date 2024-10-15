import { create } from "zustand";

type gameState = {
  lives: number;
  word: string;
  guessed: string;
  isGameInProgress: boolean;
  setLives: (lives: number) => void;
  setWord: (word: string) => void;
  setGuessed: (guessed: string) => void;
  setIsGameInProgress: (isGameInProgress: boolean) => void;
};

const useStore = create<gameState>((set) => ({
  lives: 0,
  word: "",
  guessed: "",
  isGameInProgress: false,

  setLives: (lives: number) => set({ lives }),
  setWord: (word: string) => set({ word }),
  setGuessed: (guessed: string) => set({ guessed }),
  setIsGameInProgress: (isGameInProgress: boolean) => set({ isGameInProgress }),
}));

export default useStore;
