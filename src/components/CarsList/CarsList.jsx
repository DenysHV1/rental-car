import { useDispatch, useSelector } from "react-redux";
import {
  selectCarListQuery,
  selectCarsList,
  selectError,
  selectLoading,
  selectTotalPages,
} from "../../redux/selectors.js";
import { useEffect, useState } from "react";
import { getCarsList } from "../../redux/operations.js";
import Loader from "../Loader/Loader.jsx";
import CarListItem from "../CarItem/CarListItem.jsx";
import s from "./CarsList.module.css";

const CarsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const carsList = useSelector(selectCarsList);
  const isLoading = useSelector(selectLoading);
  const errorMessage = useSelector(selectError);
  const carListQuery = useSelector(selectCarListQuery);
  const totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarsList());
  }, [dispatch]);

  const handleLoadMore = () => {
    setCurrentPage((prev) => {
      const nextPage = prev + 1;
      if (nextPage <= totalPages) {
        dispatch(getCarsList({ ...carListQuery, page: nextPage }));
      }
      console.log(currentPage);
      console.log(totalPages);

      return nextPage;
    });
  };

  const handleHideCars = () => {
    setCurrentPage(1);
    dispatch(getCarsList({ ...carListQuery, page: 1 }));
  };

  return (
    <section>
      <ul className={s.list}>
        {!isLoading ? (
          !errorMessage ? (
            <>
              {carsList.length > 0 ? (
                <>
                  {carsList.map((item) => (
                    <CarListItem key={item.id} data={item} />
                  ))}
                </>
              ) : (
                <li>We don't have any cars matching this request!</li>
              )}
            </>
          ) : (
            <li>{errorMessage}</li>
          )
        ) : (
          <Loader />
        )}
      </ul>
      {currentPage < totalPages ? (
        <button type="button" className={s.btn} onClick={handleLoadMore}>
          Load more
        </button>
      ) : (
        <button type="button" className={s.btn} onClick={handleHideCars}>
          Hide
        </button>
      )}
    </section>
  );
};

export default CarsList;
