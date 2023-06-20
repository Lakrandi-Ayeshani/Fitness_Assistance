import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllExercise = createAsyncThunk("/exercise",async() => {
        try {
            const response = await axios.get("http://localhost:8000/api/exercise")
            return response.data;
        }
        catch (err) {
            console.error(err)
        }    
});

export const DeleteById = createAsyncThunk("/exercise/:ID", async(ID) => {
    try {
        const response = await axios.delete(`http://localhost:8000/api/exercise/${ID}`);
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

        builder.addCase(DeleteById.fulfilled, (state, action) => {
            // console.group("action meta values");
            // console.log(action.meta.arg);
            // console.log(action.meta.requestId);
            // console.groupEnd();
            state.exercises = state.exercises.filter((exercise) => exercise._id !== action.meta.arg );
        })
    }

})

export default exerciseSlice.reducer;