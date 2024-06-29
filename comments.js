// Create web server
var express = require('express');
var app = express();

// Parse request body
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create a route for GET /comments
app.get('/comments', function(req, res) {
    res.json([]);
}