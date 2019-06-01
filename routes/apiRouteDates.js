//

var db = require("../models");

module.exports = function(app) {
  // -----------------------------------
  // Get all events for a spouse
  // -----------------------------------

  app.get("/api/dates/:spouseid", function(req, res) {
    db.Dates.findAll({
      where: {
        SpouseId: req.params.spouseid
      },
      order: [["date", "ASC"], ["event", "ASC"]],
      attributes: ["id", "date", "event"]
    }).then(function(DatesToRemember) {
      //console.log ("DatesToRemember is ", DatesToRemember)
      res.json(DatesToRemember);
    });
  });

  // -----------------------------------------
  // POST route for saving new Love Languages
  // -----------------------------------------
  app.post("/api/dates/", function(req, res) {
    ////console.log("req.body in post is", req.body)
    db.Dates.create({
      date: req.body.date,
      event: req.body.event,
      SpouseId: req.body.spouseId
    }).then(function(AddedEvent) {
      // We have the new event inside of the callback function
      ////console.log("AddedEvent was ", AddedEvent)
      res.json(AddedEvent);
    });
  });
};
