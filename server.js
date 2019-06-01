//    ____                  _          
//   |  _ \ ___  __ _ _   _(_)_ __ ___ 
//   | |_) / _ \/ _` | | | | | '__/ _ \
//   |  _ <  __/ (_| | |_| | | | |  __/
//   |_| \_\___|\__, |\__,_|_|_|  \___|
//                 |_|                 
// 

require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var db = require("./models");

//    _____                               
//   | ____|_  ___ __  _ __ ___  ___ ___  
//   |  _| \ \/ / '_ \| '__/ _ \/ __/ __| 
//   | |___ >  <| |_) | | |  __/\__ \__ \ 
//   |_____/_/\_\ .__/|_|  \___||___/___/ 
//              |_|                       

var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(express.static("public"));


//  _   _                 _ _      _                     
// | | | | __ _ _ __   __| | | ___| |__   __ _ _ __ ___  
// | |_| |/ _` | '_ \ / _` | |/ _ \ '_ \ / _` | '__/ __| 
// |  _  | (_| | | | | (_| | |  __/ |_) | (_| | |  \__ \ 
// |_| |_|\__,_|_| |_|\__,_|_|\___|_.__/ \__,_|_|  |___/ 

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

//    _____                                 ____             _             
//   | ____|_  ___ __  _ __ ___  ___ ___   |  _ \ ___  _   _| |_ ___  ___  
//   |  _| \ \/ / '_ \| '__/ _ \/ __/ __|  | |_) / _ \| | | | __/ _ \/ __| 
//   | |___ >  <| |_) | | |  __/\__ \__ \  |  _ < (_) | |_| | ||  __/\__ \ 
//   |_____/_/\_\ .__/|_|  \___||___/___/  |_| \_\___/ \__,_|\__\___||___/ 
//              |_|                                                        

require("./routes/apiRouteLovelang")(app);
require("./routes/apiRouteSpouse")(app);
require("./routes/apiRouteUser")(app);
require("./routes/apiRouteInterests")(app);
require("./routes/apiRouteFavorites")(app);
require("./routes/apiRouteDates")(app);
require("./routes/htmlRoutes")(app);

//    ____  _             _      ____                  _           
//   / ___|| |_ __ _ _ __| |_   / ___|  ___ _ ____   _(_) ___ ___  
//   \___ \| __/ _` | '__| __|  \___ \ / _ \ '__\ \ / / |/ __/ _ \ 
//    ___) | || (_| | |  | |_    ___) |  __/ |   \ V /| | (_|  __/ 
//   |____/ \__\__,_|_|   \__|  |____/ \___|_|    \_/ |_|\___\___| 
//                                                                 

// CHANGE FORCE BACK TO FALSE!!!!!!!!!!!!!!!!!!!!!!!
db.sequelize.sync({
  force: false
}).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      "PORT",
      PORT
    );
  });
});

module.exports = app;