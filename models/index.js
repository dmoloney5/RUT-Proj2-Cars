const User = require('./User');
const Car = require('./Car');
const UserCarFavorite = require('./UserCarFavorites');

// associations between users and cars 

// User.belongsToMany(Car, {
//     through: UserCarFavorite,
//     foreignKey:'user_id'
// });

// Car.belongsToMany(User, {
//     through: UserCarFavorite,
//     foreignKey:'car_id'
// });

User.hasMany(Car, {
    foreignKey: 'user_id'
});

Car.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Car, UserCarFavorite };