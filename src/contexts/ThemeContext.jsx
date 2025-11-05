import { Children } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ Children }) => {
  const saved = localStorage.getItem("theme");
  return saved || "light";
};
