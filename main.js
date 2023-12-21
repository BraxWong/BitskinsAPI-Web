var express = require('express');
var app = express();
var fs = require('fs');

app.use('/public', express.static(__dirname + '/public'));
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
