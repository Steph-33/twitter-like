const express = require("express");
const bodyParser = require("body-parser")
let urlencodedParser =bodyParser.urlencoded({ extended: false })

// midleware express
const router = express.Router();

const tweetRouter = require("./tweet");
const tweetController = require('../controllers/tweet');
const Tweet = require("../models/tweet");


// ------> routes GET & POST pour page "tweetactu"
// router.get("/tweetactu", (request,response)=> {
//   response.render("tweetactu", {
//     // style:"/css/home.css",
//     userName:"marsipulami",
//     userPseudo:"mathilda",
//     tweetDate:"31/05/2020",
//   });
// });

// router.get("/tweetactu", (request,response)=> {
//   Tweet.getAll((error, tweet) => {
//     if (error) {
//     response.status(500).send(error.message);
//     }

//     response.render("tweetactu", {
//       // style:"/css/home.css",
//       userName:"marsipulami",
//       userPseudo:"mathilda",
//       tweetDate:"31/05/2020",
//     });
//   })
// })

router.get("/tweetactu", tweetController.findAll);

router.post("/tweetactu", tweetController.add)

// router.post("/tweetactu", (request, response) => {
//   console.log("coucou")

//   response.redirect("/tweetactu")
// });

// router.post("/tweetactu", urlencodedParser, (request, response) => {
//   let tweetMessage = require('../controllers/tweet');
//   tweetMessage.add(request.body.tweet, () => {
//     console.log(request.body.tweetContent)

//     response.render("/tweetactu")
//   });
// });

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