var $login = $('#login-submit');
var $userEmail = $('#user-email');
var $userPassword = $('#user-password');

//login click handler
$login.on('click', function(e){
e.preventDefault();
var loginEmail = $userEmail.val().trim();
var loginPassword = $userPassword.val().trim();
console.log(loginEmail, loginPassword)
});