var express=require('express')
var logger=require('morgan')
var bodyParser=require('body-parser')
var path = require('path');
var Fireb = require('firebase')
var admin=require('firebase-admin')
var axios = require('axios');
var serviceAccount=require('./canon-serviceKey.json')
var app=express();
//we want to serve js and html in ejs
//ejs stands for embedded javascript
app.set('view engine','ejs');
//we also want to send css images and other static files in views folder
//app.use(express.static('views'))
app.use(express.static(path.join(__dirname, '/views/')));
app.set('views',__dirname+'/views/');
//Give the server access to user input
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(logger('dev'))
var fire=Fireb.initializeApp({
    credential:admin.credential.cert(serviceAccount),
    databaseURL: "https://canon-4f6d8.firebaseio.com"
})

app.get('/pagination1/', function (req, response,next) {
var dataRef = fire.database().ref('/bodabodahistory')
dataRef.once('value')
    .then(function (res) {
        var keys = Object.keys(res.val()).sort();
        var pageLength=10
        var pageCount = keys.length/pageLength
        var currentPage = 1
        var promises = []
        var nextPage
        var querying
        for( var i =0; i < pageCount; i++){
            key = keys[i*pageLength]
            console.log('Key',key)
            querying = dataRef.orderByKey().limitToFirst(pageLength).startAt(key)
            promises.push(querying.once('value'));
        }
        Promise.all(promises)
            .then(function (snaps) {
                var pages = []
                snaps.forEach(function (snap){
                    pages.push(snap.val())
                })
                console.log('pages',pages)
                process.exit()
             })
        response.render('test.ejs',{Data:pages,Current:currentPage,Next:nextPage})
    })
})
var port=process.env.port||3000;
app.listen(port,function(){
    console.log('you are testing on port'+port)
})
