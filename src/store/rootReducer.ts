import { combineReducers } from '@reduxjs/toolkit';
import vendorsReducer from './vendors/vendorsSlice';

const rootReducer = combineReducers({
  vendors: vendorsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
