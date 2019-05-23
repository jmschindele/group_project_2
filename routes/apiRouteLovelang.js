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
    db.Spouse.findAll({
      where: {
        SpouseId: req.params.spouseid
      },
      order: [
        ['Priority', 'ASC'],
        ['LoveLanguage', 'ASC'],
    ],
    }).then(function (Lovelangs) {
      res.json(Lovelangs);
    });

  });

};




 