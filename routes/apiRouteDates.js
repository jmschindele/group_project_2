//

var db = require("../models");

module.exports = function (app) {

  // -----------------------------------
  // Get all events for a spouse 
  // -----------------------------------

  app.get("/api/dates/:spouseid", function (req, res) {
    db.Dates.findAll({
      where: {
        SpouseId: req.params.spouseid
      },
      order: [
        ['date', 'ASC'],
        ['event', 'ASC']
      ],
      attributes: ['id', 'date', 'event']
    }).then(function (DatesToRemember) {
      res.json(DatesToRemember);
    });

  });

};