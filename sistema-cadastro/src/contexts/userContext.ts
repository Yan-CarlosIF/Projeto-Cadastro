import { createContext } from "react";
import { User } from "../@types/user";

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  fetchUsers: () => Promise<User[]>;
}

export const UserContext = createContext({} as UserContextType);
