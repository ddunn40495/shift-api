const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
  date_start: { type: Date, required: true },
  date_end: { type: Date, required: true },
  day_1: {},
});

const Tasks = mongoose.model("Tasks", tasksSchema);

module.exports = Tasks;
