import { useEffect, useState } from 'react';
import CarsGallery from 'components/carsGallery/carsGallery';
import { priceFilter, carsFavoriteLS } from '../../constants/constants';
import brandCar from '../../makes.json';
import Form from 'components/form/form';

import styles from './FavoritePage.module.scss';

const FavoritePage = () => {
  const [favoriteCars, setFavoriteCars] = useState(
    JSON.parse(localStorage.getItem(carsFavoriteLS)) || []
  );

  useEffect(() => {
    const savedFavorites =
      JSON.parse(localStorage.getItem(carsFavoriteLS)) || [];
    setFavoriteCars(savedFavorites);
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const brandV = form.elements['brand'].value;
    const priceHourV = form.elements['priceHour'].value;
    const milageStartV = form.elements['milageStart'].value;
    const milageEndV = form.elements['milageEnd'].value;
    let visibleCar = [...favoriteCars];
    if (!brandV && !priceHourV && !milageStartV && !milageEndV) {
      const savedFavorites =
        JSON.parse(localStorage.getItem(carsFavoriteLS)) || [];
      setFavoriteCars(savedFavorites);
      return;
    }

    if (brandV) visibleCar = visibleCar.filter(el => el.make === brandV);
    if (Number(priceHourV) > 0) {
      visibleCar = visibleCar.filter(
        el => Number(el.rentalPrice.replace('$', '')) === Number(priceHourV)
      );
    }
    if (Number(milageStartV) > 0 && Number(milageEndV) === 0) {
      visibleCar = visibleCar.filter(
        el => Number(el.mileage) >= Number(milageStartV)
      );
    }
    if (Number(milageEndV) > 0 && Number(milageStartV) === 0) {
      visibleCar = visibleCar.filter(
        el => Number(el.mileage) <= Number(milageEndV)
      );
    }

    if (Number(milageStartV) > 0 && Number(milageEndV) > 0) {
      visibleCar = visibleCar.filter(
        el =>
          Number(el.mileage) >= Number(milageStartV) &&
          Number(el.mileage) <= Number(milageEndV)
      );
    }
    setFavoriteCars(visibleCar);
  };

  return (
    <div className={styles.car_container}>
      <Form
        onSubmit={onSubmit}
        brandCar={brandCar}
        priceFilter={priceFilter}
      ></Form>
      {favoriteCars.length > 0 ? (
        <CarsGallery arrayCars={favoriteCars}></CarsGallery>
      ) : (
        <h2>You don`t have favorites car</h2>
      )}
    </div>
  );
};

export default FavoritePage;
