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
            autoIncrement:true
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        trim: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        retailPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'car'
    }
);

module.exports = Car;