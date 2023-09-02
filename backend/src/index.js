const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { exerciseRouter } = require("../src/routes/exercise.js");
const { workoutRouter } = require("../src/routes/workout.js");
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/exercise", exerciseRouter);
app.use("/api/workout", workoutRouter);

async function ConnectDB() {
    await mongoose.connect(process.env.MONGO_URL);
}

ConnectDB().then(()=> console.log("server connected to the mongo database")).catch((err) => console.error(`error: ${err}`))

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`App listen to port ${PORT}`);
})

