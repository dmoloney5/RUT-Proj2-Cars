const router = require('express').Router();
const { Car, User } = require('../../models');

// Get all cars in database
router.get('/', (req, res) => {
    Car.findAll()
    .then(dbCarData => res.json(dbCarData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//Get specific car
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbCarData => {
        if(!dbUserData) {
            res.status(404).json({ message: 'No car found with this id' });
            return;
        }
        res.json(dbCarData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Add car to database 
router.post('/', (req, res) => {
    Car.create({

    })
    .then(dbCarData => res.json(dbCarData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Update specified car details in database
router.put('/', (req, res) => {
    Car.update({

    });
});

// Delete specified car in database
router.delete('/', (req, res) => {
    Car.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCarData => {
        if(!dbCarData) {
            res.status(404).json({ message: 'No car found with this id'});
            return;
        }
        res.json(dbCarData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;