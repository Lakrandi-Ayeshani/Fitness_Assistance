import { configureStore } from '@reduxjs/toolkit';
import exerciseSlice from '../slice/exerciseSlice';
import workoutSlice from '../slice/workoutSlice';
import userReducer from '../slice/authSlice';

export const store = configureStore({
  reducer: {
    Exercise: exerciseSlice,
    Workout: workoutSlice,
    auth: userReducer,
  },
});
