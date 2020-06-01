// import mysqlClient from './database/mysql.js'
const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require('body-parser');
var orm = require("./database/database.js");

const router = require("./routes");

const server = express();

server.engine('handlebars',handlebars());
server.set('view engine','handlebars');

server.use(express.static('assets'));

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

server.use(router);

orm.connectToDB();

server.listen(8080, () => {
    console.log('salut');
});