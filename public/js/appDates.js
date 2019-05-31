$(document).ready(function() {
  var loggedInCurrentUser = localStorage.getItem("loggedIn");
  console.log(loggedInCurrentUser);

  if (loggedInCurrentUser === "false") {
    console.log("Not logged in yet cannot grab spouseId and date table data");
  } else if (loggedInCurrentUser === "true") {
    // var getSpouse = localStorage.getItem("spouseId");
    var getSpouse = 1;
    console.log("This is the current spouseId: ", getSpouse);

    $.get("/api/dates/" + getSpouse, function(res) {
      for (var i = 0; i < res.length; i++) {
        $("#date-list").append(`
        <p>${res[i].event}</p>
        <p>${res[i].date}</p>
        <hr class='bg-3'>
        `);
      }
      // console.log("This is the date table data: ", datedata);
    });
  }
});
