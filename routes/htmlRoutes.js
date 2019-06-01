var db = require("../models");

module.exports = function(app) {
  // Load index page
  // app.get("/", function(req, res) {
  //   res.redirect("/api/user/:username")
  // });

  app.get("/", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      //console.log(dbUser);
      res.render("index", { User: dbUser }); //switch out text for real index
    });
  });

  app.get("/lovelangs", function(req, res) {
    db.Lovelang.findAll({}).then(function(dblove) {
      //console.log(dblove);
      res.render("love-languages", { User: dblove }); //add in correct handlebars link for ll
    });
  });

  app.get("/interests", function(req, res) {
    db.Interests.findAll({}).then(function(dbInterests) {
      // //console.log(dbInterests);
      res.render("interests", { User: dbInterests }); //add in correct handlebars link for interests
    });
  });

  app.get("/dates", function(req, res) {
    db.Dates.findAll({}).then(function(dbDates) {
      //console.log(dbDates);
      res.render("dates", { User: dbDates }); //add in correct handlebars link for dates
    });
  });

  app.get("/favorites", function(req, res) {
    db.Favorites.findAll({}).then(function(dbfavs) {
      //console.log(dbfavs);
      res.render("favorites", { User: dbfavs }); //add in correct handlebars link for favorites
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
