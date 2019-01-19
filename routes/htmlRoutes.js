var db = require("../models");
var conversion = require("phantom-html-to-pdf");

module.exports = function (app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Dnd5e.findAll({ limit : 5, order : [['createdAt' , 'DESC']]}).then(function(data) {
      var hbObj = {character: data};
      res.render("index", hbObj);
    });
  });

  // Load game pick page
  app.get("/game", function (req, res) {
    res.render("game-pick", {
      type1: "dnd5e",
      type2: "fateacc"
    });
  });

  //Load character form page
  app.get("/form/:type", function (req, res) {
    if (req.params.type == "dnd5e") {
      res.render("form-dnd5e", {
        type: "dnd5e"
      });
    }
    else if (req.params.type == "fateacc") {
      res.render("fateacc", {
        type: "fateacc"
      });
    }
  });

  //Load print form page
  app.get("/form/:type/:id", function (req, res) {
    if (req.params.type = "dnd5e") {
      db.Dnd5e.findOne({
        where: {
          type: "dnd5e",
          id: req.params.id
        }
      }).then(function (characterData) {
        res.render("form-dnd5e", {
          form: characterData
        });
      })
    }
    else if (req.params.type = "something") {
      db.something.findOne({
        where: {
          type: "something",
          id: req.params.id
        }
      }).then(function (characterData) {
        res.render("form-something", {
          form: characterData
        });
      })
    }
  });

  //HTML to PDF - phantomjs
  app.get("/pdf", function (req, res) {
    console.log('hey hey!');
    conversion({ html: "<h1>Character Form: DnD 5e - PDF Printable</h1>" }, function (err, pdf) {
      var output = fs.createWriteStream('/path/to/output.pdf')
      console.log(pdf.logs);
      console.log(pdf.numberOfPages);
      pdf.stream.pipe(output);
      res.send(pdf);
    });
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
