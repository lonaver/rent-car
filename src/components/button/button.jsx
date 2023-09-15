import React from 'react';
import styles from './button.module.scss';

const Button = ({title, onClick }) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;