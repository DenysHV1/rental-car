import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://car-rental-api.goit.global/";

const defaultQuery = {
  rentalPrice: "",
  minMileage: "",
  maxMileage: "",
  limit: 12,
  page: 1,
};

export const getCarsList = createAsyncThunk(
  "get/getCarsList",
  async (query = defaultQuery, thunkAPI) => {
    try {
      const params = {
        rentalPrice: query.rentalPrice ? query.rentalPrice : "",
        minMileage: query.minMileage ? query.minMileage : "",
        maxMileage: query.maxMileage ? query.maxMileage : "",
        limit: query.limit ? query.limit : 12,
        page: query.page ? query.page : 1,
      };

      const response = await axios.get(`${BASE_URL}cars/`, {params});

	  return response.data
	  
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
