import { configureStore } from '@reduxjs/toolkit';
import exerciseSlice from '../Slice/exerciseSlice';
import workoutSlice from 'Slice/workoutSlice';

export const store = configureStore({
  reducer: {
    Exercise: exerciseSlice,
    Workout: workoutSlice,
  },
});
