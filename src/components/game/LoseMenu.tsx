import StartGameButton from "./StartGameButton";

export default function () {
  return (
    <div className="relative w-1/3">
      <img src="./bg-loseImg.jpeg" alt="" className="w-full h-auto" />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
        <StartGameButton />
      </div>
    </div>
  );
}
