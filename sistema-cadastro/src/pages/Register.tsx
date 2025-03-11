import { EnvelopeSimple, Lock, UserPlus } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import LeftSide from "../components/LoginOrRegisterSide";
import { api } from "../lib/axios";
import { useNavigate } from "react-router-dom";

const registerformSchema = z.object({
  name: z.string().nonempty("O nome é obrigatório"),
  email: z
    .string()
    .nonempty("O email é obrigatório")
    .email("Formato de email inválido"),
  password: z.string().nonempty("A senha é obrigatória"),
});

type registerFormData = z.infer<typeof registerformSchema>;

const Register = () => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(registerformSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data: registerFormData) => {
    api.post("/users", data);
    navigate("/login");
  };

  return (
    <div className="rounded-2xl flex bg-[var(--type-white)] w-5xl h-[555px] rounded-r-2xl shadow-2xl">
      <LeftSide
        title="Cadastro"
        subtitle="Cadastre sua conta"
        buttonTitle="Login"
      />

      <div className="flex flex-col items-center text-black w-full p-12">
        <h1 className="text-4xl font-extrabold ">Crie sua conta</h1>
        <p className="text-lg font-semibold mt-2">Preencha o formulário</p>

        <form
          action="submit"
          className="flex justify-center flex-col items-center gap-6 mt-5 text-[#5d500a]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Nome"
              className="w-lg h-15 pl-13 rounded-2xl bg-[var(--primary-color)] shadow-[var(--custom-shadow)] text-[23px] font-bold outline-none"
              {...register("name")}
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
              {...register("email")}
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
              {...register("password")}
            />
            <Lock
              className="absolute top-5.5 left-6"
              size={20}
              weight="fill"
              color="#5d500a"
            />
          </div>
          <div className="flex justify-center rounded-[30px] w-[230px] h-18 cursor-pointer mt-auto mb-20 bg-[var(--secondary-color)] duration-300 ease-in-out">
            <button
              className="text-2xl font-bold leading-0 cursor-pointer text-white"
              type="submit"
            >
              CADASTRAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
