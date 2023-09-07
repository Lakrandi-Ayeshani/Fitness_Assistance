const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { exerciseRouter } = require("../src/routes/exercise.js");
const { workoutRouter } = require("../src/routes/workout.js");
const { registerRouter } =require("./routes/user.js")
require('dotenv').config();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken")


const app = express();

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(bodyParser.json(), urlencodedParser);
app.use(cors());

// const logReq = (req,res,next) => {
//     console.log("bihan");
//     next();
// }

// app.use(logReq);

const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"]?.split(' ')[1]

    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err) return res.json({
                isLoggedIn: false,
                message: "Failed to Authenticate"
            })
            req.user = {};
            req.user.id = decoded.id
            req.user.username = decoded.username
            next();
        })
    } else {
        res.json({message: "Incorrect Token Given", isLoggedIn: false})
    }
}

app.use("/user", registerRouter);
app.use("/api/exercise", verifyJWT, exerciseRouter);
app.use("/api/workout", workoutRouter);;


async function ConnectDB() {
    await mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});
}

ConnectDB().then(()=> console.log("server connected to the mongo database")).catch((err) => console.error(`error: ${err}`))

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`App listen to port ${PORT}`);
})

