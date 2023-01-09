import React, { useContext } from "react";
import useDarkSide from "../Hooks/useDarkSide";

const DarkModeContext = React.createContext();

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw Error("useDarkMode must be used with a DarkModeProvider");
  }
  return context;
}

function DarkModeProvider({ children }) {
  const [colorTheme, setTheme] = useDarkSide();

  const toggleDarkMode = () => {
    setTheme(colorTheme);
  };

  return (
    <DarkModeContext.Provider value={{ toggleDarkMode, colorTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
}
export { DarkModeContext, DarkModeProvider };
