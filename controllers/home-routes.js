const { User } = require("../models");
const router = require("express").Router();
const sequelize = require("../config/connection");
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

router.get("/new-post", (req, res) => {
  res.render("new-post");
});

router.get("/add-post", (req, res) => {
  res.render("add-post");
});

router.get("/edit-post", (req, res) => {
  res.render("edit-post");
});

router.get("/settings", async(req, res) => {
     const user = await User.findByPk(req.session.user_id)
  console.log ("USER", user.toJSON())
  res.render("settings", user.toJSON());
});

router.get("/your-profile", async (req, res) => {
  const user = await User.findByPk(req.session.user_id)
  console.log ("USER", user.toJSON())
  res.render("your-profile", user.toJSON());
});

router.get("/search-results", (req, res) => {
  res.render("Search-results");
});

router.get("/product", (req, res) => {
  res.render("product");
});

module.exports = router;
