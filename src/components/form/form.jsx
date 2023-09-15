import React from 'react';
import styles from './form.module.scss';

const Form = ({ onSubmit, brandCar, priceFilter }) => {
    return (
      <>
        <form autoComplete="off" onSubmit={onSubmit}>
          <div className={styles.form_wrapper}>
            <label className={styles.label}>
              Car brand
              <select name="brand" className={styles.select_brand}>
                <option value="" className={styles.text_placeholder}>
                  Enter the text
                </option>
                {brandCar.map((brand, idx) => (
                  <option
                    value={brand}
                    key={idx}
                    className={styles.text_select}
                  >
                    {brand}
                  </option>
                ))}
              </select>
            </label>
            <label className={styles.label}>
              Price/1 hour
              <select name="priceHour" className={styles.select_price}>
                <option value="" className={styles.text_placeholder}>
                  To $
                </option>
                {priceFilter.map((priceHour, idx) => (
                  <option
                    value={priceHour}
                    key={idx}
                    className={styles.text_select}
                  >
                    {priceHour}
                  </option>
                ))}
              </select>
            </label>

            <div className={styles.wrap_input}>
              <label htmlFor="input_start" className={styles.label}>
                Сar mileage / km
                <input
                  className={styles.input_start}
                  htmlFor="input_start"
                  type="number"
                  min="0"
                  max="999999"
                  autoComplete="off"
                  placeholder="From"
                  name="milageStart"
                />{' '}
              </label>
              <label htmlFor="input_end" className={styles.label_empty}>
                {' '}
                <input
                  className={styles.input_end}
                  htmlFor="input_end"
                  type="number"
                  min="0"
                  max="999999"
                  autoComplete="off"
                  placeholder="To"
                  name="milageEnd"
                />
              </label>
            </div>
            <button className={styles.btn_filter} type="submit">
              Search
            </button>
          </div>
        </form>
      </>
    );
};

export default Form;
