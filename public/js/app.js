//
// change 1JUN2019 by Robin to format and add comments
//

var loggedInUserId;
var currentSpouseId;
var countInterest = 0;

var $addDate = $("#add-date");
var $dateForm = $("#date-form");
var $addInterest = $('#add-interest');
var $interestForm = $('#interest-form');
var $addFavorite = $('#add-favorite');
var $favoriteForm = $('#favorite-form');
var $addNewUserName = $("#new-username");
var $addNewPassword = $("#new-password");
var $addNewHint = $("#new-hint");

var $login = $("#login-submit");
var $userName = $('#user-email');
var $userPassword = $("#user-password");
var $logInScreen = $("#log-in-screen");
var $index = $("#index");
var $addSpouse = $("#add-spouse");
var $spouseForm = $("#spouse-form");

// variables for new user handler

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

// ---------------------------------------------------
// store empty blanks in a variable for future updates
// ---------------------------------------------------

var newDateEntry = `
<br>
<input placeholder="Event" class="form-control">
<input placeholder="Date" type='date' class="form-control">
`;

var newFavoriteEntry = `
<br>
<input placeholder='article' class='form-control'>
<input placeholder='Size' class='form-control'>
<input placeholder='Notes' class='form-control'>
`;

var newSpouseEntry =
  '<input placeholder="Spouse Name" id= "new-spouse" class="form-control"></input>';
// --------------------------------------
// Add love language drop down selections
// --------------------------------------

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

//        _                                       _                         _       
//     __| | ___   ___ _   _ _ __ ___   ___ _ __ | |_    _ __ ___  __ _  __| |_   _ 
//    / _` |/ _ \ / __| | | | '_ ` _ \ / _ \ '_ \| __|  | '__/ _ \/ _` |/ _` | | | |
//   | (_| | (_) | (__| |_| | | | | | |  __/ | | | |_   | | |  __/ (_| | (_| | |_| |
//    \__,_|\___/ \___|\__,_|_| |_| |_|\___|_| |_|\__|  |_|  \___|\__,_|\__,_|\__, |
//                                                                            |___/ 

$(document).ready(function () {

  // ----------------------------------
  // Check if user is already logged in
  // ----------------------------------

  var loggedIn = localStorage.getItem('loggedIn');
  console.log("In app.js, logged in flag was", loggedIn)

  if (loggedIn === "true") {
    var currentUserId = localStorage.getItem('currentUser');
    // if user is already logged in, hide the log in div
    $('#log-in-screen').attr('class', 'hidden');
    $('#index').toggleClass('hidden');
    console.log("In app.js, user (" + currentUserId + ") is logged in with SpouseID = " + currentUserSpouse);
  } else {
    console.log('In app.js, no user is logged in')
  };

});

//                       _ _      _         _            _     _ ____        _       
//     ___  _ __     ___| (_) ___| | __    | |  __ _  __| | __| |  _ \  __ _| |_ ___ 
//    / _ \| '_ \   / __| | |/ __| |/ /   / __)/ _` |/ _` |/ _` | | | |/ _` | __/ _ \
//   | (_) | | | | | (__| | | (__|   <    \__ \ (_| | (_| | (_| | |_| | (_| | ||  __/
//    \___/|_| |_|  \___|_|_|\___|_|\_\   (   /\__,_|\__,_|\__,_|____/ \__,_|\__\___|
//                                         |_|                                       

$addDate.on("click", function (e) {
  e.preventDefault();
  $dateForm.prepend(newDateEntry);
});

//                       _ _      _         _            _     _ ___       _                     _   
//     ___  _ __     ___| (_) ___| | __    | |  __ _  __| | __| |_ _|_ __ | |_ ___ _ __ ___  ___| |_ 
//    / _ \| '_ \   / __| | |/ __| |/ /   / __)/ _` |/ _` |/ _` || || '_ \| __/ _ \ '__/ _ \/ __| __|
//   | (_) | | | | | (__| | | (__|   <    \__ \ (_| | (_| | (_| || || | | | ||  __/ | |  __/\__ \ |_ 
//    \___/|_| |_|  \___|_|_|\___|_|\_\   (   /\__,_|\__,_|\__,_|___|_| |_|\__\___|_|  \___||___/\__|
//                                         |_|                                                       

