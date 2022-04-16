const router = require('express').Router();
const { User, Car, FavoriteList } = require('../../models');
const bcrypt = require('bcrypt');
const fileUpload = require("express-fileupload");

router.get('/', (req, res) => {
User.findAll({
    attributes: { exclude: ['password'] },
    include: [
        {
            model: Car,
            attributes: ['Year', 'Make', 'Model', 'Series', 'Mileage', 'Price']
        },
        {
            model: Car,
            through: FavoriteList,
            as:'fav_cars'
        }
       
    ]
})
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'username', 'email', 'phone', 'location'],
        include: [
            {
                model: Car,
                attributes: ['Year', 'Make', 'Model', 'Series']
            },
            {
                model: Car,
                through: FavoriteList,
                as:'fav_cars'
            }
        ]
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    });
});

// create user
router.post('/', (req, res) => {
User.create({
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
    location: req.body.location,
    password: req.body.password
    })
    .then(dbUserData => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.email = dbUserData.email;
            req.session.phone = dbUserData.phone;
            req.session.loggedIn = true;

            res.json(dbUserData);
        });
    })
    // .then(dbUserData => res.json(dbUserData))
    // .catch(err => {
    //     console.log(err);
    //     res.status(500).json(err);
    //});
});

// Login Route
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that email address!' });
            return;
        }
        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        req.session.save(() => {
            // session variables
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json({ user: dbUserData, message: 'You are now logged in!' });
        });
    });
});

// logout user from session
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() =>{

            res.status(204).end();

        });
    }
    else {
        res.status(404).end();
    }
});

// update user
router.put('/:id', (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
});

module.exports = router;