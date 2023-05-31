const express = require("express");
const exerciseModel =  require("../module/exercise");

const router = express.Router();

router.post("/add", async(req, res) => {

    const exercise = exerciseModel(req.body);
    console.log(exercise);    try {
        if(req.body.name != null){
            if(req.body.description != null){
                exercise.save()
                res.send("exercise added succesfully")
            }
            res.send("please added description to exercise")
        }
        res.send("plaese added exercise name")
    }
    catch(err) {
        console.error(err);
    }
    // const exercise = new exerciseModel({
    //     ...(req.body)
    // })

    // exercise.save().then(() => res.send("Exercise was added")).catch((err) => console.error(err))
c
})

module.exports = { exerciseRouter : router }