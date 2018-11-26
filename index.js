/*
    Author: Kimberly Leubner
    Class: CIS 131
    Project: Using Express
*/

// Variables
var express = require('express');
var app = express();
var path = require('path');

 // Get / (Default)
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

// Get /about.html
app.get("/about.html", function (req, res) {
      res.sendFile(path.join(__dirname + "/about.html"));
});

// Get /index.html
app.get("/index.html", function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

// Listens on port 3000
app.listen(3000);

// Displays message to show server is online
console.log("Server ON.");