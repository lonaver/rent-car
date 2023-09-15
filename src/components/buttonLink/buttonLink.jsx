import React from 'react';
import styles from './buttonLink.module.scss';

const ButtonLink = ({title }) => {
  return (
    <a href="tel:+380730000000" className={styles.link}>
      {title}
    </a>
  );
};

export default ButtonLink;