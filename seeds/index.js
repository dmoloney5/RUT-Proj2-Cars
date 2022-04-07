//const seedCars = require("./cars.json");

const seedCars = require('./cars-seed');

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedCars();
  await seedUsers();
  process.exit(0);
};

seedAll();
