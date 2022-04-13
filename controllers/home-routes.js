const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render("login")
})

router.get('/sign-up', (req, res) => {
    res.render("sign-up")
})

router.get('/car-search', (req, res) => {
    res.render("car-search")
})

router.get('/dashboard', (req, res) => {
    res.render("Dashboard",{user:req.session.username})
})

router.get('/homepage', (req, res) => {
    res.render("homepage")
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

router.get('/single-post', (req, res) => {
    res.render("single-post")
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