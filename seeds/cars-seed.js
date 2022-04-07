const { Car } = require('../models');
const cars = require('./cars.json');

const carData = cars;

const seedCars = () => Car.bulkCreate(carData);

module.exports = seedCars;