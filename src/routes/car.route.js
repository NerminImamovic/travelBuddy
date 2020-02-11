
const { CarService } = require("../services/car.service");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {

  const cars = await CarService.getAllCars();
  res.send(cars);
});

router.post("/", async (req, res) => {

  data = {
    date: req.body.date,
    name: req.body.name,
    type: req.body.type,
  };
  car = await CarService.addCar(data);

  res.send(car);
});

module.exports = router;