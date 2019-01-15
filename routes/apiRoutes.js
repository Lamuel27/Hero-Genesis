var db = require("../models");

module.exports = function(app) {
  //Submit a character
  app.post("/creations/all", function(req, res) {
    if(req.params.type = "dnd5e"){
    db.Dnd5e.create(req.body).then(function(character) {
      res.json(character);
    });
    }
    else if(req.params.type = "something"){
      db.Something.create(req.body).then(function(character){
        res.json(character);
      })
    }
  });
};
