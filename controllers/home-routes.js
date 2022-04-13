const router = require('express').Router();
const sequelize = require("../config/connection");
//const withAuth = require("../utils/auth");

<<<<<<< HEAD
router.get('/login',  (req, res) => {
=======
router.get('/login', (req, res) => {
>>>>>>> 82aaf85eeb5600ba2047a17c0e04193f95a81961
    res.render("login")
})

router.get('/sign-up', (req, res) => {
    res.render("sign-up")
})

router.get('/car-search', (req, res) => {
    res.render("car-search")
})

router.get('/dashboard', (req, res) => {
    res.render("Dashboard")
})

router.get('/favorites', (req, res) => {
    res.render("favorites")
})

router.get('/homepage', (req, res) => {
    res.render("homepage")
})

<<<<<<< HEAD
router.get('/new-post',  (req, res) => {
=======
router.get('/new-post', (req, res) => {
>>>>>>> 82aaf85eeb5600ba2047a17c0e04193f95a81961
    res.render("new-post")
})

router.get('/add-post', (req, res) => {
    res.render("add-post")
})

router.get('/edit-post', (req, res) => {
    res.render("edit-post")
})

router.get('/setting', (req, res) => {
    res.render("setting")
})

router.get('/your-profile', (req, res) => {
    res.render("your-profile")
})

router.get('/search-results', (req, res) => {
    res.render("Search-results")
})

router.get('/product', (req, res) => {
    res.render("product")
})

module.exports = router;