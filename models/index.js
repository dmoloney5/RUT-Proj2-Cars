const User = require('./User');
const Car = require('./Car');
const FavoriteList = require('./FavoriteList');

// associations between users and cars 

User.belongsToMany(Car, {
    through: FavoriteList,
    as: 'fav_cars',
    foreignKey:'user_id'
});

Car.belongsToMany(User, {
    through: FavoriteList,
    foreignKey:'car_id'
});

// direct relationship between user and car
User.hasMany(Car, {
    foreignKey: 'user_id'
});

Car.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Car, FavoriteList };