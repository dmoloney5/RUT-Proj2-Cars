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
    Car.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbCarData => {
        if(!dbCarData) {
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
        Year: req.body.Year,
        Make: req.body.Make,
        Model: req.body.Model,
        Series: req.body.Series,
        Color: req.body.Color,
        Mileage: req.body.Mileage,
        Price: req.body.Price,
        Description: req.body.Description
    })
    .then(dbCarData => res.json(dbCarData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Update specified car details in database
router.put('/:id', (req, res) => {
    Car.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbCarData => {
        if (!dbCarData[0]) {
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

// Delete specified car in database
router.delete('/:id', (req, res) => {
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