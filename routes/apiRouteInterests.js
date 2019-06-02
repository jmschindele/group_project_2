var db = require("../models");

module.exports = function(app) {
  app.get("/api/interest/:spouseid", function(req, res) {
    db.Interests.findAll({
      where: {
        SpouseId: req.params.spouseid
      },
      order: [["type", "ASC"], ["note", "ASC"]],
      attributes: ["id", "type", "note"]
    }).then(function(Results) {
      // console.log("Results is", Results)
      res.json(Results);
    });
  });

  // ------------------------------------
  // POST route for saving a new interest
  // added 5/30/2019 by Robin HC
  // ------------------------------------
  app.post("/api/interest/", function(req, res) {
    //console.log("req.body in post is", req.body)
    db.Interests.create({
      // id: req.body.id,
      type: req.body.type,
      note: req.body.note,
      SpouseId: req.body.SpouseId
    }).then(function(AddedInterest) {
      // We have the new interest inside of the callback function
      //console.log("AddedInterest was ", AddedInterest)
      res.json(AddedInterest);
    });
  });

  app.delete("/api/interest/:id", function(req, res) {
    //console.log('req.body in post is', req.body)
    console.log(req.params.id)
    db.Interests.destroy({
      where: {
      Id: req.params.id }
    }).then(function(response) {
      console.log('deleted ',response)
      res.json(response);
    
    });
  });
};
