import React from 'react';

import GalleryItem from 'components/galleryItem/galleryItem';

import styles from './carsGallery.module.scss';

const CarsGallery = ({ arrayCars }) => {
  

  return (
    <ul className={styles.ImageGallery}>
      {arrayCars.map(car => (
        <GalleryItem key={car.id} car={car}></GalleryItem>
      ))}
    </ul>
  );
};

export default CarsGallery;
