import { useState } from "react";
import { UserContext } from "./userContext";
import { User } from "../@types/user";
import { api } from "../lib/axios";

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const fetchUsers = async () => {
    try {
      const response = await api.get("/users");
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, fetchUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
