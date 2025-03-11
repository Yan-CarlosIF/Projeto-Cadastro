import { EnvelopeSimple, Lock } from "phosphor-react";
import LeftSide from "../components/LoginOrRegisterSide";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../lib/axios";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

const loginFormSchema = z.object({
  email: z
    .string()
    .nonempty("O email é obrigatório")
    .email("Formato de email inválido"),
  password: z.string().nonempty("A senha é obrigatória"),
});

type loginFormData = z.infer<typeof loginFormSchema>;

const Login = () => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(loginFormSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data: loginFormData) => {
    try {
      const result = await api.get(`/users`);

      const user = result.data.find((user: User) => {
        return user.email === data.email && user.password === data.password;
      });

      console.log(user);

      if (user) {
        navigate("/main");
      }
    } catch {
      console.log("erro");
    }
  };

  return (
    <div className="rounded-2xl flex bg-[var(--type-white)] w-5xl h-[555px] rounded-r-2xl shadow-2xl">
      <LeftSide
        title="Login"
        subtitle="Acesse sua conta"
        buttonTitle="Cadastrar"
      />

      <div className="flex flex-col items-center text-black w-full p-12">
        <h1 className="text-4xl font-extrabold ">Faça login</h1>
        <p className="text-lg font-semibold mt-2">Preencha o formulário</p>

        <form
          action="submit"
          className="flex justify-center flex-col items-center gap-8 mt-16 text-[#5d500a]"
          onSubmit={handleSubmit(onSubmit)}
        >
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
              className="w-lg h-15 pl-13 rounded-2xl bg-[var(--primary-color)] shadow-[var(--custom-shadow)] mb-8 text-[23px] font-bold outline-none"
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
              ENTRAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
