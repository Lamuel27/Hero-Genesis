var db = require("../models");

module.exports = function(app) {
  //Submit a character
  app.post("/form/:type", function(req, res) {
    if(req.params.type == "dnd5e"){
      console.log("This has been called");
    db.Dnd5e.create(req.body).then(function(character) {
      res.json(character);
    });
    }
    else if(req.params.type == "fateacc"){
      db.FateAcc.create(req.body).then(function(character){
        res.json(character);
      })
    }
  });
};
