const { Model, DataTypes } = require('sequelize');
const { model } = require('../config/connection');
const sequelize = require('../config/connection');

//Car model configuration
class Car extends Model {}

Car.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Sedan: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    Sports: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    SUV: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    Wagon: {
      type: DataTypes.BOOLEAN,

      allowNull: false,
    },
    Minivan: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    Pickup: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    AWD: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    RWD: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    retail_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "car",
  }
);

module.exports = Car;