// -----------------------------------------------------------
// bug fix; without the count variable, the radio buttons will 
// only work in one location regardless of amount of rows
// -----------------------------------------------------------

$addInterest.on('click', function (e) {
  e.preventDefault();
  countInterest++;
  $interestForm.prepend(`
<br>
<input type='text' class='form-control' placeholder='Description'>
<input type='radio' name="isLike${countInterest}" value='like'> Like</input>
<input type='radio' name='isLike${countInterest}' value='dislike'> Dislike <br></input>
  `);
  return countInterest;
});

//                       _ _      _         _            _     _ _____                     _ _        
//     ___  _ __     ___| (_) ___| | __    | |  __ _  __| | __| |  ___|_ ___   _____  _ __(_) |_ ___  
//    / _ \| '_ \   / __| | |/ __| |/ /   / __)/ _` |/ _` |/ _` | |_ / _` \ \ / / _ \| '__| | __/ _ \ 
//   | (_) | | | | | (__| | | (__|   <    \__ \ (_| | (_| | (_| |  _| (_| |\ V / (_) | |  | | ||  __/ 
//    \___/|_| |_|  \___|_|_|\___|_|\_\   (   /\__,_|\__,_|\__,_|_|  \__,_| \_/ \___/|_|  |_|\__\___| 
//                                         |_|                                                        

$addFavorite.on('click', function (e) {
  e.preventDefault();
  $favoriteForm.prepend(newFavoriteEntry);
});

//                       _ _      _          _  _                                                     
//     ___  _ __     ___| (_) ___| | __    _| || |_ _ __   _____      __          _   _ ___  ___ _ __ 
//    / _ \| '_ \   / __| | |/ __| |/ /   |_  ..  _| '_ \ / _ \ \ /\ / /  _____  | | | / __|/ _ \ '__|
//   | (_) | | | | | (__| | | (__|   <    |_      _| | | |  __/\ V  V /  |_____| | |_| \__ \  __/ |   
//    \___/|_| |_|  \___|_|_|\___|_|\_\     |_||_| |_| |_|\___| \_/\_/            \__,_|___/\___|_|   
//                                                                                                    

$('#new-user').on('click', function (e) {
  e.preventDefault();
  //changes over to new-user-screen when click new user btn on login-screen
  $("#log-in-screen").toggleClass("hidden");
  $("#new-user-screen").toggleClass("hidden");
})

//                     _ _      _          _  _                                                               _               _ _   
//     ___  _ __   ___| (_) ___| | __    _| || |_ _ __   _____      __     _   _ ___  ___ _ __      ___ _   _| |__  _ __ ___ (_) |_ 
//    / _ \| '_ \ / __| | |/ __| |/ /   |_  ..  _| '_ \ / _ \ \ /\ / /____| | | / __|/ _ \ '__|____/ __| | | | '_ \| '_ ` _ \| | __|
//   | (_) | | | | (__| | | (__|   <    |_      _| | | |  __/\ V  V /_____| |_| \__ \  __/ | |_____\__ \ |_| | |_) | | | | | | | |_ 
//    \___/|_| |_|\___|_|_|\___|_|\_\     |_||_| |_| |_|\___| \_/\_/       \__,_|___/\___|_|       |___/\__,_|_.__/|_| |_| |_|_|\__|
//                                                                                                                                  
$("#new-user-submit").on("click", function(e) {
  e.preventDefault();
  var newUserName = $addNewUserName.val().trim();
  var newPassword = $addNewPassword.val().trim();
  var newHint = $addNewHint.val().trim();
  var newUserLoggedIn;

  // //console.log(newUserName, newPassword, newHint);

  if (newUserName === "" || newPassword === "") {
    alert("Please enter a valid username and password");
  } else {
    var newUser = {
      userName: newUserName,
      password: newPassword,
      hint: newHint
    };
    // //console.log(newUser);

    //sending new user information to user table in database
    $.post("/api/user", newUser, function(data) {
      localStorage.setItem("loggedIn", "true");

      $.get("/api/user/" + newUserName, function(data) {
        console.log("This is the get for new user data: ", data);
        newUserLoggedIn = data.id;
        localStorage.setItem("currentUser", newUserLoggedIn);
        console.log(newUserLoggedIn);
        getSpouse();
        // location.reload();
        $("#new-user-screen").toggleClass("hidden");
        $("#new1").toggleClass("hidden");
        $spouseForm.prepend(newSpouseEntry);
      });
    });
  }
});

