const router = require('express').Router();
const { User } = require('../../models');

router.get('/', (req, res) => {
User.findAll({
    attributes: { exlude: ['password'] }
})
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create user
router.post('/', (req, res) => {
User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;