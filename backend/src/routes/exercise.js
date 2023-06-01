const express = require("express");
const exerciseModel =  require("../module/exercise");

const router = express.Router();

router.get("/exercise", async (req, res) => {
    const exercises = await exerciseModel.find({});
    try{
        res.json(exercises);
    }
    catch(err){ res.send(err)}
    
})

router.post("/exercise", async(req, res) => {

    const exercise = exerciseModel(req.body);
    console.log(exercise);
    try {
        if(req.body.name != null){
            if(req.body.description != null){
                exercise.save()
                res.json(exercise);
            }
            res.send("please added description to exercise")
        }
        res.send("plaese added exercise name")
    }
    catch(err) {
        console.error(err);
    }
    /*

    {
        success: true,

        9kv
        data: {},
        errors: []
    }

    // POST exercise
    {
        success: true,
        data: {
            _id: 1111,
            name: "name",
            description: "description"
        }
    }

    {
        success: false,
        data: {},
        errors: [
            {
                field: "name",
                message: "name is required"
            },
            {
                field: "description",
                message: "descr is required"
            }

        ]
    }
    */


    // const exercise = new exerciseModel({
    //     ...(req.body)
    // })

    // exercise.save().then(() => res.send("Exercise was added")).catch((err) => console.error(err))
})

module.exports = { exerciseRouter : router }