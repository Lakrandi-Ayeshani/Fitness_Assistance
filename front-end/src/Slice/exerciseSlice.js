import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const exerciseURL = "http://localhost:8000/api/exercise";

export const fetchAllExercise = createAsyncThunk("exercise/fetchAll",async() => {
        try {
            const response = await axios.get(exerciseURL)
            return response.data;
        }
        catch (err) {
            console.error(err)
        }    
});

export const deleteById = createAsyncThunk("exercise/deleteByID", async(ID) => {
    try {
        const response = await axios.delete(`${exerciseURL}/${ID}`);
        return response.data;
    }
    catch (err) {
        console.error(err);
    }
})

export const exerciseSlice = createSlice({
    name: "exercise",
    initialState: {
        exercises: [],
    },

    reducers : {
        AddExercise: (state, {payload}) => {
            state.exerciseName.push(payload);
        },

    },

    extraReducers: (builder) => {

        builder.addCase(fetchAllExercise.fulfilled, (state, { payload }) => {
            console.log(`payload: ${payload}`)
            state.exercises = payload;
        });

        builder.addCase(deleteById.fulfilled, (state, action) => {
            // console.group("action meta values");
            // console.log(action.meta.arg);
            // console.log(action.meta.requestId);
            // console.groupEnd();
            state.exercises = state.exercises.filter((exercise) => exercise._id !== action.meta.arg );
        })
    }

})

export default exerciseSlice.reducer;
