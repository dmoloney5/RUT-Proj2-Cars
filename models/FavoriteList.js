const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class FavoriteList extends Model {}

UserCarFavorite.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      reference: {
        model: "user",
        key: "id",
      },
    },
    car_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "car",
        key: "id",
      },
      car_img: {
        type: DataTypes.CHAR,
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user_car_favorite",
  }
);

module.exports = FavoriteList;