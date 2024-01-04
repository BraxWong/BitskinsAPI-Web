var express = require('express');
var app = express();
var fs = require('fs');
var database = require('./public/js/Node/database.js')
const kill = require('kill-port')

app.use('/public', express.static(__dirname + '/public'));
app.use('/', database);
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

app.get('/signup', function(request, response) {
  fs.readFile("public/html/SignUp.html", function(err, text) {
    response.setHeader("Content-Type", "text/html");
    response.end(text);
  })
})

app.listen(8080, "127.0.0.1", () => {
  process.on('exit', () => {
    // Kill the port when the process is about to exit
    kill(8080, 'tcp')
      .then(console.log)
      .catch(console.log);
  });
  
  process.on('SIGINT', () => {
    process.exit(0);
  });
});


