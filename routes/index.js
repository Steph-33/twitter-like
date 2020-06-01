const express = require("express");
const bodyParser = require("body-parser")
// midleware express
const router = express.Router();

const tweetRouter = require("./tweet");


// ------> routes GET & POST pour page "tweetactu"
router.get("/tweetactu", (request,response)=> {
  response.render("tweetactu", {
    style:"/css/tweetactu.css",
    userName:"marsipulami",
    userPseudo:"mathilda",
    tweetDate:"31/05/2020",
  });
})

router.post("/tweetactu", (request, response) => {
  response.render("tweetactu", {
    style:"/css/tweetactu.css",
    userName:"marsipulami",
    userPseudo:"mathilda",
    tweetDate:"31/05/2020",
    tweetContent: "blabla"
  });
});



// ------> route en GET / POST qui utilise les fonctions du controller 
// +++ décommenter les passages de variables handlebars dans les fonctions dans controllers/tweet.js
// const tweetController = require("../controllers/tweet");
// router.get("/tweetactu", tweetController.findAll)
// router.post("/tweetactu", tweetController.add)
// <------ ne pas oublier de mettre en commentaire les deux get/post déclarées en dessous



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