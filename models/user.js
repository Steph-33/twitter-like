const db = require("../database/database");

class User {
    constructor(props) {
      const { userName, userPseudo, tweetDate, content } = props;
  
      this._userName = userName;
      this._userPseudo = userPseudo;
      this._userPassword = userPassword;
      this._userEmailAdress = userEmailAdress;
      this._userPicture = userPicture;
    }

    static create(newUser, callback) {
        db.query("INSERT INTO User SET ?", newUser, (error, result) => {
          if (error) {
            console.log("error: ", error);
            callback(error, null);
            return;
          }
    
          console.log("Qui es tu ?");
          callback(null, {
            userId: result.insertId,
            // id: result.insertId,
            ...newUser,
          });
        });
      }

    static getAll(callback) {
      db.query("SELECT * FROM User", (error, result) => {
        if (error) {
          console.log("error: ", error);
          callback(error, null);
          return;
        }
    
        console.log("Ton profil : ", result);
        callback(null, result);
      });
    }

};
    
module.exports = User;