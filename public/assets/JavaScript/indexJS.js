var username = "";
var password = "";
var confirmation = "";

//test code to plug up the modals
$(document).ready(function() {
    //User Login - check to see if the value entered matches for confirmation
    $("#iRegister").on("click", function() {
        //set up the varaibles to contain the information that is requried to function.
        userName = $('user_email').val();
        password = $('create_pass').val();
        confirmPass = $('create_verify').val();

        //check to insure that the information is blank
        if (userName === "" || password === "" || confirmPass === "") {
            iziToast.warning({
                title: 'Login Issue',
                timeout: 5000,
                message: 'One or more of the current fields are blank.  Please fully fill in then try again.',
            });
            return;
        };

        //Check to see if the passwords match
        if (password !== confirmPass) {
            //if no match is made throw an error to the user
            iziToast.warning({
                timeout: 5000,
                title: 'Password Issue',
                message: "The password you've have enterted does not match, please check and try again.",
            });
            //after the error is thrown, clear the field so the user can try again.
            $("#create_verify").val("");
            return;
        } else {
            // iziToast.success({
            //     title: 'Welcome!',
            //     message: "We're logging you in now!",
            // });
        }

        //check the number of digits in the password field exceed 10 digits.  If so then throw error and stop user
        if (parseInt($(password).val()) > 10 || parseInt($(confirmPass).val()) > 10) {
            iziToast.warning({
                title: 'Bad Value',
                timeout: 5000,
                message: 'Either your password or the confirmation exceeds 10 digits, please try again with less than 10 digits.'
            });
            //set the password & verify sections to an empty fields to try again.
            $('#create_pass').val('');
            $('#create_verify').val('')
            return;
        }
    });
});

//Below is the modal information that has been cleaned up.
$("#modal-custom-signup").iziModal({
    history: false,
    overlayClose: false,
    width: 600,
    overlayColor: 'rgba(0, 0, 0, 0.6)',
    transitionIn: 'bounceInDown',
    transitionOut: 'bounceOutDown',
    navigateCaption: true,
    navigateArrows: "false",
});

$("#modal-custom-login").iziModal({
    history: false,
    overlayClose: false,
    width: 600,
    overlayColor: 'rgba(0, 0, 0, 0.6)',
    transitionIn: 'bounceInDown',
    transitionOut: 'bounceOutDown',
    navigateCaption: true,
    navigateArrows: "false",
});

//this will handle the open and close of the modals
$(document).on('click', '#iLogIn', function(event) {
    event.preventDefault();
    $('#modal-custom-login').iziModal('open');
});

$(document).on('click', '#iRegister', function(event) {
    event.preventDefault();
    $('#modal-custom-signup').iziModal('open');
});

//extra stuff here.
// $("#modal-custom-signup").on('click', 'button.submit', function() {
//     console.log("in #modal-custom-signup #b_create on-click");
//     var newOwner = {};
//     // verify passwords match
//     if ($('#create_pass').val().trim() === $('#create_verify').val().trim()) {
//         newOwner = {
//             userName: $('#create_name').val().trim(),
//             passWord: $('#create_pass').val().trim()
//         }
//     }
//     // first, check if username exists
//     $.ajax("/api/owners/" + newOwner.userName, {
//         type: "GET",
//         data: newOwner
//     }).then(
//         function(owner) {
//             console.log("owner:", owner);
//             if (owner) {
//                 // popup/alert to choose new username
//                 iziToast.warning({
//                     timeout: 5000,
//                     title: 'Exisiting Owner',
//                     message: "Username already exists, please choose a new one!",
//                 });
//                 return false;
//             } else {
//                 // if not already existing, then create it
//                 $.ajax("/api/owners/new", {
//                     type: "POST",
//                     data: newOwner
//                 }).then(
//                     function() {
//                         console.log("created new User");

//                         // one thing we need to do is have the OwnerId available to the app
//                         // so, for now, store the username in localStorage
//                         localStorage.setItem("username", newOwner.userName);
//                         //Shift the screen to the next page at this point.
//                         window.location.href = ("teamEdit.html");
//                         // now dismiss the modal and switch to teamEdit
//                         // TODO
//                     }
//                 );
//             }
//         }
//     );
// });

//information on making the ajax call will go below here.