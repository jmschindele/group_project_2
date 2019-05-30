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
      console.log(lovedata[0].LoveLanguage1);

      if (`${lovedata[0].LoveLanguage1}` !== 'Please Select' && `${lovedata[0].LoveLanguage1}` !== '') {
      $('.add-ll').append(`<li>${lovedata[0].LoveLanguage1}</li>`);
      }

      if (`${lovedata[0].LoveLanguage2}` !== 'Please Select' && `${lovedata[0].LoveLanguage2}` !== '') {
        $('.add-ll').append(`<li>${lovedata[0].LoveLanguage2}</li>`);
        }
      

      if (`${lovedata[0].LoveLanguage3}` !== 'Please Select' && `${lovedata[0].LoveLanguage3}` !== '') {
        $('.add-ll').append(`<li>${lovedata[0].LoveLanguage3}</li>`);
        }


      if (`${lovedata[0].LoveLanguage4}` !== 'Please Select' && `${lovedata[0].LoveLanguage4}` !== '') {
        $('.add-ll').append(`<li>${lovedata[0].LoveLanguage4}</li>`);
        }


      if (`${lovedata[0].LoveLanguage5}` !== 'Please Select' && `${lovedata[0].LoveLanguage5}` !== '') {
        $('.add-ll').append(`<li>${lovedata[0].LoveLanguage5}</li>`);
        }

    
    });
  }
});