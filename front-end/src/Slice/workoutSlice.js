import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const workoutURL = 'http://localhost:8000/api/workout';

//  fetched All Workout
export const fetchAllWorkout = createAsyncThunk(
  'workout/fetchAll',
  async () => {
    try {
      const response = await axios.get(workoutURL);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
);

// fetched workout By ID
export const fetchWorkoutById = createAsyncThunk(
  'workout/fetchById',
  async (ID) => {
    const response = await axios.get(`${workoutURL}/${ID}`);
    return response.data;
  }
);

// Delete workout By ID
export const deleteWorkoutById = createAsyncThunk(
  'workot/deleteByID',
  async (ID) => {
    try {
      const response = await axios.delete(`${workoutURL}/${ID}`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
);

// Add New Workout
export const addWorkout = createAsyncThunk(
  'workout/adddWorkout',
  async (workoutData) => {
    try {
      const response = await axios.post(workoutURL, workoutData);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
);

//Edit Workout
export const editWorkout = createAsyncThunk(
  'editWorkout/editByID',
  async ({ data, ID }) => {
    try {
      const response = await axios.put(`${workoutURL}/${ID}`, data);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
);

export const workoutSlice = createSlice({
  name: 'workout',
  initialState: {
    workouts: [],
    selectedWorkouts: null,
  },

  reducers: {
    AddWorkout: (state, { payload }) => {
      state.workoutName.push(payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAllWorkout.fulfilled, (state, { payload }) => {
      state.workouts = payload;
    });

    builder.addCase(deleteWorkoutById.fulfilled, (state, action) => {
      // console.group("action meta values");
      // console.log(action.meta.arg);
      // console.log(action.meta.requestId);
      // console.groupEnd();
      state.workouts = state.workouts.filter(
        (workout) => workout._id !== action.meta.arg
      );
    });

    builder.addCase(addWorkout.fulfilled, (state, { payload }) => {
      state.workouts = payload;
    });

    builder.addCase(fetchWorkoutById.fulfilled, (state, { payload }) => {
      state.selectedWorkouts = payload;
    });
  },
});

export default workoutSlice.reducer;
