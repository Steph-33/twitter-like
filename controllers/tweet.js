const Tweet = require("../models/tweet");

exports.add = (request, response) => {
    const newTweet = new Tweet(request.body);
  
    Tweet.create(newTweet, (error, data) => {
      if (error) {
        response.status(500).send(error.message);
      }
  
      response.render("/tweetActu");
    });
  };

exports.findAll = (request, response) => {
    Tweet.getAll((error, Tweet) => {
        if (error) {
        response.status(500).send(error.message);
        }

        response.render("tweetActu.handlebars", { Tweet });
        console.log(response.render)
    });
};