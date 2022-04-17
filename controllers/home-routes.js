const { User, Car } = require("../models");
const router = require("express").Router();
const sequelize = require("../config/connection");
const path = require("path");
//const withAuth = require("../utils/auth");

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
  res.render("homepage", {
    loggedIn: req.session.loggedIn
  });
});

router.get("/favorites", (req, res) => {
  res.render("favorites");
});

router.get('/dashboard', (req, res) => {
    res.render("dashboard", {
      loggedIn:req.session.loggedIn,
      user:req.session.username
    })
})

router.get("/new-post", async(req, res) => {
  const car = await Car.findByPk(req.session.user_id)
  res.render("new-post", car.toJSON());
});

router.get("/add-post", (req, res) => {
  res.render("add-post");
});

router.get("/edit-post", (req, res) => {
  res.render("edit-post");
});

router.get("/settings", async(req, res) => {
     const user = await User.findByPk(req.session.user_id)
     res.render("settings", user.toJSON());
});

router.get("/your-profile", async (req, res) => {
  const user = await User.findByPk(req.session.user_id)
  res.render("your-profile", user.toJSON());
});

router.get("/search-results", (req, res) => {
  res.render("Search-results");
});

router.get("/product", (req, res) => {
  res.render("product");
});

module.exports = router;
