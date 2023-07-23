const workoutModel =  require("../module/workout.js");

// Fetch all workout

const getWorkouts = (async (req, res) => {
    const workouts = await workoutModel.find({});
    try{
        res.json(workouts);
    }
    catch(err){ 
        res.send(err)
    }
    
});

// Workout fetch by id

const getWorkout = (async (req,res) => {
    const workoutId = req.params.workoutID;
    
    try {
        const result = await workoutModel.findById(workoutId)
        res.json(result);
    }
    catch(err) {
        res.send(err)
    }
});

// Create Workout

const createWorkout = (async (req, res) => {

    const workout = workoutModel(req.body);
    try {
        if(req.body.name != null){
            if(req.body.description != null){
                workout.save()
                res.json(workout);
            }
            res.json({field: "description" , message: "please added description to workout"});
        }
        res.send("plaese added workout name");
    }
    catch(err) {
        console.error(err, "hrttttttt");
    }
});

// Delete by ID

const deleteWorkout = (async(req, res) => {
    const workoutId = req.params.workoutID; 
    const  response = await workoutModel.findByIdAndDelete(workoutId);
    try {
        res.send(response);
    }
    catch(err) {
        res.send(err);
    }
});

// Update Workout

const updateWorkout = (async(req, res) => {
    const workoutId = req.params.workoutID;
    const updateWorkout = req.body;
    try {
        const response = await workoutModel.findByIdAndUpdate(workoutId, updateWorkout);
        res.json(response);
    }
    catch(err) {
        res.send(err);
    }
});

module.exports = { getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout };