var mysql = require("mysql");

var connection = null;

function connectToDB() {
  if (connection) return connection;

 connection = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "Girondins33!",
    database : "twitterlike", 
  });

  connection.connect(function (err) {
    if (err) {
      console.error("error connection:", err.stack);
      return;
    }
    console.log("connected to MySQL DB");
  });

  return connection;
}

module.exports.connectToDB = connectToDB;  
  
