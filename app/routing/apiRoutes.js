var friends = require('../data/friends');

module.exports = function(app) {
    // Return all friends in friends.js
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req, res) {
        console.log(req.body.scores);
    });

    // Receive user details (name, photo, scores)
    var user = req.body;

    for(var i = 0; i < user.scores.length; i++) {
        user.scores[i] = parseInt(user.scores[i]);
    };

    var bestFriendIndex = 0;
    var minDif = 40;

    // for loop to compare user to friend scores
    for(var i = 0; i < friends.length; i++) {
        var totalDif = 0;
        for(var j = 0; j < friends[i].scores.length; j++) {
            var dif = Math.abs(user.scores[j] - friends[i].scores[j]);
            totalDif += dif;
        };

        if(totalDif < minDif) {
            bestFriendIndex = i;
            minDif = totalDif;
        };
    };

    // after finding a match, add user to friend array
    friends.push(user);

    // send back best friend match to browser
    res.json(friends[bestFriendIndex]);
};