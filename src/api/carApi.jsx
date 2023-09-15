import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65007db718c34dee0cd50036.mockapi.io/advert';

export const fetchCars = createAsyncThunk('catalog', async (_, thunkAPI) => {
  try {
    const res = await axios.get('');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});




