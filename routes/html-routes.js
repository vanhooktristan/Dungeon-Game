var path = require("path");
var db = require("../models");

module.exports = function (app) {


  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/character", (req, res) => {
    res.render("character");
  });

  app.get("/battle", (req, res) => {
    db.sequelize.query("select 'Monster' As Type, id, name, level, image, strength, vitality, agility from monsters union select 'Player', id, name, level, image, strength, vitality, agility from players order by type, id DESC").spread((dbPlayers, meta) => {
      return res.render("battle", { player: dbPlayers });
    });
  });
}