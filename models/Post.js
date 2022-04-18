// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// class Post extends Model {}

// Post.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     cars: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     retail_price: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "user",
//         key: "id",
//       },
//       car_img: {
//         type: DataTypes.STRING,
//         allowNull: false
//       },
//     },
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "post",
//   }
// );

// module.exports = Post;
