var express = require('express');
var app = express();
var fs = require('fs');
var database = require('./public/js/Node/database.js')

app.use('/public', express.static(__dirname + '/public'));
app.use('/database', database);
console.log("You are in the right place");

app.get('/main', function(request, response) {
  fs.readFile("public/html/main.html", function(err, text) {
    response.setHeader("Content-Type", "text/html");
    response.end(text);
  });
})

app.get('/contact-us', function(request, response) {
  fs.readFile("public/html/contact-us.html", function(err, text) {
    response.setHeader("Content-Type", "text/html");
    response.end(text);
  });
})

app.get('/login', function(request, response) {
  fs.readFile("public/html/Login.html", function(err, text) {
    response.setHeader("Content-Type", "text/html");
    response.end(text);
  });
})

app.get('/forgot-password', function(request, response) {
  fs.readFile("public/html/forgot-password.html", function(err, text) {
    response.setHeader("Content-Type", "text/html");
    response.end(text);
  });
})
app.listen(8080, "127.0.0.1");

//TODO: use npx kill-port NPM module to kill the port when the user is terminating the server
//Resource: https://www.npmjs.com/package/kill-port
