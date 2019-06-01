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
          `<input id='delete' class='hidden delete-btn' data-id='${
            isTrueId[i]
          }'
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
          `<input id='delete' class='hidden delete-btn' data-id='${isFalseId}' type='checkbox'></input><span id='${
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

  if (document.getElementById('delete').checked = true) {
    id = $('#delete').attr('data-id');
    console.log(id)
  }
  
  console.log('up a scope id =', id)

  $.ajax({
    url: 'api/interest/'+id , //api delete route
    type: 'DELETE'
  }).then(function(response){
    console.log('deleted', response)
  })


  canEdit = true;
 location.reload();
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
  }
});

$("body").on("click", "#confirm-interest-edit", function(e) {
  e.preventDefault();
  $("#confirm-interest-edit").text("Edit");
  // var count = 0;
  $(".add-btn").toggleClass("hidden");
  location.reload();

  //API post request
  canDelete = true;
});

// $('.add-btn').on('click', function(e){
//   e.preventDefault();
//   count++;
//   $('#additional-interests').append(`
// <br>
// <input type='text' class='form-control' placeholder='Description'>
// <input type='radio' name="isLike${count}" value='like'> Like</input>
// <input type='radio' name='isLike${count}' value='dislike'> Dislike <br></input>
//   `);
// })

$(".add-btn-like").on("click", function(e) {
  e.preventDefault();
  count++;
  $("#like").append(`

<input type='text' class='form-control' data-type='true' placeholder='Description'>
<br>
  `);
});

$(".add-btn-dislike").on("click", function(e) {
  e.preventDefault();
  count++;
  $("#dislike").append(`

<input type='text' class='form-control' data-type='false' placeholder='Description'>
<br>
  `);
});
