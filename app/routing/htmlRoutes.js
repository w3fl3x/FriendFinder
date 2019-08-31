var path = require('path');

module.exports = function(app) {
    // if user click on survey button, will bring to survey.html
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });

    // route for home.html
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });
};
