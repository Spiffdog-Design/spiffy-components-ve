import React, { useState } from 'react';
import { Button } from './components/Button/Button';
import { lightTheme } from './themes/lightTheme.css';
import { darkTheme } from './themes/darkTheme.css';

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const themeClass = darkMode ? darkTheme : lightTheme;

  return (
    <div className={themeClass} style={{ padding: '2rem', backgroundColor: 'var(--color-background)', color: 'var(--color-text)', minHeight: '100vh' }}>
      <h1>Themed Component Library</h1>
      <Button onClick={() => setDarkMode(!darkMode)}>
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </Button>
    </div>
  );
};