$(document).ready(function() {
  var loggedInUser = localStorage.getItem("loggedIn");
  console.log(loggedInUser);

  if (loggedInUser === "false") {
    console.log("Not logged in yet cannot grab spouseId and table data");
  } else if (loggedInUser === "true") {
    var getCurrentSpouse = localStorage.getItem("spouseId");
    //var getCurrentSpouse = 1;
    console.log("This is the current spouseId: ", getCurrentSpouse);

    $.get("/api/interest/" + getCurrentSpouse, function(response) {
      var isFalse = [];
      var isTrue = [];
      var isFalseId = [];
      var isTrueId = [];
      console.log(response);
      for (var i = 0; i < response.length; i++) {
        if (response[i].type === false) {
          isFalse.push(response[i].note);
          //track id
          isFalseId.push(response[i].id);
        } else {
          isTrue.push(response[i].note);
          //track id
          isTrueId.push(response[i].id);
        }
      }

      $("#like").empty();
      $("#dislike").empty();

      for (var i = 0; i < isTrue.length; i++) {
        $("#like").append(
          `<input id='delete' class='hidden delete-btn' data-id='${isTrueId[i]}'
          type='checkbox'></input><span id='${
            isTrueId[i]
          }' class='interest-item'>${
            isTrue[i]
          }</span><input type='text' class='form-control edit-line hidden' value="${
            isTrue[i]
          }"><br>`
        );
      }
      for (var i = 0; i < isFalse.length; i++) {
        $("#dislike").append(
          `<input id='delete' class='hidden delete-btn' data-id='${isFalseId[i]}' type='checkbox'></input><span id='${
            isFalseId[i]
          }' class='interest-item'>${
            isFalse[i]
          }</span><input type='text' class='form-control edit-line hidden' value="${
            isFalse[i]
          }"><br>`
        );
      }
    });
  }
});

//variables to stop editing and deleting at same time

var canEdit = true;
var canDelete = true;
var likeOrDislike;
var interestNote;

//handler for interests editing

$("body").on("click", "#delete-interest", function(e) {
  e.preventDefault();
  if (canDelete === true) {
    //show hidden delete column
    $(".delete-btn").toggleClass("hidden");
    //add confirm option
    $("#delete-interest").text("Confirm");
    $("#delete-interest").attr("id", "delete-confirm");
    canEdit = false;
  }
});

//Add Delete Request here
$("body").on("click", "#delete-confirm", function(e) {
  e.preventDefault();
  $("#delete-confirm").text("Delete");
  $("#delete-confirm").attr("id", "delete-interest");
  $(".delete-btn").toggleClass("hidden");

  var id;


console.log('preloop id ',id)
  var deleteThese = document.getElementsByClassName("delete-btn");
  console.log("delete these ", deleteThese);
  for (var i = 0; i < deleteThese.length; i++) {
    if (deleteThese[i].checked === true) {
      id = deleteThese[i].getAttribute("data-id");
      console.log("true ", id);

      $.ajax({
        url: "api/interest/" + id, //api delete route
        type: "DELETE"
      }).then(function(response) {
        console.log("deleted", response);
        canEdit = true;
      });
      location.reload();
    }
  }
});

//

$("body").on("click", "#edit-interest", function(e) {
  if (canEdit === true) {
    canDelete = false;
    e.preventDefault();
    $(".interest-item").toggleClass("hidden");
    $(".edit-line").toggleClass("hidden");
    $("#edit-interest").text("Save");
    $("#edit-interest").attr("id", "confirm-interest-edit");
    $(".add-btn").toggleClass("hidden");
    setTimeout(function() {
      $(".add-btn").toggleClass("animated infinite pulse");
    }, 100);
  }
});

$("body").on("click", "#confirm-interest-edit", function(e) {
  e.preventDefault();

  if (likeOrDislike === true) {
    interestNote = $("#newLike").val();
    // console.log("interest is like and this is the value: ", interestNote);
  } else if (likeOrDislike === false) {
    interestNote = $("#newDislike").val();
    // console.log("interest is dislike and this is the value: ", interestNote);
  }

  console.log("This is the value of interestNote: ", interestNote);

  var grabCurrentSpouse = localStorage.getItem("spouseId");

  var newInterest = {
    type: likeOrDislike,
    note: interestNote,
    SpouseId: grabCurrentSpouse
  };

  console.log(newInterest);

  $.post("/api/interest/", newInterest);
  $("#confirm-interest-edit").text("Edit");
  // var count = 0;
  $(".add-btn").toggleClass("hidden");
  location.reload();

  //API post request
  canDelete = true;
});

$(".add-btn-like").on("click", function(e) {
  e.preventDefault();
  likeOrDislike = true;
  // count++;
  $("#like").append(`
<input type='text' class='form-control' id="newLike" data-type='true' placeholder='Description'>
<br>
  `);
});

$(".add-btn-dislike").on("click", function(e) {
  e.preventDefault();
  likeOrDislike = false;
  // count++;
  $("#dislike").append(`

<input type='text' class='form-control' id="newDislike" data-type='false' placeholder='Description'>
<br>
  `);
});
