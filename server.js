// Dependencies
// =============================================================
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.static(__dirname + '/app/css'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// API and HTML routes
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Routing
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'home.html'));
});
app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, 'survey.html'));
});

// Start the Server
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});