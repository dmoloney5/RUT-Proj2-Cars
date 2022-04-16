const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class FavoriteList extends Model {}

<<<<<<< HEAD:models/FavoriteList.js
FavoriteList.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'user',
                key: 'id'
            }
        },
        car_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'car',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'favorite_list'
    }
=======
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
>>>>>>> adf89b7e4f1db2dc6c0a9ad2e30ba4be17f27ae0:models/UserCarFavorites.js
);

module.exports = FavoriteList;