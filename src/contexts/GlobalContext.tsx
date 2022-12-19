import { createContext, useContext, useState } from "react";
import useLocalStorage from "use-local-storage";

interface AppContextInterface {
  value: any;
  dark: string;
  toggleDark: () => void;
  favoriteVideo: any[];
  handleRemoveFavorite: () => void;
  setFavoriteVideo: React.Dispatch<React.SetStateAction<object[]>>;
  favorite: object[];
}

const defaultState = {
  dark: "light",
};
const GlobalContext = createContext<any | null>(
  defaultState as AppContextInterface
);

const GlobalProvider = (props: React.PropsWithChildren) => {
  const [dark, setDark] = useState("light");
  const [favorite, setFavorite] = useLocalStorage<object[]>("like", []);

  const [favoriteVideo, setFavoriteVideo] = useState<object[]>(favorite);

  const handleRemoveFavorite = (id: number) => {
    const arrUpdate = favorite.filter((item: any) => item.id !== id);

    setFavorite(arrUpdate);
    setFavoriteVideo(arrUpdate);
  };
  const toggleDark = () => {
    setDark((dark) => (dark === "dark" ? "light" : "dark"));
  };

  const value = {
    dark: dark,
    toggleDark: toggleDark,
    favoriteVideo,
    handleRemoveFavorite,
    setFavoriteVideo,
    favorite,
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
