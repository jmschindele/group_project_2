var db = require("../models");

module.exports = function (app) {


  app.get("/api/interest/:spouseid", function (req, res) {
    db.Interests.findAll({
      where: {
        SpouseId: req.params.spouseid
      },
      order: [
        ['type', 'ASC'],
        ['note', 'ASC'],
      ],
      attributes: ['id', 'type', 'note']
    }).then(function (Results) {
      // console.log("Results is", Results)
      res.json(Results);
    });

  });

  // ------------------------------------
  // POST route for saving a new interest
  // added 5/30/2019 by Robin HC
  // ------------------------------------
  app.post("/api/interest/", function (req, res) {

    //console.log("req.body in post is", req.body)
    db.Interests.create({
      type: req.body.type,
      note: req.body.note,
      SpouseId: req.body.spouseid
    }).then(function (AddedInterest) {
      // We have the new interest inside of the callback function
      //console.log("AddedInterest was ", AddedInterest)
      res.json(AddedInterest);
    });
  });

};