import { Code } from "phosphor-react";
import { useNavigate } from "react-router-dom";

interface LeftSideProps {
  title: string;
  subtitle: string;
  buttonTitle: string;
}

const LeftSide = ({ subtitle, title, buttonTitle }: LeftSideProps) => {
  const navigation = useNavigate();
  const goToLink = buttonTitle === "Entrar" ? "/login" : "/";

  return (
    <div className="w-1/3 bg-[var(--secondary-color)] rounded-l-2xl flex justify-center items-center flex-col text-white px-13">
      <div className="flex flex-col gap-1.5 mt-40 shrink-1">
        <div className="flex items-center gap-2 border-l-3 pl-2 border-gray-300 mb-1">
          <Code size={45} color="#fff" />
          <h1 className="text-3xl font-extrabold">{title.toUpperCase()}</h1>
        </div>
        <h2 className="text-2xl font-bold">Seja bem vindo!</h2>
        <p className="text-xl">{subtitle}</p>
        <p className="text-xl">agora mesmo.</p>
      </div>
      <button
        className="text-2xl font-bold leading-0 cursor-pointer flex items-center justify-center border-4 rounded-[30px] w-[230px] h-18 mt-auto mb-20 hover:bg-[var(--hover-white)] duration-300 ease-in-out"
        onClick={() => navigation(goToLink)}
      >
        {buttonTitle.toUpperCase()}
      </button>
    </div>
  );
};

export default LeftSide;
