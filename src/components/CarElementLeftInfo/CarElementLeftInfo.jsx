import toast, { Toaster } from "react-hot-toast";
import s from "./CarElementLeftInfo.module.css";
import { useState } from "react";

const CarElementLeftInfo = ({ img, brand }) => {
  const [dateShow, setDateShow] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, date, comment } = e.target.elements;
    const currentDate = new Date();
    const selectedDate = new Date(date.value);

    if (selectedDate < currentDate) {
      toast.error("Date must be in the future");
      return;
    }

    if (name.value.trim() === "") {
      toast.error("Name is required");
      return;
    }

    if (email.value.trim() === "") {
      toast.error("Email is required");
      return;
    }

    if (date.value.trim() === "") {
      toast.error("Date is required");
      return;
    }

    console.log(name.value, email.value, date.value, comment.value);
    toast.success("Booking successful");
  };

  const handleDateShow = () => {
    setDateShow(false);
  };

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
        <form className={s.form} onSubmit={handleSubmit}>
          <input
            className={s.input}
            type="text"
            name="name"
            placeholder="Name*"
            maxLength={30}
          />
          <input
            className={s.input}
            type="email"
            name="email"
            placeholder="Email*"
            maxLength={50}
          />
          <div className={s.date_wrapper}>
            <input
              className={`${s.input} ${s.date_input}`}
              type="date"
              name="date"
            />
            {dateShow && (
              <span onClick={handleDateShow} className={s.date_placeholder}>
                Booking date
              </span>
            )}
          </div>

          <textarea
            className={s.textarea}
            name="comment"
            placeholder="Comment"
          />
          <button className={s.button} type="submit">
            Send
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default CarElementLeftInfo;
