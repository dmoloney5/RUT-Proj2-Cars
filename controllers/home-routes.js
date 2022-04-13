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

router.get('/sign-up', (req, res) => {
    res.render("sign-up")
})

router.get('/car-search', (req, res) => {
    res.render("car-search")
})

module.exports = router;