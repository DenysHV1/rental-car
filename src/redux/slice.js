import { createSlice } from "@reduxjs/toolkit";
import { getCarsList } from "./operations.js";

const initialState = {
  carsList: [],
  carListQuery: null,
  totalPages: 1,
  isLoading: false,
  errorMessage: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.errorMessage = null;
};

const handleRejected = (state, { payload }) => {
  state.errorMessage = payload;
  state.isLoading = false;
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCarsList.pending, handlePending)
      .addCase(getCarsList.rejected, handleRejected)
      .addCase(getCarsList.fulfilled, (state, { payload }) => {
        state.carListQuery = payload.query;
        state.totalPages = payload.obj.totalPages;
        state.isLoading = false;

        if (payload.query.page === 1) {
          state.carsList = payload.obj.cars;
        } else {
          const uniqueCars = payload.obj.cars.filter(
            (newCar) => !state.carsList.some((car) => car.id === newCar.id)
          );
          state.carsList = [...state.carsList, ...uniqueCars];
        }
      });
  },
});

export default carsSlice.reducer;
