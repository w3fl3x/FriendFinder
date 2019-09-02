$('#submit').on('click', function(event) {
    event.preventDefault();

    var valid = true;

    if($('#name').val() === '' || $('#photo').val() === '') {
        valid = false;
    } else if($('#q1').val() === 'empty' || $('#q2').val() === 'empty' || $('#q3').val() === 'empty' || $('#q4').val() === 'empty' || $('#q5').val() === 'empty' || $('#q6').val() === 'empty' || $('#q7').val() === 'empty' || $('#q8').val() === 'empty' || $('#q9').val() === 'empty' || $('#q10').val() === 'empty') {
        valid = false;
    }

    if(valid === true) {
        var newUser = {
            name: $('#name').val().trim(),
            photo: $('#photo').val().trim(),
            scores: [
                $('#q1').val(),
                $('#q2').val(),
                $('#q3').val(),
                $('#q4').val(),
                $('#q5').val(),
                $('#q6').val(),
                $('#q7').val(),
                $('#q8').val(),
                $('#q9').val(),
                $('#q10').val()
            ]
        };

        var currentURL = window.location.origin;

        // AJAX call for response after post
        $.post(currentURL + '/api/friends', newUser, function(data) {
            $('#bestFriend').text(data.name);
            $('#bestFriendPhoto').attr('src', data.photo);
            $('#bestFriendModal').modal('toggle');
        });
    }else {
        alert('Survey is incomplete!');
    };
});