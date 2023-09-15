import { createPortal } from 'react-dom';
import styles from './modal.module.scss';
import iconClose from '../../img/close.svg';
import ButtonLink from 'components/buttonLink/buttonLink';

const modalRoot = document.getElementById('modal-root');
const Modal = ({ carCard, onClose }) => {
  const {
    id,
    make,
    model,
    year,
    type,
    img,
    description,
    rentalPrice,
    rentalCompany,
    mileage,
    functionalities,
    address,
    rentalConditions,
    } = carCard;
    

    const arrayAddress = address.split(', ');
    const town = arrayAddress[arrayAddress.length - 1];
    const country = arrayAddress[arrayAddress.length - 2];
    const arrayConditions = rentalConditions.split(/\r\n|\r|\n/g);
    const ageRent = arrayConditions[0];
    
    function numberWithSpaces(mileage) {
      return mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    const newMileage = numberWithSpaces(mileage);
    
  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal}>
        <button type="button" onClick={onClose} className={styles.close_btn}>
          <img
            className={styles.close}
            src={iconClose}
            alt="Icon close"
            onClick={onClose}
          />
        </button>
        <div className={styles.card_car}>
          <div className={styles.wrap_button_fav}></div>
          <div className={styles.container_img}>
            <img src={img} alt={model} />
          </div>
          <div className={styles.wrapper_text}>
            <div className={styles.wrap_subtitle}>
              <p className={styles.subtitle}>
                {make} <span>{model}</span>, {year}
              </p>
            </div>
            <ul className={styles.options}>
              <li>{town}</li>
              <li>{country}</li>
              <li>{rentalCompany}</li>
              {/* <li>{}</li> */}
              <li>{type}</li>
              <li>{model}</li>
              <li>{id}</li>
            </ul>

            <p className={styles.description_subtitle}>{description}</p>
            <h3 className={styles.description}>
              Accessories and functionalities:
            </h3>
            <ul className={styles.options_func}>
              {functionalities.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
            <h3 className={styles.description_subtitle}>Rental Conditions: </h3>
            <div className={styles.wrap_options_rent}>
              <ul className={styles.options_rent_array}>
                {arrayConditions.map((el, index) =>
                  index === 0 ? (
                    <li>
                      {ageRent.slice(0, ageRent.length - 2)}{' '}
                      <span>
                        {ageRent.slice(ageRent.length - 2, ageRent.length)}
                      </span>
                    </li>
                  ) : (
                    <li key={index}>{el}</li>
                  )
                )}
              </ul>
              <p className={styles.options_rent}>
                mileage: <span>{newMileage}</span>
              </p>
              <p className={styles.options_rent}>
                price: <span>{rentalPrice}</span>
              </p>
            </div>
          </div>
          <ButtonLink title={'Rental car'}></ButtonLink>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
