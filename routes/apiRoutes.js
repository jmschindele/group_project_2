//
// 20MAY2019 Robin edit to /api/user/:username to get it returning a record on http://localhost:3000/api/user/robin3
//

var db = require("../models");

module.exports = function (app) {
    // Get user with matching userName
    app.get("/api/user/:username", function (req, res) {
      db.User.findAll({
        where: {
          userName: req.params.username
        }
      }).then(function (dbUsers) {
        res.json(dbUsers);
      });
    });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
