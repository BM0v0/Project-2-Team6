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

  app.post("/login/user", function(req, res) {
    console.log('req.body', req.body);
    console.log('req.cookies', req.cookies);
    const username = req.body.username;
    const password = req.body.password;
    if (username === 'nellie' && password === '123') {
      res.cookie('approved', true);
      res.status(200).send({
        user: 'approved'
      });
    } else {
      res.status(409).end();
    }
  });
};
