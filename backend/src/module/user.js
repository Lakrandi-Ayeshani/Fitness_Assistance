const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
},{timestamps: true});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;