import React, { useState } from 'react';
import { Button } from './components/Button/Button';
import { lightTheme } from './themes/lightTheme.css';
import { darkTheme } from './themes/darkTheme.css';

import { pageClass } from './App.css.js';

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const themeClass = darkMode ? darkTheme : lightTheme;

  return (
    <div className={themeClass}>
      <div className={pageClass}>
      <Button onClick={() => setDarkMode(mode => !mode)}>
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </Button>
      </div>
    </div>
  );
};
