var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var morgan = require('morgan');
var port = process.env.PORT || 3030;
var passport = require('passport');
var flash = require('connect-flash');
app.set('views',__dirname+'/views/');
require('./config/passport')(passport);
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine','ejs')

//being sorting
var logger=require('morgan')
var admin=require('firebase-admin')
var path = require('path');
var serviceAccount=require('./canon-serviceKey.json')
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var rp = require('request-promise');
var firebaseAdmin=admin.initializeApp({
    credential:admin.credential.cert(serviceAccount),
    databaseURL: "https://canon-4f6d8.firebaseio.com"
});
///database reference
var database=firebaseAdmin.database();
app.use(express.static(path.join(__dirname, '/views/')));
app.use(logger('dev'));
app.use(cookieParser());
app.use(session({
    secret: 'justasecret',
    resave:true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
require('./app/routes.js')(app,database, passport,XMLHttpRequest);
app.listen(port);
console.log('Port being used: '+ port);




