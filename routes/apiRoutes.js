var db = require("../models");

module.exports = function(app) {
/*   // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  }); */

  // Create a new example
  app.post("/addWord/", function(req, res) {
    db.Word.create({
      word: req.body.word,
      definition: req.body.definition,
      instructions: req.body.signText,
      videoUrl: req.body.signVideo,
      firstLetter: req.body.firstLetter
    }).then(function(data) {
      res.json(data);
    });
  });
};
