import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const exerciseURL = 'http://localhost:8000/api/exercise';
const headers = {
  'Content-type': 'application/json',
  'x-access-token': localStorage.getItem('token'),
};

//  fetched All Exercise
export const fetchAllExercise = createAsyncThunk(
  'exercise/fetchAll',
  async () => {
    try {
      const response = await axios.get(exerciseURL, { headers });
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
    const response = await axios.get(`${exerciseURL}/${ID}`, { headers });
    return response.data;
  }
);

// Delete exercise By ID
export const deleteById = createAsyncThunk(
  'exercise/deleteByID',
  async (ID) => {
    try {
      const response = await axios.delete(`${exerciseURL}/${ID}`, { headers });
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
      const response = await axios.post(exerciseURL, exerciseData, { headers });
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
      const response = await axios.put(`${exerciseURL}/${ID}`, data, {
        headers,
      });
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
