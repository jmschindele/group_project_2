//
// 20MAY2019 Robin edit to /api/user/:username to get it returning a record on http://localhost:3000/api/user/robin3
//

var db = require("../models");

//                                           _              
//    _   _ ___  ___ _ __    _ __ ___  _   _| |_ ___  ___   
//   | | | / __|/ _ \ '__|  | '__/ _ \| | | | __/ _ \/ __|  
//   | |_| \__ \  __/ |     | | | (_) | |_| | ||  __/\__ \  
//    \__,_|___/\___|_|     |_|  \___/ \__,_|\__\___||___/  
//                                                          

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


  // POST route for saving a new User
  app.post("/api/user", function (req, res) {
    // create takes an argument of an object describing 
    // the item we want to insert into our table. 
    console.log("req.body is", req.body)
    db.User.create({
      userName: req.body.userName,
      password: req.body.password,
      hint: req.body.hint
    }).then(function (dbUser) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbUser);
    });
  });

  //                                                      _              
  //    ___ _ __   ___  _   _ ___  ___    _ __ ___  _   _| |_ ___  ___   
  //   / __| '_ \ / _ \| | | / __|/ _ \  | '__/ _ \| | | | __/ _ \/ __|  
  //   \__ \ |_) | (_) | |_| \__ \  __/  | | | (_) | |_| | ||  __/\__ \  
  //   |___/ .__/ \___/ \__,_|___/\___|  |_|  \___/ \__,_|\__\___||___/  
  //       |_|                                                           

  // Get user with matching userName
  app.get("/api/spouse/:userid", function (req, res) {
    db.Spouse.findAll({
      where: {
        UserId: req.params.userid
      }
    }).then(function (dbSpouse) {
      res.json(dbSpouse);
    });
  });

   // POST route for saving a new Spouse
   app.post("/api/spouse/:userid", function (req, res) {
    // create takes an argument of an object describing 
    // the item we want to insert into our table. 
    // console.log("req.body is", req.body)
    db.Spouse.create({
      spouseName: req.body.spousename,
      UserId: req.params.userid
    }).then(function (dbSpouse) {
      // We have access to the new spouse as 
      // an argument inside of the callback function
      res.json(dbSpouse);
    });
  }); 





  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};