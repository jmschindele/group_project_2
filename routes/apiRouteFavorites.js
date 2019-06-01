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


app.post('/api/favorites/', function(req, res) {

  db.Favorites.create({
    Article: req.body.Article,
    size: req.body.size,
    note: req.body.note,
    SpouseId: req.body.spouseId
  }).then(function (AddedEvent) {
    // We have the new event inside of the callback function
    //console.log("AddedEvent was ", AddedEvent)
    res.json(AddedEvent);
  });
});
};
