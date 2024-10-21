import useStore from "../hooks/useStore";

export default function () {
  const {
    lives,
    guessedWord,
    question
  } = useStore();

  return (
    <div className="flex flex-col justify-between p-4">
      <div>
        <span className="text-2xl font-bold">Vidas: </span>
        <span className="text-2xl font-bold text-red-500 animate-pulse"> {lives} </span>
      </div>

      <div>
        <span className="text-2xl font-bold">Pregunta: </span>
        <span className="text-2xl font-bold text-red-500">{question}</span>
      </div>
      <div>
        {/* <span className="text-2xl font-bold">Guess: </span> */}
        <span className="text-2xl font-bold text-red-500">{guessedWord}</span>
      </div>
        {/* <span className="text-2xl font-bold text-red-500">{loadedWord}</span> */}
    </div>
  );
}

{
  /* Implement lives counter and reset button*/
}
