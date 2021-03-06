$(document).ready(function() {
  var loggedIn = localStorage.getItem("loggedIn");
  //console.log(loggedIn);

  var currentUserId = localStorage.getItem("currentUser");
  // var currentUserSpouse = localStorage.getItem("spouseId");


  //log in functionality

//toggle off log in button, show log in forms.

  $('#login-display').on('click', function(e){
    e.preventDefault();
    $('#user-email').toggleClass('hidden')
    $('#user-password').toggleClass('hidden')
    $('#login-submit').toggleClass('hidden')
    $('#login-display').toggleClass('hidden')
  })


  
  if (loggedIn === "true") {
    $("#log-in-screen").attr("class", "hidden");
    $("#index").toggleClass("hidden");
    console.log(currentUserId);
    //console.log(currentUserSpouse);
  } else {
    //console.log("logged out");
  }

  //log out functionality
  $(".log-out").on("click", function(e) {
    e.preventDefault();
    localStorage.setItem("loggedIn", "false");
    localStorage.removeItem("spouseId");
    //console.log("successfully logged out");
    // location.reload();
    window.location.href = '/'
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
    //console.log(loggedIn);
    var loginName = $userName.val().trim();
    var loginPassword = $userPassword.val().trim();
    var user;

    // retrieve specific user information along with their spouses
    $.get("/api/user/" + loginName, function(data) {
      //  //console.log(data);
      user = data;
      if (user === null) {
        
        $('#user-email').val('');
        $('#user-password').val('');
        $('#log-in-screen').toggleClass('shake fast');
        setTimeout(function(){
          $('#log-in-screen').toggleClass('shake fast')
        }, 500)
      } else {
        loggedInUserId = user.id;
        localStorage.setItem("currentUser", loggedInUserId);
        // //console.log(loggedInUserId);
        //  //console.log(user.password);
        if (loginPassword === user.password) {
          console.log("password matches you may enter");
          getSpouse();
          location.reload();
          //console.log(currentUserId);
        } else {
          $('#log-in-screen').toggleClass('shake fast');
          $('#user-email').val('');
          $('#user-password').val('');
          setTimeout(function(){
            $('#log-in-screen').toggleClass('shake fast')
          }, 500)
          console.log("incorrect password");
          localStorage.setItem("loggedIn", "false");
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

  //add new spouse
  $newSub1.on("click", function(e) {
    e.preventDefault();

    addNewSpouse();
    getSpouse();

    // $new1.toggleClass("hidden");
    // $new2.toggleClass("hidden");
    $new1.toggleClass("fadeOut")
          $new1.on('animationend',function(){
          $new1.toggleClass("hidden");
          $new2.toggleClass("hidden");
        })
    $(".intro2").toggleClass('hidden fadeIn slow')
    $(".intro2").on("animationend",function(){
      $('#add-date').toggleClass('hidden fadeIn');
    })
    $('body').on('input','#eventInput',function(){
      if( $('#eventInput').val().length < 2) {
        $('#dateInput').toggleClass('hidden fadeIn slow')
      }
    })
    $('body').on('input','#dateInput', function(){
      if( $('#dateInput').val().length < 2) {
        $('#newsub2').toggleClass('hidden fadeIn slow')
      }
    })
  });

  $newSub2.on("click", function(e) {
    e.preventDefault();

    addNewDate();
    getDates();

    // $new2.toggleClass("hidden");
    // $new3.toggleClass("hidden");
    $new2.toggleClass("fadeOut")
          $new2.on('animationend',function(){
          $new2.toggleClass("hidden");
          $new3.toggleClass("hidden");
        })
    $(".intro3").toggleClass('hidden fadeIn slow')
    $(".intro3").on("animationend",function(){
      $('#add-interest').toggleClass('hidden fadeIn slow');
    })
    $('body').on('input','#addInt',function(){
      if( $('#addInt').val().length < 2) {
        $('#like-tag').toggleClass('hidden animated fadeIn slow');
        $('#true-check').toggleClass('hidden fadeIn slow');
        $('#dislike-tag').toggleClass('hidden animated fadeIn slow');
        $('#false-check').toggleClass('hidden fadeIn slow');
      }
    })
    $('body').on('click','#true-check', function(){
      if( document.getElementById('newsub3').classList.contains('hidden') ) {
        $('#newsub3').toggleClass('hidden fadeIn slow')
      }
    })
      $('body').on('click','#false-check', function(){
        if( document.getElementById('newsub3').classList.contains('hidden')) {
          $('#newsub3').toggleClass('hidden fadeIn slow')
        }
    })
  });

  $newSub3.on("click", function(e) {
    e.preventDefault();

    addNewInterest();
    getInterest();

    // $new3.toggleClass("hidden");
    // $new4.toggleClass("hidden");


    $new3.toggleClass("fadeOut")
          $new3.on('animationend',function(){
          $new3.toggleClass("hidden");
          $new4.toggleClass("hidden");
        })
    $(".intro4").toggleClass('hidden fadeIn slow')
    $(".intro4").on("animationend",function(){
      $('#add-favorite').toggleClass('hidden fadeIn');
    })
    $('body').on('input','#favArticle',function(){
      if( $('#favArticle').val().length < 2) {
        $('#favSize').toggleClass('hidden fadeIn slow')
      }
    })
    $('body').on('input','#favSize', function(){
      if( $('#favSize').val().length < 2) {
        $('#favNote').toggleClass('hidden fadeIn slow')
      }
    })
    $('body').on('input','#favNote', function(){
      if( $('#favNote').val().length < 2) {
        $('#newsub4').toggleClass('hidden fadeIn slow')
      }
    })
  

  
  });

  $newSub4.on("click", function(e) {
    e.preventDefault();

    addNewFavorite();
    getFavorite();

    // $new4.toggleClass("hidden");
    // $new5.toggleClass("hidden");

    $new4.toggleClass("fadeOut")
    $new4.on('animationend',function(){
    $new4.toggleClass("hidden");
    $new5.toggleClass("hidden");
  })
$(".intro5").toggleClass('hidden fadeIn slow')
$(".intro5").on("animationend",function(){
  $('.intro6').toggleClass('hidden fadeIn slow')})
  $('.intro6').on('animationend',function(){
  $('.intro7').toggleClass('hidden fadeIn slow')})
  $('.intro7').on('animationend', function(){
    
$('#ll0').toggleClass('hidden fadeIn')});

$('body').on('input','#ll0',function(){
  $('#ll1').toggleClass('hidden fadeIn slow')
})
$('body').on('input','#ll1',function(){
  $('#ll2').toggleClass('hidden fadeIn slow')
  $('#newsub5').toggleClass('hidden fadeIn slow')
})
$('body').on('input','#ll2',function(){
  $('#ll3').toggleClass('hidden fadeIn slow')
})
$('body').on('input','#ll3',function(){
  $('#ll4').toggleClass('hidden fadeIn slow')
})
$('body').on('input','#ll4',function(){
  // $('#newsub5').toggleClass('hidden fadeIn slow')
})
  


  $newSub5.on("click", function(e) {
    e.preventDefault();
    newLoveLang();
    getLoveLang();
    // $new5.toggleClass("hidden");
    $new5.toggleClass("fadeInDown bounceOut")
    $new5.on('animationend', function() {
      $new5.toggleClass('hidden');
    })
    $("#index").toggleClass("hidden fadeIn slow");
  });
});
  // Handler for new spouse blanks

  // var $addSpouse = $("#add-spouse");
  var $spouseForm = $("#spouse-form");
  // setting up new spouse blank as a variable so any formatting changes will apply
  var newSpouseEntry =
    '<input placeholder="Spouse Name" id="new-spouse" class="form-control"></input>';


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


  function getSpouse() {
    var loggedInUserId = "ERROR";
    loggedInUserId = localStorage.getItem("currentUser");
    if (loggedInUserId === "ERROR") {
      console.log(
        "Error, no user retrieved from local storage: ",
        loggedInUserId
      );
    } else {
      console.log("user should be equal to local storage: ", loggedInUserId);
      console.log(
        "In function getSpouse, logginedInSpouse from local storage was",
        loggedInUserId
      );

      $.get("/api/spouse/" + loggedInUserId, function(data) {
        console.log("current user's spouses: ", data);
  
        if (data.length === 0) {
          console.log(
            "ERROR: In the getSpouse() data is empty no spouse is retrieved"
          );
        }
        var currentSpouseId = data[0].id;
        console.log(
          "In getSpouse(), the current spouse (from data[0]) Id was: ",
          currentSpouseId
        );
  
        localStorage.setItem("spouseId", currentSpouseId);

  
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

  }

  //Handler for new date blanks
  var $addDate = $("#add-date");
  var $dateForm = $("#date-form");
  //store empty blanks in a variable for future updates
  var newDateEntry = `
<br>
<input placeholder="Event" type='text' id="eventInput" class="form-control animated fadeIn slow">
<input placeholder="Date" type='text' id="dateInput" class="form-control hidden animated">
`;

  $addDate.on("click", function(e) {
    e.preventDefault();
    
    $dateForm.prepend(newDateEntry);
    $addDate.toggleClass('hidden');
    // $('#eventInput').toggleClass('hidden fadeIn slow')
  });

  var $addInterest = $("#add-interest");
  var $interestForm = $("#interest-form");

  //bug fix; without the count variable, the radio buttons will only work in one location regardless of amount of rows
  var count = 0;

  function addNewDate() {
    var addEvent = $("#eventInput").val();
    var addDate = $("#dateInput").val();

    var grabCurrentSpouse = localStorage.getItem("spouseId");

    var newDate = {
      date: addDate,
      event: addEvent,
      spouseId: grabCurrentSpouse
    };

    console.log(newDate);

    $.post("/api/dates/", newDate);
  }

  function getDates() {
    var grabSpouseCurrent = localStorage.getItem("spouseId");
    //console.log(grabSpouseCurrent);
    console.log("This is the current spouseId", grabSpouseCurrent);

    $.get("/api/dates/" + grabSpouseCurrent, function(datedata) {
      console.log("This is the new date table data: ", datedata);
    });
  }

  $addInterest.on("click", function(e) {
    e.preventDefault();
    count++;
    $interestForm.prepend(`
<br>
<input type='text' class='form-control animated fadeIn slow' id='addInt' placeholder='Description'>
<input type='radio' class='hidden animated' id='true-check' name="isLike${count}" value='like'> <span id='like-tag' class='hidden'>Like</span></input>
<input type='radio' class='hidden animated' id='false-check' name='isLike${count}' value='dislike'> <span id='dislike-tag' class='hidden'>Dislike </span><br></input>
  `);
  $addInterest.toggleClass('hidden')
    return count;
  });

  var $addFavorite = $("#add-favorite");
  var $favoriteForm = $("#favorite-form");

  var newFavoriteEntry = `
<br>
<input placeholder='Article' id='favArticle' class='form-control animated fadeIn'>
<input placeholder='Size' id='favSize' class='form-control hidden animated'>
<input placeholder='Notes' id='favNote' class='form-control hidden animated'>
`;

  $addFavorite.on("click", function(e) {
    $addFavorite.toggleClass('hidden')
    e.preventDefault();
    $favoriteForm.prepend(newFavoriteEntry);
  });

  //Add love language drop down selections

  for (var i = 0; i < 5; i++) {
    $("#lovelang-form").append(`
  <br>
  <select id='ll${i}' class='hidden animated form-control'>
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
    //console.log(loveLangPriorities);

    $.post("/api/lovelang/", loveLangPriorities);
    // //console.log(grabSpouseId);
  }

  function getLoveLang() {
    var grabSpouse = localStorage.getItem("spouseId");
    //console.log("This is the current spouseId", grabSpouse);
    $.get("/api/lovelang/" + grabSpouse, function(lovedata) {
      //console.log("This is the new love table data: ", lovedata);
      location.reload;
    });
  }

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
    var newUserLoggedIn;

    // //console.log(newUserName, newPassword, newHint);

    if (newUserName === "" || newPassword === "") {
      $("#new-password").val('');
      $("#new-hint").val('');
      $('#new-user-screen').toggleClass('shake fast');
      setTimeout(function(){
        $('#new-user-screen').toggleClass('shake fast')
      }, 500)
      // alert("Please enter a valid username and password");
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
          // location.reload();
          $("#new-user-screen").toggleClass("fadeOut fast")
          $('#new-user-screen').on('animationend',function(){
          $("#new-user-screen").toggleClass("hidden");
          $("#new1").toggleClass("hidden");
          $('.intro1').toggleClass("hidden fadeIn slow");
          $('.intro1').on('animationend', function(){
              $('#spouse-form').toggleClass('hidden fadeIn slow')
          })
        })
          $spouseForm.prepend(newSpouseEntry);
          $('#new-spouse').on('input', function(){
            var inputField = $("#new-spouse").val();
            console.log('#new spouse', inputField)
            if ($("#new-spouse").val().length < 2) {
              $('#newsub1').toggleClass("hidden fadeIn slow")
            }
          })
        });
      });
    }
  });

  // new favorites post

  function addNewFavorite() {
    var addArticle = $("#favArticle")
      .val()
      .trim();
    var addSize = $("#favSize")
      .val()
      .trim();
    var addNote = $("#favNote")
      .val()
      .trim();

    var grabCurrentSpouse = localStorage.getItem("spouseId");

    var newFavorite = {
      Article: addArticle,
      size: addSize,
      note: addNote,
      spouseId: grabCurrentSpouse
    };

    //console.log(newFavorite);

    $.post("/api/favorites/", newFavorite);
  }

  //get favorites

  function getFavorite() {
    var grabSpouseCurrent = localStorage.getItem("spouseId");
    //console.log(grabSpouseCurrent);
    //console.log("This is the current spouseId", grabSpouseCurrent);

    $.get("/api/favorites/" + grabSpouseCurrent, function(response) {
      //console.log("This is the new date table data: ", response);
    });
  }

  // new Interests post

  function addNewInterest() {
    // var intId =
    //   $("#addInt")
    //     .val()
    //     .trim() || "";
    var intType = function() {
      if (document.getElementById("true-check").checked) {
        // //console.log('is true')
        return true;
      } else if (document.getElementById("false-check").checked) {
        // //console.log('is false')
        return false;
      }
    };
    var intNote = $("#addInt")
      .val()
      .trim();

    var grabCurrentSpouse = localStorage.getItem("spouseId");

    var newInterest = {
      // id: intId,
      type: intType(),
      note: intNote,
      SpouseId: grabCurrentSpouse
    };

    //console.log(newInterest);

    $.post("/api/interest/", newInterest);
  }

  //get Interests

  function getInterest() {
    //console.log('get interest called')
    var grabSpouseCurrent = localStorage.getItem("spouseId");
    //console.log(grabSpouseCurrent);
    //console.log("This is the current spouseId", grabSpouseCurrent);

    $.get("/api/interest/" + grabSpouseCurrent, function(response) {
      //console.log("This is the new date table data: ", response);
    });
  }
});





