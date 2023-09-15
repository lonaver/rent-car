import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCars } from '../api/carApi';

const handlePending = state => {
  state.catalog = { ...state.catalog, isLoading: true };
};

const handleFulfild = state => {
  state.catalog = {
    ...state.catalog,
    isLoading: false,
    error: null,
  };
};
const handleFulfildGet = (state, { payload }) => {
  state.catalog = {
    ...state.catalog,
    items:payload,
  };
};


const handleRejected = (state, { payload }) => {
  state.catalog = {
    ...state.catalog,
    isLoading: false,
    error: payload,
  };
};
const initialState = {
  catalog: {
    items: [],
    isLoading: false,
    error: null,
  },
};

export const carsSlice = createSlice({
  name: 'catalog',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchCars.fulfilled, handleFulfildGet)
      .addMatcher(isAnyOf(fetchCars.pending), handlePending)
      .addMatcher(isAnyOf(fetchCars.rejected), handleRejected)
      .addMatcher(isAnyOf(fetchCars.fulfilled), handleFulfild);
  },
});

export const carsReducer = carsSlice.reducer;
