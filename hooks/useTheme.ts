import { ThemeContext } from "@/context/themeContextProvider";
import { useContext } from "react";

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme musy be used within a ThemeContextProvider");
  }

  return context;
}
