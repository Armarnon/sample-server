// var http = require('http'); 

// http.createServer(function(req,res){ 
// 	res.writeHead(200,{'Content-Type':'text/plain'});
// 	res.end('yes you can\n');
// }).listen(8000);

// console.log("server running port 8000"); 

// require("./foo");
// foo();
// foo2("hi","hi2");

// var bar2 = require("./bar");
// bar2();

// var fiz = require('./fiz').fiz; 
// fiz();

// var fiz2 = require('./fiz').fiz2; 
// fiz2("test");

// var fizz = require('./fiz');
// fizz.fiz();
// fizz.fiz2("hello");

// var buz = require('./buz'); 
// buz.log();
// buz.log2('Arnon');

// var baz = require('./baz.js').Baz; 
// baz.log();

// var Doo = require('./doo.js'); 
// var doo = new Doo(); 
// doo.log();


// var Qux = require('./qux.js').Qux; 
// var qux = new Qux(); 
// qux.log();

var express = require('express');
const bodyParser = require('body-parser');
const birds = require('./bird');

var app = express();
var server = require('http').Server(app);
server.listen(8000);
app.use(express.static('web'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use("/birds", birds);
console.log("server running port 8000");



app.get('/he*', function (req, res, next) {
    console.log("Hello World form * of log");
    next();
});

app.get('/hello', function (req, res) {
    console.log(req.query);
    res.end("Hello World Alone " + req.query.userName);
});

app.get('/hello/:userName', function (req, res) {
    console.log(req.params);
    res.end("Hello World..... " + req.params.userName);
});



app.post('/hello', function (req, res) {
    // console.log(req.body);
    // res.end("Hello World from POST.....");

    let obj = {
        code: "007",
        name: req.body.userName
    }

    res.json(obj);
});

var cb0 = function (req, res, next) {
    console.log('CB0');
    next();
}

var cb1 = function (req, res, next) {
    console.log('CB1');
    next();
}

var cb2 = function (req, res) {
    res.send('Hello from C!');
}

app.get('/example/c', [cb0, cb1, cb2]);

app.route('/book')
    .get(function (req, res) {
        res.send('Get a random book');
    })
    .post(function (req, res) {
        res.send('Add a book');
    })
    .put(function (req, res) {
        res.send('Update the book');
    });

