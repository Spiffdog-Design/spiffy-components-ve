// src/themes/themeContract.css.js
import { createThemeContract } from '@vanilla-extract/css';

export const themeContract = createThemeContract({
  color: {
    background: null,
    text: null,
    primary: null,
  },
});