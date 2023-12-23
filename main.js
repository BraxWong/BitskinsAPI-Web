var express = require('express');
var app = express();
var fs = require('fs');
var app2 = require('./public/js/Node/testing.js')

app.use('/public', express.static(__dirname + '/public'));
app.use('/app1', app2);
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

app.listen(8080, "127.0.0.1");
