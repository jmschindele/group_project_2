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

};