//                     _ _      _         _  _             _       
//     ___  _ __   ___| (_) ___| | __    | || | ___   __ _(_)_ __  
//    / _ \| '_ \ / __| | |/ __| |/ /   / __) |/ _ \ / _` | | '_ \ 
//   | (_) | | | | (__| | | (__|   <    \__ \ | (_) | (_| | | | | |
//    \___/|_| |_|\___|_|_|\___|_|\_\   (   /_|\___/ \__, |_|_| |_|
//                                       |_|         |___/          

//login click handler
$login.on("click", function (e) {
  e.preventDefault();
  loggedIn = localStorage.getItem('loggedIn');
  localStorage.setItem("loggedIn", "true");
  console.log(loggedIn);
  var loginName = $userName.val().trim();
  var loginPassword = $userPassword.val().trim();
  var user;
  // return loggedIn;
  // console.log(loginName, loginPassword)

  // retrieve specific user information along with their spouses
  $.get("/api/user/" + loginName, function (data) {
    console.log(data);
    user = data;
    if (user === null) {
      alert("No matching username. Please try again or create an account");
    } else {
      loggedInUserId = user.id;
      localStorage.setItem("currentUser", loggedInUserId);
      // console.log(loggedInUserId);
      // console.log(user.password);
      if (loginPassword === user.password) {
        console.log("password matches you may enter");
        getSpouse();
        $logInScreen.toggleClass("hidden");
        $index.toggleClass("hidden");
        location.reload;
        // console.log(currentUserId);
      } else {
        console.log("incorrect password");
        localStorage.setItem("loggedIn", "false");
      }
    }

  });

  // location.reload();
});


//                     _ _      _          _                               _   
//     ___  _ __   ___| (_) ___| | __     | | ___   __ _        ___  _   _| |_ 
//    / _ \| '_ \ / __| | |/ __| |/ /     | |/ _ \ / _` |_____ / _ \| | | | __|
//   | (_) | | | | (__| | | (__|   <     _| | (_) | (_| |_____| (_) | |_| | |_ 
//    \___/|_| |_|\___|_|_|\___|_|\_\   (_)_|\___/ \__, |      \___/ \__,_|\__|
//                                                 |___/                                 |___/                           

$('.log-out').on('click', function (e) {
  e.preventDefault();
  localStorage.setItem("loggedIn", 'false');
  console.log('successfully logged out')
  location.reload();
})

//                                                                      _ _      _        
//    _ __   _____      __   _   _ ___  ___ _ __     ___  _ __      ___| (_) ___| | _____ 
//   | '_ \ / _ \ \ /\ / /  | | | / __|/ _ \ '__|   / _ \| '_ \    / __| | |/ __| |/ / __|
//   | | | |  __/\ V  V /   | |_| \__ \  __/ |     | (_) | | | |  | (__| | | (__|   <\__ \
//   |_| |_|\___| \_/\_/     \__,_|___/\___|_|      \___/|_| |_|   \___|_|_|\___|_|\_\___/
//                                                                                        

