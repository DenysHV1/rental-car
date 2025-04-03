import { Formik, Form, Field } from 'formik';
import { brands } from '../../data/brands';
import s from './FilterCars.module.css';
import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCarsList } from '../../redux/operations.js';

const FilterCars = () => {
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const brandRef = useRef(null);
  const priceRef = useRef(null);
  const dispatch = useDispatch();

  const initialValues = {
    brand: 'BMW',
    rentalPrice: '10',
    minMileage: '',
    maxMileage: ''
  };

  const handleSubmit = (values) => {
    // const hasChanges = Object.keys(values).some(key => {
    //   if (key === 'minMileage' || key === 'maxMileage') {
    //     return values[key] !== '';
    //   }
    //   return values[key] !== initialValues[key];
    // });

    // if (!hasChanges) {
    //   return;
    // }

    dispatch(getCarsList({...values, page: 1, limit: 12}));
  };

  const priceOptions = [...Array(8)].map((_, i) => (i + 1) * 10);

  const handleBrandClick = () => {
    setIsBrandOpen(!isBrandOpen);
    setIsPriceOpen(false);
  };

  const handlePriceClick = () => {
    setIsPriceOpen(!isPriceOpen);
    setIsBrandOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (brandRef.current && !brandRef.current.contains(event.target)) {
        setIsBrandOpen(false);
      }
      if (priceRef.current && !priceRef.current.contains(event.target)) {
        setIsPriceOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={s.container}>
      <Formik 
        initialValues={initialValues} 
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, setFieldValue }) => (
          <Form className={s.form}>
            <div className={s.select_wrapper} ref={brandRef}>
              <p className={s.label}>Car brand</p>
              <div 
                className={`${s.select} ${isBrandOpen ? s.select_open : ''}`}
                onClick={handleBrandClick}
              >
                {values.brand}
              </div>
              {isBrandOpen && (
                <ul className={s.dropdown}>
                  <div className={s.dropdown_list}>
                    {brands.map((brand) => (
                      <li 
                        key={brand} 
                        className={s.option}
                        onClick={() => {
                          setFieldValue('brand', brand);
                          setIsBrandOpen(false);
                        }}
                      >
                        {brand}
                      </li>
                    ))}
                  </div>
                </ul>
              )}
            </div>

            <div className={s.select_wrapper} ref={priceRef}>
              <p className={s.label}>Price/ 1 hour</p>
              <div 
                className={`${s.select} ${isPriceOpen ? s.select_open : ''}`}
                onClick={handlePriceClick}
              >
                To ${values.rentalPrice}
              </div>
              {isPriceOpen && (
                <ul className={s.dropdown}>
                  <div className={s.dropdown_list}>
                    {priceOptions.map((price) => (
                      <li 
                        key={price} 
                        className={s.option}
                        onClick={() => {
                          setFieldValue('rentalPrice', price);
                          setIsPriceOpen(false);
                        }}
                      >
                        {price}
                      </li>
                    ))}
                  </div>
                </ul>
              )}
            </div>

            <div className={s.input_group}>
              <p className={s.label}>Сar mileage / km</p>
              <div className={s.inputs_wrapper}>
                <Field
                  type="number"
                  name="minMileage"
                  placeholder="From 3,000"
                  className={s.input}
                />
                <Field
                  type="number"
                  name="maxMileage"
                  placeholder="To 5,500"
                  className={s.input}
                />
              </div>
            </div>

            <button type="submit" className={s.button}>
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FilterCars;


