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
  
  
  
  
  
  
  // const mysql = require("mysql");

  // const db = mysql.createConnection({
  //   host     : "localhost",
  //   user     : "root",
  //   password : "root",
  //   database : "twitterlike",
  //   port : "8080"
  // });
  // // console.log(db)
  // // db.connect()

  // db.connect((error) => {
  //   console.log("test database")
  //   console.log(error)
  //   if (error) throw error;
  //   console.log("Mauvaise route !");
  // });
  
  // // ----------   A utiliser ???
  // // db.connect()
  // // db.end();

  // module.exports = db;