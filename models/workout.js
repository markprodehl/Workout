const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const workoutSchema = new Schema({
  day: {
    type: Date,
    //need to add something here
  },
  excersises: [{
    type: {
      type: String,
      trim: true,
      required: "Enter and excercise routine"
    },
    name: {
      type: String,
      trim: true,
      required: "Enter an exercise name"
    },
    duration: {
      type: Number,
      required: "Enter your workout time in minutes"
    },
    weight: {
      type: Number
    },
    reps: {
      type: Number
    },
    sets: {
      type: Number
    },
    distance: {
      type: Number
    }
  }]

})

const User = mongoose.model("workout", workoutSchema);
module.exports = User;