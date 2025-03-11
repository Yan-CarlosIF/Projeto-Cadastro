import { useContext } from "react";
import LeftSide from "../components/LoginOrRegisterSide";
import { UserContext } from "../contexts/userContext";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

const UserDashboard = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div className="flex items-center justify-center text-black w-full h-full">
        <h1 className="text-4xl font-extrabold ">Usuário não logado</h1>
      </div>
    );
  }

  return (
    <div className="rounded-2xl flex bg-[var(--type-white)] w-5xl h-[555px] rounded-r-2xl shadow-2xl">
      <LeftSide
        title="Seus Dados"
        subtitle="Acesse seus dados"
        buttonTitle="Login"
      />

      <div className="flex flex-col items-center text-black w-full p-12">
        <h1 className="text-4xl font-extrabold">Seus Dados</h1>

        <Table className="mt-12 border-1 border-black">
          <TableCaption className="text-xl mt-5 text-black">
            Dados cadastados.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px] border-1 text-black border-black">
                ID
              </TableHead>
              <TableHead className="border-1 text-black border-black">
                Nome
              </TableHead>
              <TableHead className="border-1 text-black border-black">
                E-mail
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium text-lg border-1 border-black">
                {user.id}
              </TableCell>
              <TableCell className="font-medium text-lg border-1 border-black">
                {user.name}
              </TableCell>
              <TableCell className="font-medium text-lg border-1 border-black">
                {user.email}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserDashboard;
