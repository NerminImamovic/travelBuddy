
const { RoomService } = require("../services/room.service");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {

  const rooms = await RoomService.getAllRooms();
  res.send(rooms);
});

router.post("/", async (req, res) => {

  data = {
    date: req.body.date,
    name: req.body.name,
    type: req.body.type,
    city: req.body.city,
  };
  room = await RoomService.addRoom(data);

  res.send(room);
});

module.exports = router;