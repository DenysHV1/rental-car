import { useDispatch, useSelector } from "react-redux";
import { selectCarsList } from "../../redux/selectors.js";
import { useEffect } from "react";
import { getCarsList } from "../../redux/operations.js";

const CarsList = () => {
	const carsList = useSelector(selectCarsList);
	const dispatch = useDispatch()

console.log(carsList);

	useEffect(() => {
dispatch(getCarsList())
	}, [dispatch])
	
	return
}

export default CarsList;