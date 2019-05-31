

$('#click').on('click', function(){


$.ajax("api/dates/1", {
  type: "GET"
}).then(function(response) {

for (var i = 0; i<response.length;i++) {

$('#date-list').append(`
<p>${response[i].event}</p>
<p>${response[i].date}</p>
<hr class='bg-3'>
`)

}

  // console.log("hi", response);
});


});
