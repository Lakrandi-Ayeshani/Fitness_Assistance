const express = require("express");
const router = express.Router();
const {
    getExercises,
    getExercise,
    createExercise,
    deleteExercise,
    updateExercise
} = require('../controllers/exercise');

router.get('/', getExercises);

router.get('/:exerciseID', getExercise);

router.post('/',createExercise);

router.delete('/:exerciseID', deleteExercise);

router.put('/:exerciseID', updateExercise)

module.exports = { exerciseRouter : router }