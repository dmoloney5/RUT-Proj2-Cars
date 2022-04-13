const router = require('express').Router();
const sequelize = require("../config/connection");
const withAuth = require("../utils/auth");

router.get('/login', withAuth, (req, res) => {
    res.render("login")
})

router.get('/sign-up', withAuth, (req, res) => {
    res.render("sign-up")
})

router.get('/car-search', withAuth, (req, res) => {
    res.render("car-search")
})

router.get('/dashboard', withAuth, (req, res) => {
    res.render("Dashboard")
})

router.get('/favorites', withAuth, (req, res) => {
    res.render("favorites")
})

router.get('/homepage', withAuth, (req, res) => {
    res.render("homepage")
})

router.get('/new-post', withAuth, (req, res) => {
    res.render("new-post")
})

router.get('/add-post', withAuth, (req, res) => {
    res.render("add-post")
})

router.get('/edit-post', withAuth, (req, res) => {
    res.render("edit-post")
})

router.get('/setting', withAuth, (req, res) => {
    res.render("setting")
})

router.get('/your-profile', withAuth, (req, res) => {
    res.render("your-profile")
})

router.get('/search-results', withAuth, (req, res) => {
    res.render("Search-results")
})

router.get('/product', withAuth, (req, res) => {
    res.render("product")
})

module.exports = router;