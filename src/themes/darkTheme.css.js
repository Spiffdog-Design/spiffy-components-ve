// src/themes/darkTheme.css.js
import { createTheme } from '@vanilla-extract/css';
import { themeContract } from './themeContract.css';

export const darkTheme = createTheme(themeContract, {
  color: {
    background: '#1e1e1e',
    text: '#ffffff',
    primary: '#0d6efd',
  },
});