var orm = require("./../database/database.js");

let db = orm.connectToDB();
const bcrypt = require("bcrypt");

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
          // const hashedPassword = bcrypt.hash(newUser.userName)
      
          // console.log(hashedPassword)
          callback(null, {
            userId: result.insertId,
            // userPassword: hashedPassword,
            // id: result.insertId,
            ...newUser,
          });
        });
      }
};
    
module.exports = User;