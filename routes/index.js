const express = require("express");
const bodyParser = require("body-parser")
let urlencodedParser = bodyParser.urlencoded({ extended: false })
// const bcrypt = require("bcrypt");
const passport = require('passport');
const connectFlash = require('connect-flash');
const flash = require('express-flash')

// midleware express
const router = express.Router();

const tweetRouter = require("./tweet");
const tweetController = require('../controllers/tweet');
const Tweet = require("../models/tweet");


// ------> routes GET & POST pour page "tweetactu" qui utilise les fonctions du controller
router.get("/tweetactu", tweetController.findAll);

router.post("/tweetactu", tweetController.add)


// routes en GET et POST pour l'inscription

const userController = require("../controllers/user");

router.get("/inscription", (request,response) => {
  response.render('inscription.handlebars');
});

router.post("/inscription", userController.add);

// -----> routes générales pour home etc
router.get("/", (request, response) => {
  response.render("home", {
    style:"/css/home.css",
    messages: request.flash('info')
  });
});

router.post("/", passport.authenticate('local', {
  successRedirect: '/tweetactu',
  failureRedirect: '/',
  failureFlash: true
}));

router.get("*", (request, response) => {
  response.status(404).render("404.handlebars");
});

module.exports = router;