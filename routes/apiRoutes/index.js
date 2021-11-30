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
router.get("/api/workouts/range", (req, res) => {

    // aggregate sum of values
    const workOut = await Workout.aggregate()

    Workout.find({})
    .then(result => {
        res.json(result);
    })
})

// addExercise ---> updating the Workout so that you insert a new Exercise into the workout
router.put("/api/workouts/:id", async (req, res) => {
    const workOutID = req.params.id;
    console.log(workOutID);
    try {
      const workOutData = await Workout.findByIdAndUpdate(
          workOutID,
        {
            $push:{
                exercises: req.body
            }
        }
      );

      console.log(workOutData)
  
      if (!workOutData) {
        res.json({ message: "No Workout Found" });
      } else {
        res.json(workOutData);
      }
    } catch (err) {
      res.status(500).json(err);
    }
})

// creatework --> creating a new Workout
router.post("/api/workouts",(req, res) => {
    Workout.create({})
    .then(result => {
        res.json(result);
    })
})


module.exports = router;