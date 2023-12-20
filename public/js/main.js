var path = require('path');
var express = require('express');
var app = express();
var http = require("http");
var fs = require('fs');
app.use(express.static(path.join(__dirname, 'public')));

var server = htpp.createServer(function(req, res) {
  fs.readFile("public/html/main.html", function(err, text) {
    res.setHeader("Content-Type", "text/html");
    res.end(text);
  });
  return;
})

server.listen(3000, "127.0.0.1");
