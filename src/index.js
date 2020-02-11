require('dotenv').config({ path: 'variables.env' });

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require('cors');

const carsRoute = require("./routes/car.route");
const roomsRoute = require("./routes/room.route");

const verifyWebhook = require('./verify-webhook');
const messageWebhook = require('./message-webhook');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', verifyWebhook);
app.post('/', messageWebhook);

app.use("/api/rooms", roomsRoute);
app.use("/api/cars", carsRoute);

//connect to mongodb
mongoose
  .connect("mongodb://localhost/travelbuddy", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));

app.listen(5000, () => console.log('Express server is listening on port 5000'));
