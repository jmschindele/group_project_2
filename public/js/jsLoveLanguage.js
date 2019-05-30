$(document).ready(function() {
  var loggedInUser = localStorage.getItem("loggedIn");
  console.log(loggedInUser);

  if (loggedInUser === "false") {
    console.log("Not logged in yet cannot grab spouseId and table data");
  } else if (loggedInUser === "true") {
    var getCurrentSpouse = localStorage.getItem("spouseId");
    console.log("This is the current spouseId: ", getCurrentSpouse);

    $.get("/api/lovelang/" + getCurrentSpouse, function(lovedata) {
      console.log("This is the love table data: ", lovedata);
    });
  }
});
