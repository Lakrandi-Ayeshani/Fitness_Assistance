import { configureStore } from '@reduxjs/toolkit';
import exerciseSlice from '../Slice/exerciseSlice';

export const store = configureStore({
  reducer: {
    Exercise: exerciseSlice,
  },
});
