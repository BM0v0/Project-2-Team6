var db = require("../models");

module.exports = function(app) {
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
