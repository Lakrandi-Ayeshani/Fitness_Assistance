const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema(
    {
        name: {type: String, require: true},
        description: {type: String, require: true}
    }
)

const workoutModel = mongoose.model("workoutData", workoutSchema);

module.exports = workoutModel;