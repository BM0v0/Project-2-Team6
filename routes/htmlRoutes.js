var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {});
  });
  app.get("/addWord", function(req, res) {
    res.render("addWord", {});
  });

  // Load example page and pass in an example by id
  app.get("/viewWord/:word", function(req, res) {
    db.Word.findOne({ where: { word: req.params.word } }).then(function(data) {
      res.render("viewWord", {
        word: data.word,
        definition: data.definition,
        instructions: data.instructions,
        videoUrl: data.videoUrl
      });
    });
  });
  app.get("/viewLetter/:letter", function(req, res) {
    db.Word.findAll({ where: { firstLetter: req.params.letter } }).then(
      function(data) {
        res.render("viewLetter", {
          word: data
        });
      }
    );
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
