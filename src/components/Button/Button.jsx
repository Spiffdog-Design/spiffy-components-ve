// src/components/Button/Button.tsx
import React from 'react';
import * as styles from './Button.css';

export const Button = ({ ...props }) => {
  return (
    <button className={styles.button} {...props} />
  );
};