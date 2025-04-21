import { globalStyle, style } from '@vanilla-extract/css';
import { theme } from './themes/theme.css';

export const pageClass = style({
  minHeight: '100vh',
  height: '100%',
  backgroundColor: theme.colors.solid.base[1],
  color: theme.colors.solid.base[12],
  padding: 24,
  width: '100%',
});

globalStyle('*, *:after, *:before', {
  boxSizing: 'border-box',
});

globalStyle('html, body, #root', {
  margin: 0,
  padding: 0,
  minHeight: '100vh',
  height: '100%',
  width: '100%',
});