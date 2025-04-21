// src/themes/lightTheme.css.js
import { createTheme } from '@vanilla-extract/css';
import { themeContract } from './themeContract.css';

export const lightTheme = createTheme(themeContract, {
  color: {
    background: '#ffffff',
    text: '#000000',
    primary: '#007bff',
  },
});