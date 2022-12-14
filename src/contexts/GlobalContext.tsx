import { createContext, useContext, FC, useState } from "react";

interface AppContextInterface {
  value: any;
  dark: string;
  toggleDark: () => void;
}

const defaultState = {
  dark: "light",
};
const GlobalContext = createContext<any | null>(
  defaultState as AppContextInterface
);

const GlobalProvider = (props: React.PropsWithChildren) => {
  const [dark, setDark] = useState("light");
  const toggleDark = () => {
    setDark((dark) => (dark === "dark" ? "light" : "dark"));
  };
  const value = {
    dark: dark,
    toggleDark: toggleDark,
  } as AppContextInterface;
  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (typeof GlobalContext == "undefined") throw new Error("error");
  return context;
};
export { useGlobalContext, GlobalProvider };
