var friends = require('../data/friends');

module.exports = function(app) {
    // Return all friends in friends.js
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req, res) {
        var bestMatch = {
            name: '',
            photo: '',
            friendDif: Infinity
        };

        var newUser = req.body;
        var userScores = newUser.scores;

        var totalDif;

        for (var i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            totalDif = 0;

            console.log(currentFriend.name);

            for (var j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = userScores[j];

                totalDif += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }

            if (totalDif <= bestMatch.friendDif) {
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDif = totalDif;
            }
        }

        friends.push(newUser);

        res.json(bestMatch);
        
    });

};