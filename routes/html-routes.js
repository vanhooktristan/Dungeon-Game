var path = require("path");
var db = require("../models");

module.exports = function (app) {


  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/character", (req, res) => {
    res.render("character");
  });

  app.get("/battle", (req,res) => {
    // db.players.findAll({
      db.sequelize.query(" select * from monsters union all select * from players").spread((dbPlayers, meta) => {
      // var playerInfo = {
      //   name: dbPlayers.name,
      //   image: dbPlayers.image,
      //   level: dbPlayers.level,
      //   strength: dbPlayers.strength,
      //   vitality: dbPlayers.vitatlity,
      //   agility: dbPlayers.agility
      // }
      return res.render("battle", {player: dbPlayers});
    });

    
    
  
  });
  
}