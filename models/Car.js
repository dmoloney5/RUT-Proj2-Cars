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
    Year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Make: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Series: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Mileage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
      car_img: {
        type: DataTypes.STRING,
        allowNull: false
      },
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