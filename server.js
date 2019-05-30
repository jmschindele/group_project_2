require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes

require("./routes/apiRouteLovelang")(app);
require("./routes/apiRouteSpouse")(app);
require("./routes/apiRouteUser")(app);
require('./routes/apiRouteInterests')(app);
require("./routes/apiRouteFavorites")(app);
require("./routes/apiRouteDates")(app);
require("./routes/htmlRoutes")(app);

// Starting the server, syncing our models ------------------------------------/


// CHANGE FORCE BACK TO FALSE!!!!!!!!!!!!!!!!!!!!!!!
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
