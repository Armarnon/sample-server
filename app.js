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
var app = express();
var server = require('http').Server(app);
server.listen(8000);
app.use(express.static('web'));
console.log("server running port 8000");
