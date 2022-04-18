const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const carRoutes = require('./car-routes.js');
//const favoriteRoutes = require('./favorites-routes.js');

router.use('/users', userRoutes);
router.use('/cars', carRoutes);
//router.use('/favorites', favoriteRoutes);

module.exports = router;