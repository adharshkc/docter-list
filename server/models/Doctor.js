const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  specialization: String,
  qualification: String,
  mobile: String,
  registerNumber: String,
});

const doctor = mongoose.model("Doctor", doctorSchema);
module.exports = doctor