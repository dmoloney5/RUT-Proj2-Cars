const router = require('express').Router();
const sequelize = require("../config/connection");
const withAuth = require("../utils/auth");

router.get('/', (req, res) => {
    res.render("homepage")
})

router.get('/login',  (req, res) => {
    if(req.session.loggedIn){
        res.redirect("/dashboard")
        return;
    }
    res.render("login")
})

router.get('/sign-up', (req, res) => {
    if(req.session.loggedIn){
        res.redirect("/dashboard")
        return;
    }
    res.render("sign-up")
})

router.get('/car-search', withAuth, (req, res) => {
    res.render("car-search")
})

router.get('/dashboard', (req, res) => {
    res.render("Dashboard",{user:req.session.username})
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