const User = require("../models/user");

exports.add = (request, response) => {
    const newUser = new User(request.body);
    console.log(request.body)
    User.create(newUser, (error, data) => {
      if (error) {
        response.status(500).send(error.message);
      }
      response.redirect("/");
    });
};

exports.findByInfo = (request, response) => {
    const newUser = new User(request.body);
    User.getInfo(newUser,(error, userName) => {
        if (error) {
          response.status(500).send(error.message);
          }

          // response.render("/tweetactu", { tweet });
          
          response.render("profil",{
            userName:userName
            // userPseudo:userPseudo
          });
          // console.log(response.render)
  });
};
