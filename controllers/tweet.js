const Tweet = require("../models/tweet");

exports.add = (request, response) => {
    const newTweet = new Tweet(request.body);
  
    Tweet.create(newTweet, (error, data) => {
      if (error) {
        response.status(500).send(error.message);
      }
  
      // response.render("/tweetactu");
      
      response.render("tweetactu", {
        style:"/css/tweetactu.css",
        userName:"marsipulami",
        userPseudo:"mathilda",
        tweetDate:"31/05/2020",
        tweetContent: "blabla"
      });
    });
};

exports.findAll = (request, response) => {
  // response.render("tweetactu")
  Tweet.getAll((error, tweet) => {
        if (error) {
        response.status(500).send(error.message);
        }

        // response.render("/tweetactu", { tweet });
        
        response.render("tweetactu",{
          // style:"/css/tweetactu.css",
          userName:"marsipulami",
          userPseudo:"mathilda",
          tweetDate:"31/05/2020",
        });
        // console.log(response.render)
  });
};