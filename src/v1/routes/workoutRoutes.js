const express = require("express");
const { createNewWorkout, getAllWorkouts, getOneWorkout, deleteOneWorkout, updateOneWorkout } = require("../../controllers/workoutControllers")
const router = express.Router();


router
    .get("/", getAllWorkouts)

    .get("/:workoutId", getOneWorkout)

    .post("/", createNewWorkout)

    .patch("/:workoutId", updateOneWorkout)

    .delete("/:workoutId", deleteOneWorkout)

module.exports = router;