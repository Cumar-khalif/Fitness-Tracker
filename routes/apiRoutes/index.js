const router = require('express').Router();
const Workout = require('../../models/workout.js')


// getLastWorkout
router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(result => {
        res.json(result);
    })
})

// getwourkoutrange
router.get("/api/workouts/range`", (req, res) => {

})

// addExercise ---> updating the Workout so that you insert a new Exercise into the workout
router.put("/api/workouts/:id", (req, res) => {

})

// creatework --> creating a new Workout
router.post("/api/workouts",(req, res) => {

})


module.exports = router;