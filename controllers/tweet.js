const Tweet = require("../models/tweet");

exports.add = (request, response) => {
    const newTweet = new Tweet(request.body);
  
    Tweet.create(newTweet, (error, data) => {
      if (error) {
        response.status(500).send(error.message);
      }
  
      response.render("/tweetactu");
    });
  };

exports.findAll = (request, response) => {
  response.render("tweetactu")
    // Tweet.getAll((error, tweet) => {
    //     if (error) {
    //     response.status(500).send(error.message);
    //     }

    //     response.render("tweetactu", { tweet });
    //     console.log(response.render)
    // });
};