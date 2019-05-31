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

  // POST route for saving new Favorites

  app.post("/api/favorites/", function (req, res) {
    //console.log("req.body in post is", req.body)
    db.Favorites.create({
      Article: req.body.article,
      size: req.body.size,
      note: req.body.note,
      SpouseId: req.body.spouseId
    }).then(function (AddedFavorite){
      //We have the new event inside of the callback function
      //console.log("AddedFavorite was ", AddedFavorite)
      res.json(AddedFavorite);
    });
  });
};
