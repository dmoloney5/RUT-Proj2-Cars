// const router = require('express').Router();
// const { FavoriteList } = require('../../models');

// // Get all cars in database
// router.get('/', (req, res) => {
//     FavoriteList.findAll({
//         where: {
//             id: req.session.user_id
//         }
//     })
//     .then(dbCarData => res.json(dbCarData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// // Add car to database 
// router.post('/:id', (req, res) => {
//     FavoriteList.create({
//         car_id: req.params.id,
//         user_id: req.session.user_id
//     })
//     .then(dbCarData => res.json(dbCarData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// // Delete specified car in database
// router.delete('/:id', (req, res) => {
//     FavoriteList.destroy({
//         where: {
//             id: req.params.id
//         }
//     })
//     .then(dbCarData => {
//         if(!dbCarData) {
//             res.status(404).json({ message: 'No car found with this id'});
//             return;
//         }
//         res.json(dbCarData);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// module.exports = router;