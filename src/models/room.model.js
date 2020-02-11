const mongoose = require('mongoose');

//simple schema
const RoomSchema = new mongoose.Schema({
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
  city: {
    type: String,
    required: true,
  },
});

const Room = mongoose.model('Room', RoomSchema);

exports.Room = Room; 
