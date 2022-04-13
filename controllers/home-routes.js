const router = require('express').Router();

router.get('/page1', (req, res) => {
    res.render("page1")
})

router.get('/page2', (req, res) => {
    res.render("page2")
})

router.get('/login', (req, res) => {
    res.render("login")
})

router.get('/car-search', (req, res) => {
    res.render("car-search")
})

router.get('/dashboard', (req, res) => {
    res.render("Dashboard")
})

router.get('/homepage', (req, res) => {
    res.render("homepage")
})

router.get('/signup', (req, res) => {
    res.render("signup")
})

router.get('/new-post', (req, res) => {
    res.render("new-post")
})

router.get('/add-post', (req, res) => {
    res.render("add-post")
})

router.get('/single-post', (req, res) => {
    res.render("single-post")
})

module.exports = router;