$newSub1.on("click", function (e) {
  e.preventDefault();
  addNewSpouse();
  getSpouse();
  $new1.toggleClass("hidden");
  $new2.toggleClass("hidden");
});

$newSub2.on("click", function (e) {
  e.preventDefault();
   addNewDate();
   getDates();
  $new2.toggleClass("hidden");
  $new3.toggleClass("hidden");
});

$newSub3.on("click", function (e) {
  e.preventDefault();
  addNewInterest();
  getInterest();
  $new3.toggleClass("hidden");
  $new4.toggleClass("hidden");
});

$newSub4.on("click", function (e) {
  e.preventDefault();
  addNewFavorite();
  getFavorite();
  $new4.toggleClass("hidden");
  $new5.toggleClass("hidden");
});

$newSub5.on('click', function (e) {
  e.preventDefault();
  newLoveLang();
  getLoveLang();
  $new5.toggleClass('hidden');
  $('#index').toggleClass('hidden');
})
                              

//              _     _ _   _                ____                                __  __  
//     __ _  __| | __| | \ | | _____      __/ ___| _ __   ___  _   _ ___  ___   / /  \ \ 
//    / _` |/ _` |/ _` |  \| |/ _ \ \ /\ / /\___ \| '_ \ / _ \| | | / __|/ _ \ | |    | |
//   | (_| | (_| | (_| | |\  |  __/\ V  V /  ___) | |_) | (_) | |_| \__ \  __/ | |    | |
//    \__,_|\__,_|\__,_|_| \_|\___| \_/\_/  |____/| .__/ \___/ \__,_|___/\___| | |    | |
//                                                |_|                           \_\  /_/ 
//

function addNewSpouse() {

  var loggedInId = localStorage.getItem("currentUser");
  newSpouse = {
    spouseName: $("#new-spouse")
      .val()
      .trim(),
    UserId: loggedInId
  };
  console.log("In addNewSpouse(), newSpouse.spouseName =", newSpouse.spouseName);
  console.log("In addNewSpouse(), newSpouse.UserId =", newSpouse.UserId);
  $.post("/api/spouse/", newSpouse);
}

//               _   ____                                __  __   
//     __ _  ___| |_/ ___| _ __   ___  _   _ ___  ___   / /  \ \  
//    / _` |/ _ \ __\___ \| '_ \ / _ \| | | / __|/ _ \ | |    | | 
//   | (_| |  __/ |_ ___) | |_) | (_) | |_| \__ \  __/ | |    | | 
//    \__, |\___|\__|____/| .__/ \___/ \__,_|___/\___| | |    | | 
//    |___/               |_|                           \_\  /_/  

function getSpouse() {
  var loggedInUserId = 'ERROR';
  loggedInUserId = localStorage.getItem("currentUser");

  if (loggedInUserId === 'ERROR') {
    console.log('Error, no user retrieved from local storage: ', loggedInUserId);
  } else {
    console.log("user should be equal to local storage: ", loggedInUserId);
    console.log('In function getSpouse, logginedInSpouse from local storage was', loggedInUserId);
  }

  $.get("/api/spouse/" + loggedInUserId, function (data) {
    console.log("current user's spouses: ", data);

    if (data.length === 0) {
      console.log("ERROR: In the getSpouse() data is empty no spouse is retrieved");
    }
    var currentSpouseId = data[0].id;
    console.log("In getSpouse(), the current spouse (from data[0]) Id was: ", currentSpouseId);

    localStorage.setItem("spouseId", JSON.parse(currentSpouseId));
    location.reload;

    var localStoredSpouse = "ERROR";
    localStoredSpouse = localStorage.getItem("spouseId");
    if (localStoredSpouse === "ERROR") {
      console.log("Error, no spouse retrieved from local storage");
    } else {
      console.log(
        "In function getSpouse, logginedInSpouse from local storage was",
        localStoredSpouse
      );
    }
  });
}

