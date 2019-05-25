$(document).ready(function() {
  var $login = $("#login-submit");
  var $userName = $('#user-email');
  var $userPassword = $("#user-password");
  var $logInScreen = $("#log-in-screen");
  var $index = $("#index");

  //login click handler
  $login.on("click", function(e) {
    e.preventDefault();
    var loginName = $userName.val().trim();
    var loginPassword = $userPassword.val().trim();
    var user;

    console.log(loginName, loginPassword)
    
    // retrieve specific user information along with their spouses
    $.get("/api/user/" + loginName, function(data) {
         console.log(data);
         user = data;
         if(user === null){
           alert("No matching username. Please try again or create an account");
         }else {
           console.log(user.password);
           if(loginPassword === user.password){
             console.log("yes we match");
             $logInScreen.toggleClass("hidden");
             $index.toggleClass("hidden");
           }else {
             alert("incorrect password");
           }
         }
         
       });
  });

  // new user handler

  var $new1 = $("#new1");
  var $new2 = $("#new2");
  var $new3 = $("#new3");
  var $new4 = $("#new4");
  var $new5 = $("#new5");
  var $newSub1 = $("#newsub1");
  var $newSub2 = $("#newsub2");
  var $newSub3 = $("#newsub3");
  var $newSub4 = $("#newsub4");
  var $newSub5 = $("#newsub5");

  $newSub1.on("click", function(handler) {
    handler.preventDefault();
    $new1.toggleClass("hidden");
    $new2.toggleClass("hidden");
  });

  $newSub2.on("click", function(e) {
    e.preventDefault();
    $new2.toggleClass("hidden");
    $new3.toggleClass("hidden");
  });

  $newSub3.on("click", function(e) {
    e.preventDefault();
    $new3.toggleClass("hidden");
    $new4.toggleClass("hidden");
  });

  $newSub4.on("click", function(e) {
    e.preventDefault();
    $new4.toggleClass("hidden");
    $new5.toggleClass("hidden");
  });

  $newSub5.on('click', function(e){
    e.preventDefault();
    $new5.toggleClass('hidden');
    $('#index').toggleClass('hidden');
  })

  //Handler for new spouse blanks

  var $addSpouse = $("#add-spouse");
  var $spouseForm = $("#spouse-form");
  // setting up new spouse blank as a variable so any formatting changes will apply
  var newSpouseEntry =
    '<input placeholder="Spouse Name" class="form-control"></input>';

  $addSpouse.on("click", function(e) {
    e.preventDefault();
    $spouseForm.prepend(newSpouseEntry);
  });
});

//Handler for new date blanks
var $addDate = $("#add-date");
var $dateForm = $("#date-form");
  //store empty blanks in a variable for future updates
var newDateEntry = 
`
<br>
<input placeholder="Event" class="form-control">
<input placeholder="Date" type='date' class="form-control">
`;

$addDate.on("click", function(e) {
  e.preventDefault();
  $dateForm.prepend(newDateEntry);
});

var $addInterest = $('#add-interest');
var $interestForm = $('#interest-form');

var newInterestEntry = `
<br>
<input type='text' class='form-control' placeholder='Description'>
<input type='radio' name="isLike" value='like'> Like</input>
<input type='radio' name='isLike' value='dislike'> Dislike <br></input>
`

$addInterest.on('click', function(e){
  e.preventDefault();
  $interestForm.prepend(newInterestEntry);
});


var $addFavorite = $('#add-favorite');
var $favoriteForm = $('#favorite-form');

var newFavoriteEntry = `
<br>
<input placeholder='article' class='form-control'>
<input placeholder='Size' class='form-control'>
<input placeholder='Notes' class='form-control'>
`

$addFavorite.on('click', function(e){
  e.preventDefault();
  $favoriteForm.prepend(newFavoriteEntry);
});


//Add love language drop down selections

for (var i = 0; i < 5; i++) {
  $('#lovelang-form').prepend(`
  <select>
    <option selected>Please Select</option>
    <option value='affirmation' >Words of Affirmation</option>
    <option value='service' >Acts of Service</option>
    <option value='gifts' >Receiving Gifts</option>
    <option value='quality-time'>Quality Time</option>
    <option value='physical-touch'>Physical Touch</option>
    <option value='na'>Not Sure</option>
</select>
  `)
}



//Click handler to take new user to spouse entry form
$('#add-spouse').on('click', function(e) {
  e.preventDefault();
  $('#index').toggleClass('hidden');
  $('#new1').toggleClass('hidden');
});


//new user submit click handler
var $addNewUserName = $("#new-username");
var $addNewPassword = $("#new-password");
var $addNewHint = $("#new-hint");

// when you click anywhere on the new-user-screen sends you to #index area
// $('#new-user-screen').on('click',function(e){
//   e.preventDefault();  
//   $('#index').toggleClass('hidden');
//   $('#new-user-screen').toggleClass('hidden');
// })

//changes over to new-user-screen when click new user btn on login-screen
$('#new-user').on('click', function(e){
  e.preventDefault();
  $("#log-in-screen").toggleClass("hidden");
  $("#new-user-screen").toggleClass("hidden");
})

//new user button on new user screen
$('#new-user-submit').on('click', function(e){
e.preventDefault();
var newUserName = $addNewUserName.val().trim();
var newPassword = $addNewPassword.val().trim();
var newHint = $addNewHint.val().trim();

console.log(newUserName, newPassword, newHint);

<<<<<<< HEAD
var newUser = {
  userName: newUserName,
  password: newPassword,
  hint: newHint
};
console.log(newUser);

//sending new user information to user table in database
$.post("/api/user", newUser);
//retrieve updated data for currentUser
$("#new-user-screen").toggleClass("hidden");
$("#log-in-screen").toggleClass("hidden");
});
