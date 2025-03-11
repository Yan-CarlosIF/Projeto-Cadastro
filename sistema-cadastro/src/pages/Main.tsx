import LeftSide from "../components/LoginOrRegisterSide";

const Main = () => {
  return (
    <div className="rounded-2xl flex bg-[var(--type-white)] w-5xl h-[555px] rounded-r-2xl shadow-2xl">
      <LeftSide
        title="Seus Dados"
        subtitle="Acesse seus dados"
        buttonTitle="Login"
      />

      <div className="flex flex-col items-center text-black w-full p-12">
        <h1 className="text-4xl font-extrabold ">Seus Dados</h1>

        <h2></h2>
      </div>
    </div>
  );
};

export default Main;
