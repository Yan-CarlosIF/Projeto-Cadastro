import { Code, EnvelopeSimple, Lock, UserPlus } from "phosphor-react";

const Login = () => {
  return (
    <div className="rounded-2xl flex bg-[var(--type-white)] w-5xl h-[555px] rounded-r-2xl shadow-2xl">
      <div className="w-1/3 bg-[var(--secondary-color)] rounded-l-2xl flex justify-center items-center flex-col text-white px-13">
        <div className="flex flex-col gap-1.5 mt-40 shrink-1">
          <div className="flex items-center gap-2 border-l-3 pl-2 border-gray-300 mb-1">
            <Code size={45} color="#fff" />
            <h1 className="text-3xl font-extrabold">CADASTRO</h1>
          </div>
          <h2 className="text-2xl font-bold">Seja bem vindo!</h2>
          <p className="text-xl">Acesse sua conta</p>
          <p className="text-xl">agora mesmo.</p>
        </div>
        <div className="flex items-center justify-center border-4 rounded-[30px] w-[230px] h-18 cursor-pointer mt-auto mb-20 hover:bg-[var(--hover-white)] duration-300 ease-in-out">
          <button className="text-2xl font-bold leading-0 cursor-pointer">
            ENTRAR
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center text-black w-full p-12">
        <h1 className="text-4xl font-extrabold ">Crie sua conta</h1>
        <p className="text-lg font-semibold mt-2">Preencha o formulário</p>

        <form
          action="submit"
          className="flex justify-center flex-col items-center gap-6 mt-5 text-[#5d500a]"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Nome"
              className="w-lg h-15 pl-13 rounded-2xl bg-[var(--primary-color)] shadow-[var(--custom-shadow)] text-[23px] font-bold outline-none"
            />
            <UserPlus
              className="absolute top-5.5 left-6"
              size={20}
              color="#5d500a"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-lg h-15 pl-13 rounded-2xl bg-[var(--primary-color)] shadow-[var(--custom-shadow)] text-[23px] font-bold outline-none"
            />
            <EnvelopeSimple
              className="absolute top-5.5 left-6"
              size={20}
              color="#5d500a"
            />
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Senha"
              className="w-lg h-15 pl-13 rounded-2xl bg-[var(--primary-color)] shadow-[var(--custom-shadow)] mb-2 text-[23px] font-bold outline-none"
            />
            <Lock
              className="absolute top-5.5 left-6"
              size={20}
              weight="fill"
              color="#5d500a"
            />
          </div>
          <div className="flex justify-center rounded-[30px] w-[230px] h-18 cursor-pointer mt-auto mb-20 bg-[var(--secondary-color)] duration-300 ease-in-out">
            <button className="text-2xl font-bold leading-0 cursor-pointer text-white">
              CADASTRAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
