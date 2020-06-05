var mysql = require("mysql");

var connection = null;

function connectToDB() {
  if (connection) return connection;

 connection = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "root",
    database : "twitterlike", 
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock' //for mac and linux
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
  
// socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock' //for mac and linux