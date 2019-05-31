$(document).ready(function() {
  var loggedInUser = localStorage.getItem("loggedIn");
  console.log(loggedInUser);

  if (loggedInUser === "false") {
    console.log("Not logged in yet cannot grab spouseId and table data");
  } else if (loggedInUser === "true") {
    var getCurrentSpouse = localStorage.getItem("spouseId");
    console.log("This is the current spouseId: ", getCurrentSpouse);

    $.ajax("api/interest/" + getCurrentSpouse, {
      type: "GET"
    }).then(function(response) {
      var isFalse = [];
      var isTrue = [];
      console.log("hi", response.length);

      for (var i = 0; i < response.length; i++) {
        if (response[i].type === false) {
          isFalse.push(response[i].note);
        } else {
          isTrue.push(response[i].note);
        }
      }

      $("#like").empty();

      for (var i = 0; i < isTrue.length; i++) {
        $("#like").append(`<li>${isTrue[i]}</li>`);
      }
      for (var i = 0; i < isFalse.length; i++) {
        $("#dislike").append(`<li>${isFalse[i]}</li>`);
      }
    });
  }
});
