const { Car } = require("../models/car.model");
CarService = {
    /**
     * Add book.
     * @param data
     * @return book 
     */
    async addCar (data) {

        car = new Car({
            name: data.name,
            type: data.type,
            date: data.date,
          });
        await car.save();        

        return car;
    },
    /**
     * Get All cars.
     * @return cars
     */
    async getAllCars() {
        const cars = await Car.find({});

        return cars;
    },
};

exports.CarService = CarService;