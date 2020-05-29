  const mysql = require("mysql");

  const db = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "Girondins33!",
    database : "Twitter-Like",
    port : "8080"
  });
  // console.log(db)

  db.connect((error) => {
    if (error) throw error;
    console.log("Mauvaise route !");
  });
  
  // ----------   A utiliser ???
  // db.connect()
  // db.end();

  module.exports = db;