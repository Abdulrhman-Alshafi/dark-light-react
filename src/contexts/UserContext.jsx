/* eslint-disable react-refresh/only-export-components */
import { Children, useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ Children }) => {
  const [user, setUser] = useState(null);

  const login = (name) => {
    setUser({ name });
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {Children}
    </UserContext.Provider>
  );
};
