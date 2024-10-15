import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#4A0E0E] p-4 flex items-center">
      <div className="mr-4">
        <Link to={"/"}>
          <img
            className="size-40"
            src="/Hangman_Logo.jpeg"
            alt="Logo del juego"
          />
        </Link>
      </div>
      <h1 className="text-4xl font-bold text-white">
        El Juicio de Huitzilopochtli
        <Link to={"/admin"}> 💀</Link>
      </h1>
    </header>
  );
}
