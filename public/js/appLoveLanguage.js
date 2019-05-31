$(document).ready(function() {
  var loggedInUser = localStorage.getItem("loggedIn");
  console.log(loggedInUser);

  if (loggedInUser === "false") {
    console.log("Not logged in yet cannot grab spouseId and table data");
  } else if (loggedInUser === "true") {
    var getCurrentSpouse = localStorage.getItem("spouseId");
    console.log("This is the current spouseId: ", getCurrentSpouse);

    var langDef = "";

    $.get("/api/lovelang/" + getCurrentSpouse, function(lovedata) {
      console.log("This is the love table data: ", lovedata);

      // console.log(lovedata[0].LoveLanguage1);
      if (lovedata.length > 0) {
        if (
          `${lovedata[0].LoveLanguage1}` !== "Please Select" &&
          `${lovedata[0].LoveLanguage1}` !== ""
        ) {
          var lang = lovedata[0].LoveLanguage1;

          switch (lang) {
            case "Words of Affirmation":
              langDef =
                "<p>This love language expresses love with words that build up your partner. Verbal compliments don’t have to be complicated; the shortest and simplest words of affirmation can be the most effective.</p>";
              break;

            case "Acts of Service":
              langDef =
                "<p>This love language expresses itself by doing things that you know your spouse would like. Cooking a meal, doing the laundry, and picking up a prescription are all acts of service. They require some thought, time, and effort.</p>";
              break;

            case "Receiving Gifts":
              langDef =
                "<p>This love language isn’t necessarily materialistic. It just means that a meaningful or thoughtful gift makes them feel appreciated and loved. Something as simple as picking up a pint of their favorite ice cream after a long work week can make an impact on this love language.</p>";
              break;

            case "Quality Time":
              langDef =
                "<p>This love language is all about undivided attention. No televisions, no smartphones, or any other distractions. They think talk is cheap and the type of action they want is to be your main focus.</p>";
              break;

            case "Physical Touch":
              langDef =
                "<p>To this love language, nothing is more impactful than the physical touch of their partner. They aren’t necessarily into over-the-top PDA, but they do feel more connected and safe in a relationship by holding hands, kissing, hugging, etc.</p>";
              break;

            default:
              break;
          }

          $(".add-ll").append(`<li><h4>${lovedata[0].LoveLanguage1}</h4>
      <p>${langDef}</p>
          </li>`);
        }
      }

      if (lovedata.length > 0) {
        if (
          `${lovedata[0].LoveLanguage2}` !== "Please Select" &&
          `${lovedata[0].LoveLanguage2}` !== ""
        ) {
          var lang = lovedata[0].LoveLanguage2;

          switch (lang) {
            case "Words of Affirmation":
              langDef =
                "<p>This love language expresses love with words that build up your partner. Verbal compliments don’t have to be complicated; the shortest and simplest words of affirmation can be the most effective.</p>";
              break;

            case "Acts of Service":
              langDef =
                "<p>This love language expresses itself by doing things that you know your spouse would like. Cooking a meal, doing the laundry, and picking up a prescription are all acts of service. They require some thought, time, and effort.</p>";
              break;

            case "Receiving Gifts":
              langDef =
                "<p>This love language isn’t necessarily materialistic. It just means that a meaningful or thoughtful gift makes them feel appreciated and loved. Something as simple as picking up a pint of their favorite ice cream after a long work week can make an impact on this love language.</p>";
              break;

            case "Quality Time":
              langDef =
                "<p>This love language is all about undivided attention. No televisions, no smartphones, or any other distractions. They think talk is cheap and the type of action they want is to be your main focus.</p>";
              break;

            case "Physical Touch":
              langDef =
                "<p>To this love language, nothing is more impactful than the physical touch of their partner. They aren’t necessarily into over-the-top PDA, but they do feel more connected and safe in a relationship by holding hands, kissing, hugging, etc.</p>";
              break;

            default:
              break;
          }

          $(".add-ll").append(`<li><h4>${lovedata[0].LoveLanguage2}</h4>
      <p>${langDef}</p>
          </li>`);
        }
      }

      if (lovedata.length > 0) {
        if (
          `${lovedata[0].LoveLanguage3}` !== "Please Select" &&
          `${lovedata[0].LoveLanguage3}` !== ""
        ) {
          var lang = lovedata[0].LoveLanguage3;

          switch (lang) {
            case "Words of Affirmation":
              langDef =
                "<p>This love language expresses love with words that build up your partner. Verbal compliments don’t have to be complicated; the shortest and simplest words of affirmation can be the most effective.</p>";
              break;

            case "Acts of Service":
              langDef =
                "<p>This love language expresses itself by doing things that you know your spouse would like. Cooking a meal, doing the laundry, and picking up a prescription are all acts of service. They require some thought, time, and effort.</p>";
              break;

            case "Receiving Gifts":
              langDef =
                "<p>This love language isn’t necessarily materialistic. It just means that a meaningful or thoughtful gift makes them feel appreciated and loved. Something as simple as picking up a pint of their favorite ice cream after a long work week can make an impact on this love language.</p>";
              break;

            case "Quality Time":
              langDef =
                "<p>This love language is all about undivided attention. No televisions, no smartphones, or any other distractions. They think talk is cheap and the type of action they want is to be your main focus.</p>";
              break;

            case "Physical Touch":
              langDef =
                "<p>To this love language, nothing is more impactful than the physical touch of their partner. They aren’t necessarily into over-the-top PDA, but they do feel more connected and safe in a relationship by holding hands, kissing, hugging, etc.</p>";
              break;

            default:
              break;
          }

          $(".add-ll").append(`<li><h4>${lovedata[0].LoveLanguage3}</h4>
      <p>${langDef}</p>
          </li>`);
        }
      }

      if (lovedata.length > 0) {
        if (
          `${lovedata[0].LoveLanguage4}` !== "Please Select" &&
          `${lovedata[0].LoveLanguage4}` !== ""
        ) {
          var lang = lovedata[0].LoveLanguage4;

          switch (lang) {
            case "Words of Affirmation":
              langDef =
                "<p>This love language expresses love with words that build up your partner. Verbal compliments don’t have to be complicated; the shortest and simplest words of affirmation can be the most effective.</p>";
              break;

            case "Acts of Service":
              langDef =
                "<p>This love language expresses itself by doing things that you know your spouse would like. Cooking a meal, doing the laundry, and picking up a prescription are all acts of service. They require some thought, time, and effort.</p>";
              break;

            case "Receiving Gifts":
              langDef =
                "<p>This love language isn’t necessarily materialistic. It just means that a meaningful or thoughtful gift makes them feel appreciated and loved. Something as simple as picking up a pint of their favorite ice cream after a long work week can make an impact on this love language.</p>";
              break;

            case "Quality Time":
              langDef =
                "<p>This love language is all about undivided attention. No televisions, no smartphones, or any other distractions. They think talk is cheap and the type of action they want is to be your main focus.</p>";
              break;

            case "Physical Touch":
              langDef =
                "<p>To this love language, nothing is more impactful than the physical touch of their partner. They aren’t necessarily into over-the-top PDA, but they do feel more connected and safe in a relationship by holding hands, kissing, hugging, etc.</p>";
              break;

            default:
              break;
          }

          $(".add-ll").append(`<li><h4>${lovedata[0].LoveLanguage4}</h4>
      <p>${langDef}</p>
          </li>`);
        }
      }

      if (lovedata.length > 0) {
        if (
          `${lovedata[0].LoveLanguage5}` !== "Please Select" &&
          `${lovedata[0].LoveLanguage5}` !== ""
        ) {
          var lang = lovedata[0].LoveLanguage5;

          switch (lang) {
            case "Words of Affirmation":
              langDef =
                "<p>This love language expresses love with words that build up your partner. Verbal compliments don’t have to be complicated; the shortest and simplest words of affirmation can be the most effective.</p>";
              break;

            case "Acts of Service":
              langDef =
                "<p>This love language expresses itself by doing things that you know your spouse would like. Cooking a meal, doing the laundry, and picking up a prescription are all acts of service. They require some thought, time, and effort.</p>";
              break;

            case "Receiving Gifts":
              langDef =
                "<p>This love language isn’t necessarily materialistic. It just means that a meaningful or thoughtful gift makes them feel appreciated and loved. Something as simple as picking up a pint of their favorite ice cream after a long work week can make an impact on this love language.</p>";
              break;

            case "Quality Time":
              langDef =
                "<p>This love language is all about undivided attention. No televisions, no smartphones, or any other distractions. They think talk is cheap and the type of action they want is to be your main focus.</p>";
              break;

            case "Physical Touch":
              langDef =
                "<p>To this love language, nothing is more impactful than the physical touch of their partner. They aren’t necessarily into over-the-top PDA, but they do feel more connected and safe in a relationship by holding hands, kissing, hugging, etc.</p>";
              break;

            default:
              break;
          }

          $(".add-ll").append(`<li><h4>${lovedata[0].LoveLanguage5}</h4>
      <p>${langDef}</p>
          </li>`);
        }
      }
    });
  }
});
