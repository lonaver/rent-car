import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';

import styles from './loader.module.scss';

const Loader = () => {
  return (
    <div className={styles['loader-wrapper']}>
      <MagnifyingGlass
        visible={true}
        height="120"
        width="120"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
};

export default Loader;
