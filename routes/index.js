const express = require("express");

const tweetRouter = require("./tweet");

const router = express.Router();

router.get("/", (request, response) => {
  response.render("home.handlebars");
});

router.get("/tweetActu", tweetRouter);

router.get("*", (request, response) => {
  response.status(404).render("404.handlebars");
});

module.exports = router;

