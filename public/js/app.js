var $login = $('#login-submit');
var $userEmail = $('#user-email');
var $userPassword = $('#user-password');
var $logInScreen = $('#log-in-screen');
var $index = $('#index');

//login click handler
$login.on('click', function(e){
e.preventDefault();
var loginEmail = $userEmail.val().trim();
var loginPassword = $userPassword.val().trim();
$logInScreen.toggleClass('hidden');
$index.toggleClass('hidden');
console.log(loginEmail, loginPassword)
});