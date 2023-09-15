import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCars } from '../../redux/selectors';
import { fetchCars } from '../../api/carApi';
import Loader from 'components/loader/loader';
import CarsGallery from 'components/carsGallery/carsGallery';
import Button from 'components/button/button';
import Form from 'components/form/form';
import { priceFilter } from '../../constants/constants';
import brandCar from '../../makes.json';
import styles from './Cars.module.scss';
import toast, { Toaster } from 'react-hot-toast';

const Cars = () => {
  const [numberPage, setNumberPage] = useState(1);
  const [dataCars, setDataCars] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector(getCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);


  useEffect(() => {
    setDataCars(items);
    setVisibleItems(items.slice(0, numberPage * 8));
  }, [numberPage, items]);

  const onAddMore = () => {
    setNumberPage(prevNumberPage => prevNumberPage + 1);
  };

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const brandV = form.elements['brand'].value;
    const priceHourV = form.elements['priceHour'].value;
    const milageStartV = form.elements['milageStart'].value;
    const milageEndV = form.elements['milageEnd'].value;
    let visibleCar = [...items];
    if (!brandV && !priceHourV && !milageStartV && !milageEndV) {
      setVisibleItems(visibleCar.slice(0, 7));
      setDataCars(visibleCar);

      return;
    }
    if (Number(milageStartV) > 0 && Number(milageEndV) > 0) {
      if (Number(milageStartV) > Number(milageEndV)) {
        toast.error("value FROM < then value TO");
        setVisibleItems(visibleCar.slice(0, 7));
        setDataCars(visibleCar);

        return;
      }
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
      if (Number(milageStartV) > Number(milageEndV)) toast.error("value FROM < then value TO");
      visibleCar = visibleCar.filter(
        el =>
          Number(el.mileage) >= Number(milageStartV) &&
          Number(el.mileage) <= Number(milageEndV)
      );
    }
    setVisibleItems(visibleCar.slice(0, 7));
    setDataCars(visibleCar);
  };
  const isAddMore = dataCars.length > visibleItems.length && !isLoading;
  const isEmpty = visibleItems.length===0 && !isLoading;

  return (
    <div className={styles.car_container}>
      <div>
        <Toaster />
      </div>
      <Form
        onSubmit={onSubmit}
        brandCar={brandCar}
        priceFilter={priceFilter}
      ></Form>
      {isLoading && <Loader></Loader>}
      {isEmpty ?<h2 className={styles.not_found}>Nothing found...</h2> : <CarsGallery arrayCars={visibleItems}></CarsGallery>}
      {isAddMore && <Button title={'Load more'} onClick={onAddMore}></Button>}
    </div>
  );
};

export default Cars;
