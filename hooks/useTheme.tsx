import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "dark" | "light";

type ThemeContextData = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext({} as ThemeContextData);

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  function toggleTheme() {
    const isDark = theme === "dark";
    const newTheme = isDark ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  useEffect(() => {
    const themeStorage = localStorage.getItem("theme");

    if (themeStorage) {
      setTheme(themeStorage as Theme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error("ThemeContext must be used inside of a <ThemeProvider>.");

  return context;
};
