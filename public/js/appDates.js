//for in loop to cycle through database dates
//each loop iteration needs to add a unique ID and append it to the card and the data-target
//append each item to the dates.handlebars page
//make sure to update the data-parent attribute

// {
/* <div class="card">
<div class="card-header" id="headingOne">
  <h2 class="mb-0">
    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Collapsible Group Item #1
    </button>
  </h2>
</div>

<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
  <div class="card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
  </div>
</div>
</div> */
// }

$(document).ready(function() {
  var loggedInCurrentUser = localStorage.getItem("loggedIn");
  console.log(loggedInCurrentUser);

  if (loggedInCurrentUser === "false") {
    console.log("Not logged in yet cannot grab spouseId and date table data");
  } else if (loggedInCurrentUser === "true") {
    var getSpouse = localStorage.getItem("spouseId");
    console.log("This is the current spouseId: ", getSpouse);

    $.get("/api/dates/" + getSpouse, function(datedata) {
      console.log("This is the date table data: ", datedata);
    });
  }
});
