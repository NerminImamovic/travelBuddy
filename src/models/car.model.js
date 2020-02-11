const mongoose = require('mongoose');

//simple schema
const CarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true
  },
});

const Car = mongoose.model('Car', CarSchema);

exports.Car = Car; 
