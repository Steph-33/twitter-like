var orm = require("./../database/database.js");

let db = orm.connectToDB();

class User {
    constructor(props) {
      const { userName, userPseudo, userPassword, userEmailAdress, userPicture } = props;
  
      this.userName = userName;
      this.userPseudo = userPseudo;
      this.userPassword = userPassword;
      this.userEmailAdress = userEmailAdress;
      this.userPicture = userPicture;
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
};
    
module.exports = User;