var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Dnd5e.findAll({ limit : 5 }).then(function(characterData) {
      res.render("index", {
        recent: characterData
      });
    });
  });

  // Load game pick page
  app.get("/game", function(req, res) {
      res.render("game-pick", {
        type1 : "dnd5e",
        type2 : "something"
      });
  });

  //Load character form page
  app.get("/form/:type", function(req, res) {
    if (req.params.id = "dnde5"){
      res.render("form-dnd5e", {
        type : "dnd5e"
      });
    }
  });

  //Load print form page
  app.get("/form/:type/:id", function(req, res) {
    if (req.params.type = "dnd5e"){
    db.Dnd5e.findOne({ 
      where: {
        type: "dnd5e",
        id: req.params.id
      }
     }).then(function(characterData) {
      res.render("form-dnd5e", {
        form : characterData
      });
    })
    }
    else if (req.params.type = "something"){
      db.something.findOne({ 
        where: {
          type: "something",
          id: req.params.id
        }
       }).then(function(characterData) {
        res.render("form-something", {
          form : characterData
        });
      })
    }
  });

  //View all
  app.get("/creations/all", function(req, res) {
    db.Dnde5.findAll({}).then(function(characterData) {
      res.render("view-all", {
        all: characterData
      });
    });
  });

  //View users
  app.get("/creations/:users", function(req, res) {
    db.Dnde5.findAll({}).then(function(characterData) {
      res.render("view-all", {
        all: characterData
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
