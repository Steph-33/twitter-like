const express = require("express");

// midleware express
const router = express.Router();

const tweetRouter = require("./tweet");
// router.get("/tweetactu", tweetRouter);

router.get("/tweetactu", (request, response) => {
  response.render("tweetactu", {
    style:"/css/tweetactu.css"
  });
});


router.get("/", (request, response) => {
  response.render("home", {
    style:"/css/home.css"
  });
});

router.get("*", (request, response) => {
  response.status(404).render("404.handlebars");
});

module.exports = router;

