import React from 'react';
import Modal from 'components/modal/modal';
import styles from './galleryItem.module.scss';
import { useState, useEffect } from 'react';
import ButtonFavorite from 'components/buttonFavorite/buttonFavorite';
import {  carsFavoriteLS } from '../../constants/constants';

const GalleryItem = ({ car, onChangeFavorites}) => {
  const {
    id,
    make,
    model,
    year,
    type,
    img,
    rentalPrice,
    rentalCompany,
    functionalities,
    address,
  } = car;
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };
  const openModal = e => {
    e.preventDefault();
    setShowModal(true);
  };

  const [favorite, setFavorite] = useState(false);

  const handleBackDropClick = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      closeModal();
    }
  };
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleFavorite = async idCar => {
    const savedFavorites =
      JSON.parse(localStorage.getItem(carsFavoriteLS)) || [];
    const isFavorite = savedFavorites.some(car => car.id === idCar);

    if (!isFavorite) {
      const newCar = { ...car };
      const newFavorites = [...savedFavorites, newCar];

      localStorage.setItem(carsFavoriteLS, JSON.stringify(newFavorites));
      onChangeFavorites(newFavorites);
    } else {
      const updatedFavorites = savedFavorites.filter(car => car.id !== idCar);
      localStorage.setItem(carsFavoriteLS, JSON.stringify(updatedFavorites));
      onChangeFavorites(updatedFavorites);
    }
    setFavorite(!isFavorite);
  };

  useEffect(() => {
    const savedFavorites =
      JSON.parse(localStorage.getItem(carsFavoriteLS)) || [];

    const isFavorite = savedFavorites.some(car => car.id === id);
    setFavorite(isFavorite);
  }, [id]);

  const arrayAddress = address.split(', ');
  const town = arrayAddress[arrayAddress.length - 1];
  const country = arrayAddress[arrayAddress.length - 2];
  const funcTwoWords = functionalities[0].split(' ')[0];

  return (
    <li key={id} className={styles.card_car}>
      <div className={styles.wrap_button_fav}>
        <ButtonFavorite
          onClick={() => handleFavorite(id)}
          favorite={favorite}
        ></ButtonFavorite>
      </div>
      <div className={styles.container_img}>
        <img src={img} alt={model} />
      </div>
      <div className={styles.wrapper_text}>
        <div className={styles.wrap_subtitle}>
          <p className={styles.subtitle}>
            {make} <span>{model}</span>, {year}
          </p>
          <p>{rentalPrice}</p>
        </div>
        <ul className={styles.options}>
          <li>{town}</li>
          <li>{country}</li>
          <li>{rentalCompany}</li>
          <li>{type}</li>
          <li>{model}</li>
          <li>{id}</li>
          <li>{funcTwoWords}</li>
        </ul>
      </div>
      <button type="button" onClick={openModal} className={styles.button_card}>
        Learn more
      </button>
      {showModal && (
        <Modal key={id} onClose={handleBackDropClick} carCard={car}></Modal>
      )}
    </li>
  );
};

export default GalleryItem;