const express = require("express");
const handlebars = require("express-handlebars");
const server = express();

server.engine("hbs",handlebars());
server.set("view engine","hbs");

server.get('/',(request,response)=>{
    response.render('home');
});

server.listen(8080, () => {
    console.log('salut');
});