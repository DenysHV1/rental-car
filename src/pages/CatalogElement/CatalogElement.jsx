import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCarById } from "../../redux/operations";
import { useEffect } from "react";
import { selectCar } from "../../redux/selectors.js";
import CarElementLeftInfo from "../../components/CarElementLeftInfo/CarElementLeftInfo.jsx";
import CarElementRightInfo from "../../components/CarElementRightInfo/CarElementRightInfo.jsx";
import s from "./CatalogElement.module.css";

const CatalogElement = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector(selectCar);

  useEffect(() => {
    dispatch(getCarById(id));
  }, [dispatch, id]);

  const { brand, img } = car;

  return (
    <section className={s.catalog_element}>
      <CarElementLeftInfo img={img} brand={brand} />
      <CarElementRightInfo car={car} />
    </section>
  );
};

export default CatalogElement;
