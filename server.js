// import mysqlClient from './database/mysql.js'

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require('body-parser');
var orm = require("./database/database.js");
const passport = require('passport');
const flash = require('express-flash');
const connectFlash = require('connect-flash')
const session = require('express-session');


//PB - console.log ne s'affiche pas !
const initializePassport = require('./passport')
initializePassport(
    passport, email => {
        console.log('bah alors email?', email)
        console.log('bah alors users?', users)
        return users.find(user => user.userEmailAdress === email)
})

const router = require("./routes");

const server = express();

server.engine('handlebars',handlebars());
server.set('view engine','handlebars');

server.use(express.static('assets'));

server.use(express.static('img'));

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(flash())
server.use(session({
    secret: 'licorne',
    cookie: { maxAge: null },
    resave:true,
    saveUninitialized : true
}))

server.use(router);

server.use(passport.initialize());
server.use(passport.session());

orm.connectToDB();

server.listen(8080, () => {
    console.log('salut');
});