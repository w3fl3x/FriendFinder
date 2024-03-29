// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
console.log(__dirname + '/app/public');
app.use(express.static('./app/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// API and HTML routes
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Start the Server
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});