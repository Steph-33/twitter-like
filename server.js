// import mysqlClient from './database/mysql.js'
const express = require("express");
const handlebars = require("express-handlebars");
const server = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
// const serialize = require('serialize-javascript');
// const db = new mysql.Database('/')

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

const mySqlClient = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "root",
    database : "Twitter-Like"
  });


server.engine("hbs",handlebars());
server.set("view engine","hbs");

server.get('/',(request,response)=>{
    response.render('home');
});

server.get('/inscription',(request,response)=>{
    response.render('inscription');
});
mySqlClient.connect();


// Routes en POST afin de récuperer la req.body 
server.post('/inscription', (request,response) => {
    var username = request.body.userName;

    // console.log(request)
    // console.log(username)
    mySqlClient.query(`INSERT INTO User(userName, userPseudo, userPassword, userEmailAdress, userPicture ) VALUES (?, ?, ?, ?, ?)` , [`${username}`,'qdsq', 'dqsdq', 'dqds', 'qdsqs'], (error) => {response.render('home')})
    // // mysql.serialize(function() {  
        // mysql(`INSERT into User(userName) VALUES ('${username}')`);   
    // })  
    
})
mySqlClient.end();

server.listen(8080, () => {
    console.log('salut');
});