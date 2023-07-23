const express = require("express");
const router = express.Router();
const { 
    getWorkout,
    getWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require("../controllers/workout.js")

router.get('/', getWorkouts);

router.get('/:workoutID', getWorkout);

router.post('/',createWorkout);

router.delete('/:workoutID', deleteWorkout);

router.put('/:workoutID', updateWorkout);

module.exports = { workoutRouter : router }