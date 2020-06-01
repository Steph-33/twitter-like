const db = require("../database/database");

class Tweet {
  constructor(props) {
    const { userName, userPseudo, tweetDate, content, url, countLikes, countRetweet } = props;

    this._userName = userName;
    this._userPseudo = userPseudo;
    this._tweetDate = tweetDate;
    this._content = content;
    this._url = url ;
    this._countLikes = countLikes || 0;
    this._countRetweet = countRetweet || 0;
  }

  static create(newTweet, callback) {
      db.connect()
      db.query("INSERT INTO Tweet SET ?", newTweet, (error, result) => {
        if (error) {
          console.log("error: ", error);
          callback(error, null);
          return;
        }
  
        console.log("Donne ton avis, toujours ton avis");
        callback(null, {
          tweetId: result.insertId,
          // id: result.insertId,
          ...newTweet,
        });
      });
      db.end()
    }

  static getAll(callback) {
    db.query("SELECT * FROM Tweet", (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }
  
      console.log("Vos tweets : ", result);
      callback(null, result);
    });
  }
};
    
module.exports = Tweet;