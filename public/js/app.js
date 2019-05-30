$(document).ready(function() {
  var loggedIn = localStorage.getItem("loggedIn");
  console.log(loggedIn);

  var currentUserId = localStorage.getItem("currentUser");
  // var currentUserSpouse = localStorage.getItem('spouseId');

  //log in functionality
  if (loggedIn === "true") {
    $("#log-in-screen").attr("class", "hidden");
    $("#index").toggleClass("hidden");
    console.log(currentUserId);
    // console.log(currentUserSpouse);
  } else {
    console.log("logged out");
  }

  //log out functionality
  $(".log-out").on("click", function(e) {
    e.preventDefault();
    localStorage.setItem("loggedIn", "false");
    localStorage.removeItem("spouseId");
    console.log("successfully logged out");
    location.reload();
  });

  var $login = $("#login-submit");
  var $userName = $("#user-email");
  var $userPassword = $("#user-password");
  var $logInScreen = $("#log-in-screen");
  var $index = $("#index");

  //login click handler
  var loggedInUserId;
  $login.on("click", function(e) {
    e.preventDefault();
    loggedIn = localStorage.getItem("loggedIn");
    localStorage.setItem("loggedIn", "true");
    console.log(loggedIn);
    var loginName = $userName.val().trim();
    var loginPassword = $userPassword.val().trim();
    var user;

    // return loggedIn;
    // console.log(loginName, loginPassword)

    // retrieve specific user information along with their spouses
    $.get("/api/user/" + loginName, function(data) {
      //  console.log(data);
      user = data;
      if (user === null) {
        alert("No matching username. Please try again or create an account");
      } else {
        loggedInUserId = user.id;
        localStorage.setItem("currentUser", loggedInUserId);
        // console.log(loggedInUserId);
        //  console.log(user.password);
        if (loginPassword === user.password) {
          //  console.log("yes we match");
          getSpouse();
          $logInScreen.toggleClass("hidden");
          $index.toggleClass("hidden");
          //  console.log(currentUserId);
        } else {
          alert("incorrect password");
          localStorage.setItem("loggedIn", "false");
        }
      }
    });

    location.reload();
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

  //add new spouse
  $newSub1.on("click", function(e) {
    e.preventDefault();

    addNewSpouse();
    getSpouse();

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

  $newSub5.on("click", function(e) {
    e.preventDefault();
    newLoveLang();
    getLoveLang();
    $new5.toggleClass("hidden");
    $("#index").toggleClass("hidden");
  });
});

// Handler for new spouse blanks

var $addSpouse = $("#add-spouse");
var $spouseForm = $("#spouse-form");
// setting up new spouse blank as a variable so any formatting changes will apply
var newSpouseEntry =
  '<input placeholder="Spouse Name" id= "new-spouse" class="form-control"></input>';

$addSpouse.on("click", function(e) {
  e.preventDefault();
  $spouseForm.prepend(newSpouseEntry);
});

function addNewSpouse() {
  var loggedInId = localStorage.getItem("currentUser");
  newSpouse = {
    spouseName: $("#new-spouse")
      .val()
      .trim(),
    UserId: loggedInId
  };
  console.log(newSpouse);
  $.post("/api/spouse/", newSpouse);
}

var currentSpouseId;

function getSpouse() {
  var loggedInSpouse = localStorage.getItem("currentUser");
  $.get("/api/spouse/" + loggedInSpouse, function(data) {
    console.log("current user's spouses: ", data);

    currentSpouseId = data[0].id;

    localStorage.setItem("spouseId", JSON.parse(currentSpouseId));

    // var spouseId = localStorage.getItem("spouseId");
    // console.log(spouseId);
    //currently set to get the user's 1st entered spouse
  });
}

//Handler for new date blanks
var $addDate = $("#add-date");
var $dateForm = $("#date-form");
//store empty blanks in a variable for future updates
var newDateEntry = `
<br>
<input placeholder="Event" class="form-control">
<input placeholder="Date" type='date' class="form-control">
`;

$addDate.on("click", function(e) {
  e.preventDefault();
  $dateForm.prepend(newDateEntry);
});

var $addInterest = $("#add-interest");
var $interestForm = $("#interest-form");

//bug fix; without the count variable, the radio buttons will only work in one location regardless of amount of rows
var count = 0;

$addInterest.on("click", function(e) {
  e.preventDefault();
  count++;
  $interestForm.prepend(`
<br>
<input type='text' class='form-control' placeholder='Description'>
<input type='radio' name="isLike${count}" value='like'> Like</input>
<input type='radio' name='isLike${count}' value='dislike'> Dislike <br></input>
  `);
  return count;
});

var $addFavorite = $("#add-favorite");
var $favoriteForm = $("#favorite-form");

var newFavoriteEntry = `
<br>
<input placeholder='article' class='form-control'>
<input placeholder='Size' class='form-control'>
<input placeholder='Notes' class='form-control'>
`;

$addFavorite.on("click", function(e) {
  e.preventDefault();
  $favoriteForm.prepend(newFavoriteEntry);
});

//Add love language drop down selections

for (var i = 0; i < 5; i++) {
  $("#lovelang-form").append(`
  <br>
  <select id='ll${i}'>
    <option selected>Please Select</option>
    <option value='<h4>Words of Affirmation</h4>
    <p>This love language expresses love with words that build up your partner. Verbal compliments don’t have to be complicated; the shortest and simplest words of affirmation can be the most effective.</p>
'>Words of Affirmation</option>

    <option value='<h4>Acts of Service</h4>
    <p>This love language expresses itself by doing things that you know your spouse would like. Cooking a meal, doing the laundry, and picking up a prescription are all acts of service. They require some thought, time, and effort.</p>' >Acts of Service</option>
    
    <option value='<h4>Receiving Gifts</h4>
    <p>This love language isn’t necessarily materialistic. It just means that a meaningful or thoughtful gift makes them feel appreciated and loved. Something as simple as picking up a pint of their favorite ice cream after a long work week can make an impact on this love language.</p>            
    ' >Receiving Gifts</option>

    <option value='<h4>Quality Time</h4>
    <p>This love language is all about undivided attention. No televisions, no smartphones, or any other distractions. They think talk is cheap and the type of action they want is to be your main focus.</p>
    '>Quality Time</option>

    <option value='<h4>Physical Touch</h4>
<p>To this love language, nothing is more impactful than the physical touch of their partner. They aren’t necessarily into over-the-top PDA, but they do feel more connected and safe in a relationship by holding hands, kissing, hugging, etc.</p>
'>Physical Touch</option>

    <option value=''>Not Sure</option>
</select>
  `);
}

function newLoveLang() {
  var grabSpouseId = localStorage.getItem("spouseId");

  var loveLangPriorities = {
    lovelanguage1: $("#ll0")
      .find(":selected")
      .text(),
    lovelanguage2: $("#ll1")
      .find(":selected")
      .text(),
    lovelanguage3: $("#ll2")
      .find(":selected")
      .text(),
    lovelanguage4: $("#ll3")
      .find(":selected")
      .text(),
    lovelanguage5: $("#ll4")
      .find(":selected")
      .text(),
    spouseId: grabSpouseId
  };
  console.log(loveLangPriorities);

  $.post("/api/lovelang/", loveLangPriorities);
  // console.log(grabSpouseId);
}

function getLoveLang() {
  var grabSpouse = localStorage.getItem("spouseId");
  console.log("This is the current spouseId", grabSpouse);
  $.get("/api/lovelang/" + grabSpouse, function(lovedata) {
    console.log("This is the new love table data: ", lovedata);
  });
}

//Click handler to take new user to spouse entry form
$("#add-spouse").on("click", function(e) {
  e.preventDefault();
  $("#index").toggleClass("hidden");
  $("#new1").toggleClass("hidden");
});

//new user submit click handler
var $addNewUserName = $("#new-username");
var $addNewPassword = $("#new-password");
var $addNewHint = $("#new-hint");

//changes over to new-user-screen when click new user btn on login-screen
$("#new-user").on("click", function(e) {
  e.preventDefault();
  $("#log-in-screen").toggleClass("hidden");
  $("#new-user-screen").toggleClass("hidden");
});

//new user button on new user screen
$("#new-user-submit").on("click", function(e) {
  e.preventDefault();
  var newUserName = $addNewUserName.val().trim();
  var newPassword = $addNewPassword.val().trim();
  var newHint = $addNewHint.val().trim();

  // console.log(newUserName, newPassword, newHint);

  if (newUserName === "" || newPassword === "") {
    alert("Please enter a valid username and password");
  } else {
    var newUser = {
      userName: newUserName,
      password: newPassword,
      hint: newHint
    };
    // console.log(newUser);

    //sending new user information to user table in database
    $.post("/api/user", newUser);
    $("#new-user-screen").toggleClass("hidden");
    $("#log-in-screen").toggleClass("hidden");
  }
});

//new user button on new user screen
$("#new-user-submit").on("click", function(e) {
  e.preventDefault();
  var newUserName = $addNewUserName.val().trim();
  var newPassword = $addNewPassword.val().trim();
  var newHint = $addNewHint.val().trim();

  console.log(newUserName, newPassword, newHint);

  if (newUserName === "" || newPassword === "") {
    alert("Please enter a valid username and password");
  } else {
    var newUser = {
      userName: newUserName,
      password: newPassword,
      hint: newHint
    };
    console.log(newUser);
    loggedIn = localStorage.setItem("loggedIn", "true");
    //sending new user information to user table in database
    $.post("/api/user", newUser);
    $("#new-user-screen").toggleClass("hidden");
    $("#index").toggleClass("hidden");
  }
});
