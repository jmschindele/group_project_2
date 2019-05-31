// var spouseId = 1;

$('#click').on('click', function(){
   $.ajax("api/interest/" + spouseId, {
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
   
  for (var i = 0; i < isTrue.length; i++){
      $('#like').append(`<li>${isTrue[i]}</li>`);
  }
  for (var i = 0; i < isFalse.length; i++){
    $('#dislike').append(`<li>${isFalse[i]}</li>`);
}
  });
  });
