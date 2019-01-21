var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Dnd5e.findAll({
      limit : 5,
      order : [['createdAt' , 'DESC']]
    }).then(function(data) {
      var hbObj = {character: data};
      res.render("index", hbObj);
    });
  });

  // Load game pick page
  app.get("/game", function (req, res) {
    res.render("game-pick", {
      type1: "dnd5e"
    });
  });

  //Load character form page
  app.get("/form/:type", function (req, res) {
    if (req.params.type === "dnd5e") {
      res.render("form-dnd5e", {
        type: "dnd5e"
      });
    }
  });

  //Load print form page
  app.get("/form/:type/:id", function (req, res) {
    if (req.params.type = "dnd5e") {
      db.Dnd5e.findOne({
        where: {
          id: req.params.id
        }
      }).then(function (characterData) {
        res.render("print-dnd5e", {
          form: characterData
        });
      })
    }
  });

  //View all
  app.get("/creations/all", function (req, res) {
    db.Dnd5e.findAll().then(function (data) {
      var hbObj = { character: data };
      console.log(data);
      res.render("view-all", hbObj);
    });
  });

  //View users
  app.get("/creations/:users", function (req, res) {
    db.Dnd5e.findAll({}).then(function (characterData) {
      res.render("view-all", {
        all: characterData
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
