const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
    name: {type: String, require: true},
    description: {type: String, require: true}
})

const exerciseModel = mongoose.model("exerciseData", exerciseSchema);
module.exports = exerciseModel;