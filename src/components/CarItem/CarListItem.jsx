import { Link } from "react-router-dom";
import s from "./CarListItem.module.css";

export const CarListItem = ({ data }) => {
  const {
    id,
    year,
    type,
    rentalPrice,
    rentalCompany,
    mileage,
    img,
    address,
    brand,
    model,
  } = data;

  const updateAddress = (addressInner) => {
    const addressArr = addressInner.split(" ").slice(3, 5);

    const firstElement = addressArr[0]
      .split("")
      .filter((item) => item !== ",")
      .join("");

    return `${firstElement}  |  ${addressArr[1]}`;
  };

  return (
    <li className={s.car_item}>
      <div className={s.img_container}>
        <img className={s.img} src={img} alt={brand} />
      </div>
      <div className={s.top_info_block}>
        <h2 className={s.car_name}>
          {brand} <span>{model}</span>, {year}
        </h2>
        <p className={s.price}>${rentalPrice}</p>
      </div>
      <div className={s.center_block}>
        <p>{updateAddress(address)}</p>|<p>{rentalCompany}</p> |
      </div>
      <div className={`${s.center_block} ${s.bottom_block}`}>
        <p>{type}</p>|<p>{mileage} km</p>
      </div>
      <Link className={s.link} to={`/catalog/${id}`}>Read more</Link>
    </li>
  );
};

export default CarListItem;
