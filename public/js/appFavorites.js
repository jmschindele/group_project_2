$(document).ready(function() {
  console.log("asdokljn");
  var loggedInCurrentUser = localStorage.getItem("loggedIn");

  if (loggedInCurrentUser === "false") {
    console.log("Not logged in yet cannot grab spouseId and date table data");
  } else if (loggedInCurrentUser === "true") {
    var getSpouseNow = localStorage.getItem("spouseId");
    // var getSpouseNow = 1;
    console.log("This is the current spouseId: ", getSpouseNow);
    console.log("made it this far");

    $.get("/api/favorites/" + getSpouseNow, function(response) {
      console.log(response);

      var garment = response[0].Article;
      var size = response[0].size;
      var note = response[0].note;

      for (var i = 0; i < response.length; i++) {
        var garment = response[i].Article;
        var size = response[i].size;
        var note = response[i].note;
        console.log("garment: ", garment, "size: ", size, "Notes: ", note);

        $("#accordion").append(
          `
<div class="card">
<div class="card-header" id="heading${i}">
  <h5 class="mb-0">
    <button class="btn btn-link" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
      ${garment} 
    </button>
  </h5>
</div>

<div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordion">
<div class="card-body">
Size: ${size} <br><br>
 
${note}
</div>
</div>
</div>
`
        );
      }
    });
  }
});
