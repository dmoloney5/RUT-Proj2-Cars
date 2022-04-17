const { User, Car } = require("../models");
const router = require("express").Router();
const sequelize = require("../config/connection");
const path = require("path");
const withAuth = require("../utils/auth");

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/sign-up", (req, res) => {
  res.render("sign-up");
});

router.get("/car-search", (req, res) => {
  res.render("car-search");
});

router.get("/", (req, res) => {
  res.redirect("/homepage");
});

router.get("/homepage", (req, res) => {
  res.render("homepage");
});

router.get("/favorites", (req, res) => {
  res.render("favorites", {
    loggedIn: req.session.loggedIn,
    user: req.session.username
  });
});

router.get('/dashboard', (req, res) => {
  res.render("dashboard", {
    loggedIn: req.session.loggedIn,
    user: req.session.username
  });
})

router.get("/new-post", withAuth, async (req, res) => {
  // const car = await Car.findByPk(req.session.user_id)
  // res.render("new-post", car.toJSON());
  res.render("new-post",  {
    loggedIn: req.session.loggedIn
  });
});

router.get("/settings", withAuth, async (req, res) => {
  const user = await User.findByPk(req.session.user_id)
  res.render("settings", {
    loggedIn: req.session.loggedIn,
    user: user.toJSON()
  });
});

router.get("/your-profile", withAuth, async (req, res) => {
  // const user = await User.findByPk(req.session.user_id)
  // res.render("your-profile", user.toJSON());
  res.render("your-profile",  {
    loggedIn: req.session.loggedIn
  });
});

module.exports = router;
