$(document).ready(function() {

    // $('#submit').on('click', function(event) {
    //     event.preventDefault();

    //     var valid = true;

    //     if($('#name').val() === '' || $('#photo').val() === '') {
    //         valid = false;
    //     } else if($('#q1').val() === 'empty' || $('#q2').val() === 'empty' || $('#q3').val() === 'empty' || $('#q4').val() === 'empty' || $('#q5').val() === 'empty' || $('#q6').val() === 'empty' || $('#q7').val() === 'empty' || $('#q8').val() === 'empty' || $('#q9').val() === 'empty' || $('#q10').val() === 'empty') {
    //         valid = false;
    //     }

    //     if(valid === true) {
    //         var newUser = {
    //             name: $('#name').val().trim(),
    //             photo: $('#photo').val().trim(),
    //             scores: [
    //                 $('#q1').val(),
    //                 $('#q2').val(),
    //                 $('#q3').val(),
    //                 $('#q4').val(),
    //                 $('#q5').val(),
    //                 $('#q6').val(),
    //                 $('#q7').val(),
    //                 $('#q8').val(),
    //                 $('#q9').val(),
    //                 $('#q10').val()
    //             ]
    //         };

    //         var currentURL = window.location.origin;

    //         // AJAX call for response after post
    //         $.post(currentURL + '/api/friends', newUser, function(data) {
    //             $('#bestFriend').text(data.name);
    //             $('#bestFriendPhoto').attr('src', data.photo);
    //             $('#bestFriendModal').modal('toggle');
    //         });
    //     }else {
    //         alert('Survey is incomplete!');
    //     };
    // });

    $('#submit').on('click', function(event) {
        event.preventDefault();

        function formComplete() {
            var complete = true;
            $('.form-control').each(function() {
                if ($(this).val() === '') {
                    complete = false;
                }
            });

            $('option:value').each(function() {
                var name = $(this).attr('name');
                if ($("option:value[name=" + name + "]:checked").length == 0) {
                    complete = false;
                }
            });
            return complete;
        }

        if (formComplete() == true) {
            var newFriend = {
                name: $('#name').val().trim(),
                photo: $('#photo').val().trim(),
                scores: [
                    $("option:value[name = 'q1']:checked").val(),
                    $("option:value[name = 'q2']:checked").val(),
                    $("option:value[name = 'q3']:checked").val(),
                    $("option:value[name = 'q4']:checked").val(),
                    $("option:value[name = 'q5']:checked").val(),
                    $("option:value[name = 'q6']:checked").val(),
                    $("option:value[name = 'q7']:checked").val(),
                    $("option:value[name = 'q8']:checked").val(),
                    $("option:value[name = 'q9']:checked").val(),
                    $("option:value[name = 'q10']:checked").val()
                ]
            }

            $('#name').val('');
            $('#photo').val('');
            $('option:value').prop('checked', false);

            var currentURL = window.location.origin;

            $.post(currentURL + '/api/firends', newFriend, function(data) {

                // Grab result from AJAX post, then the best matching name and photo will be displayed
                $('#bestFriend').html('Best Match: ' + data.name);
                $('#bestFriendPhoto').attr('src', data.photo);
                $('#bestFriendModal').modal('toggle');
            });
        } else {
            $('#incompleteMessage').html('Please fill out all fields before submitting!').toggle();
        }
        return false;
    });
});