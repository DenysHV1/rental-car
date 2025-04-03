import s from "./CarElementLeftInfo.module.css";

const CarElementLeftInfo = ({ img, brand }) => {
  return (
    <div className={s.left_info}>
      <div className={s.img_container}>
        <img src={img} alt={brand} />
      </div>
      <div className={s.form_container}>
        <h2 className={s.form_title}>Book your car now</h2>
        <p className={s.form_text}>
          Stay connected! We are always ready to help you.
        </p>
        <form className={s.form}>
          <input className={s.input} type="text" placeholder="Name*" />
          <input className={s.input} type="email" placeholder="Email*" />
          <input className={s.input} type="date" placeholder="Booking date*" />
          <textarea className={s.textarea} placeholder="Comment" />
          <button className={s.button} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default CarElementLeftInfo;
