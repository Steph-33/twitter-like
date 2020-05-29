// const express = require("express");
// const mysql = require("mysql");

// server.get('/inscription',(request,response)=>{
//     response.render('inscription');
// });


// db.connect();
// // Routes en POST afin de récuperer la req.body 
// server.post('/inscription', (request,response) => {
//     var username = request.body.userName;

//     // console.log(request)
//     console.log(username)
//     mySqlClient.query(`INSERT INTO User(userName, userPseudo, userPassword, userEmailAdress, userPicture ) VALUES (?, ?, ?, ?, ?)` , [`${username}`,'qdsq', 'dqsdq', 'dqds', 'qdsqs'], (error) => {response.render('home')})
    
//     // // mysql.serialize(function() {  
//         // mysql(`INSERT into User(userName) VALUES ('${username}')`);   
//     // })  
    
// })

// db.end();


// //  DOC sur SERIALIZE  (utilisation ligne 15)
// // https://www.npmjs.com/package/serialize-javascript

// const serialize = require('serialize-javascript');
