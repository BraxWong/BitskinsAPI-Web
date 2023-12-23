var express = require('express');
var app = express();

app.get("/sayit", function(request, response) {
  console.log("Hello World");
})

module.exports = app;
