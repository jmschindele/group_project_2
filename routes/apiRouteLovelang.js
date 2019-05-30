//
// 20MAY2019 Robin edit to /api/user/:username to get it returning a record on http://localhost:3000/api/user/robin3
// 21MAY2019 Robin added post route for user, added get and post for spouse
//

var db = require("../models");

module.exports = function (app) {

  // -----------------------------------
  // Get all love languages for a spouse 
  // -----------------------------------

  app.get("/api/lovelang/:spouseid", function (req, res) {
    db.Lovelang.findAll({
      where: {
        SpouseId: req.params.spouseid
      }
    }).then(function (Lovelangs) {
      //console.log("Lovelangs is", Lovelangs)
      res.json(Lovelangs);
    });

  });

    // -----------------------------------------
    // POST route for saving new Love Languages
    // -----------------------------------------
    app.post("/api/lovelang/", function (req, res) {
      // create takes an argument of an object describing 
      // the item we want to insert into our table. 
      //console.log("req.body in post is", req.body)
      db.Lovelang.create({
        LoveLanguage1: req.body.lovelanguage1,
        LoveLanguage2: req.body.lovelanguage2,
        LoveLanguage3: req.body.lovelanguage3,
        LoveLanguage4: req.body.lovelanguage4,
        LoveLanguage5: req.body.lovelanguage5,
          SpouseId: req.body.spouseId
      }).then(function (AddedLovelangs) {
          // We have the new love languages inside of the callback function
          //console.log("AddedLovelangs to add is", AddedLovelangs)
          res.json(AddedLovelangs);
      });
  });

};