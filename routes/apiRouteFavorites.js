var db = require("../models");

module.exports = function(app) {
  app.get("/api/favorites/:spouseid", function(req, res) {
    db.Favorites.findAll({
      where: {
        SpouseId: req.params.spouseid
      }
    }).then(function(Results) {
    //   console.log("Results is", Results)
      res.json(Results);
    });
  });
};
