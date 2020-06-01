const express = require("express");
const bodyParser = require("body-parser")
let urlencodedParser =bodyParser.urlencoded({ extended: false })

// midleware express
const router = express.Router();

const tweetRouter = require("./tweet");
const tweetController = require('../controllers/tweet');
const Tweet = require("../models/tweet");


// ------> routes GET & POST pour page "tweetactu" qui utilise les fonctions du controller
router.get("/tweetactu", tweetController.findAll);

router.post("/tweetactu", tweetController.add)



// -----> routes générales pour home etc
router.get("/", (request, response) => {
  response.render("home", {
    style:"/css/home.css"
  });
});

router.get("*", (request, response) => {
  response.status(404).render("404.handlebars");
});

module.exports = router;