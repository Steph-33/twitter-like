// var passport = require("./passport");
var LocalStrategy = require("passport-local").Strategy;

function initialize(passport) {
  const authenticateUser = async (userEmailAdress, password, done ) => {
    const user = await getUserByEmail(userEmailAdress)
    if (user == null) {
      return done( null, false, { message : 'Utilisateur inconnu'})
    }
    if (password !== user.userPassword) {
      return done(null, false ,{message : 'Password incorrect'});
    }
    return done(null, user); 
  }
  
  passport.use( new LocalStrategy( {usernameField: 'userEmailAdress' }, authenticateUser))
  passport.serializeUser(function (user, done) {done(null, user);});
  passport.deserializeUser(function (user, done) {done(null, user);});
  

  }


  module.exports = initialize



// module.exports = () => {
//   //Setting the strategy for Passport
//   passport.use(
//     new LocalStrategy({ passReqToCallback: true }, function (req, username, password, done) {
//       userService.findUser(username, function (err, user) {
//         user = user[0];
//         if (err) return done(err);

//         if (!user) return done(null, false);

//         //comparing user passwords - return if not a match
//         if (password !== user.password) return done(null, false);

//         return done(null, user);
//       });
//     })
//   );

//   //These two methods are required to keep the user logged in via the session
//   passport.serializeUser(function (user, done) {
//     done(null, user);
//   });

//   passport.deserializeUser(function (user, done) {
//     done(null, user);
//   });

//   return passport;
// };
