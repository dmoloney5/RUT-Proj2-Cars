const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const carRoutes = require('./car-routes.js');

router.use('/users', userRoutes);
router.use('cars', carRoutes);

module.exports = router;