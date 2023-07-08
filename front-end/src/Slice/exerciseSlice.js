import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const exerciseURL = 'http://localhost:8000/api/exercise';

//  fetched All Exercise
export const fetchAllExercise = createAsyncThunk(
  'exercise/fetchAll',
  async () => {
    try {
      const response = await axios.get(exerciseURL);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
);

// fetched Exercise By ID
export const fetchExerciseById = createAsyncThunk(
  'exercise/fetchById',
  async (ID) => {
    const response = await axios.get(`${exerciseURL}/${ID}`);
    return response.data;
  }
);

// Delete exercise By ID
export const deleteById = createAsyncThunk(
  'exercise/deleteByID',
  async (ID) => {
    try {
      const response = await axios.delete(`${exerciseURL}/${ID}`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
);

// Add New Exercise
export const addExercise = createAsyncThunk(
  'exercise/addExercise',
  async (exerciseData) => {
    try {
      const response = await axios.post(exerciseURL, exerciseData);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
);

//Edit Exercise
export const editExercise = createAsyncThunk(
  'editExercise/editByID',
  async ({ data, ID }) => {
    try {
      const response = await axios.put(`${exerciseURL}/${ID}`, data);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
);

export const exerciseSlice = createSlice({
  name: 'exercise',
  initialState: {
    exercises: [],
    selectedExercise: null,
  },

  reducers: {
    AddExercise: (state, { payload }) => {
      state.exerciseName.push(payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAllExercise.fulfilled, (state, { payload }) => {
      console.log(`payload: ${payload}`);
      state.exercises = payload;
    });

    builder.addCase(deleteById.fulfilled, (state, action) => {
      // console.group("action meta values");
      // console.log(action.meta.arg);
      // console.log(action.meta.requestId);
      // console.groupEnd();
      state.exercises = state.exercises.filter(
        (exercise) => exercise._id !== action.meta.arg
      );
    });

    builder.addCase(addExercise.fulfilled, (state, { payload }) => {
      state.exercises = payload;
    });

    builder.addCase(fetchExerciseById.fulfilled, (state, { payload }) => {
      state.selectedExercise = payload;
    });
  },
});

export default exerciseSlice.reducer;
