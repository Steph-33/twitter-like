const express = require("express");

// midleware express
const router = express.Router();

const tweetRouter = require("./tweet");
router.get("/tweetactu", tweetRouter);

router.get("/", (request, response) => {
  response.render("home.handlebars");
});

router.get("*", (request, response) => {
  response.status(404).render("404.handlebars");
});

module.exports = router;

