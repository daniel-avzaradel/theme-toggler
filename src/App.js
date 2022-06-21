import { useState, createContext, useContext } from 'react';
import Form from './Form';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme((cur) => (cur === 'light' ? 'dark' : 'light'));
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Form />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
