// src/components/Button/Button.css.js
import { style } from '@vanilla-extract/css';
import { themeContract } from '../../themes/themeContract.css';

export const button = style({
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  fontWeight: 'bold',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: themeContract.color.primary,
  color: themeContract.color.text,
  transition: 'background-color 0.3s ease',
});