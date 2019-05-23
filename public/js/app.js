$(document).ready(function () {

    var $login = $('#login-submit');
    var $userEmail = $('#user-email');
    var $userPassword = $('#user-password');
    var $logInScreen = $('#log-in-screen');
    var $index = $('#index');

    //login click handler
    $login.on('click', function (e) {
      e.preventDefault();
      var loginEmail = $userEmail.val().trim();
      var loginPassword = $userPassword.val().trim();
      $logInScreen.toggleClass('hidden');
      $index.toggleClass('hidden');
      console.log(loginEmail, loginPassword)
    });


    // new user handler

    var $new1 = $('#new1');
    var $new2 = $('#new2');
    var $new3 = $('#new3');
    var $new4 = $('#new4');
    var $new5 = $('#new5');
    var $newSub1 = $('#newsub1');
    var $newSub2 = $('#newsub2');
    var $newSub3 = $('#newsub3');
    var $newSub4 = $('#newsub4');
    var $newSub5 = $('#newsub5');

    $newSub1.on('click', function (handler) {
      handler.preventDefault();
      $new1.toggleClass('hidden');
      $new2.toggleClass('hidden');
    });

    $newSub2.on('click', function (e) {
      e.preventDefault();
      $new2.toggleClass('hidden');
      $new3.toggleClass('hidden');
    });

    $newSub3.on('click', function (e) {
      e.preventDefault();
      $new3.toggleClass('hidden');
      $new4.toggleClass('hidden');
    });

    $newSub4.on('click', function (e) {
      e.preventDefault();
      $new4.toggleClass('hidden');
      $new5.toggleClass('hidden');
    })

  });
