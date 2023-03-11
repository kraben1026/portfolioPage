import { createContext } from 'react';
import { useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children, defaultTheme }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};