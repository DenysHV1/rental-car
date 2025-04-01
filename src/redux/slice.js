import { createSlice } from "@reduxjs/toolkit";
import { getCarsList } from "./operations.js";

const initialState = {
  carsList: [],
  car: null,
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
  state.carsList = [];
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCarsList.pending, handlePending)
      .addCase(getCarsList.rejected, handleRejected)
      .addCase(getCarsList.fulfilled, (state, { payload }) => {
        if(payload.query !== 1){
          const uniqueCars = payload.obj.cars.filter(
            (newCar) => !state.carsList.find((car) => car.id === newCar.id)
          );
  
          state.carsList = [...state.carsList, ...uniqueCars];
          return
        }
        state.carsList = payload.obj.cars;
        state.isLoading = false;
      });
  },
});

export default carsSlice.reducer;
