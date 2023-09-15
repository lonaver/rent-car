import { combineReducers } from 'redux';
import { carsReducer } from './carsSlice';

export const rootReducer = combineReducers({
  cars: carsReducer,
});
