const exerciseModel =  require("../module/exercise");

// Fetch all exercise

const getExercises = (async (req, res) => {
    const exercises = await exerciseModel.find({});
    try{
        res.json(exercises);
    }
    catch(err){ 
        res.send(err) 
    }
    
});

// Exercise fetch by id

const getExercise = (async (req,res) => {
    const exerciseId = req.params.exerciseID;
    
    try {
        const result = await exerciseModel.findById(exerciseId)
        res.json(result);
    }
    catch(err) {
        res.send(err)
    }
});

// Create exercise

const createExercise = (async (req, res) => {

    const exercise = exerciseModel(req.body);
    try {
        if(req.body.name != null){
            if(req.body.description != null){
                exercise.save()
                res.json(exercise);
            }
            res.json({field: "description" , message: "please added description to exercise"});
        }
        res.send("plaese added exercise name");
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
    const exercise = new exerciseModel({
        ...(req.body)
    })
    exercise.save().then(() => res.send("Exercise was added")).catch((err) => console.error(err))*/
});

// Delete by ID

const deleteExercise = (async(req, res) => {
    const exerciseId = req.params.exerciseID; 
    const  response = await exerciseModel.findByIdAndDelete(exerciseId);
    try {
        res.send(response);
    }
    catch(err) {
        res.send(err);
    }
    // try {
    //     res.send("Exercise deleted successfully")
    // }
    // catch (err) {
    //     console.error(err);
    // }

    // const exercises = await exerciseModel.find({})
    // try {
    //     res.json(exercises);
    // }
    // catch (err) {
    //     console.error(err);
    // }
});

// Update Exercise

const updateExercise = (async(req, res) => {
    const exerciseId = req.params.exerciseID;
    const updateExercise = req.body;
    try {
        const response = await exerciseModel.findByIdAndUpdate(exerciseId, updateExercise);
        res.json(response);
    }
    catch(err) {
        res.send(err);
    }
});

module.exports = { getExercises, getExercise, createExercise, deleteExercise, updateExercise };