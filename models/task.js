const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },
  completed: {
    type:Boolean,
    // when we add a thing in a project, the completed part should be false
    default:false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
