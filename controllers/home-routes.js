const router = require('express').Router();
const sequelize = require("../config/connection");
//const withAuth = require("../utils/auth");


router.get('/login', (req, res) => {
    res.render("login")
})

router.get('/sign-up', (req, res) => {
    res.render("sign-up")
})

router.get('/car-search', (req, res) => {
    res.render("car-search")
})

router.get('/', (req, res) => {
    res.redirect("/homepage")
})

router.get('/favorites', (req, res) => {
    res.render("favorites")
})

router.get('/dashboard', (req, res) => {
    res.render("dashboard")
})

router.get('/new-post', (req, res) => {
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