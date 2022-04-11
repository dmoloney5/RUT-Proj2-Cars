const router = require('express').Router();
const sequelize = require('../config/connection');
const { Car, User } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session);

    res.render('homepage', {

        // data you want to pass to template
    })

});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return
    }

    res.render('login');
});

module.exports = router;