var path = require("path");
var db = require("../models");

module.exports = function (app) {


  app.get("/", (req, res) => {
    //  res.render("index");
    res.render("index");
  });

  app.get("/character", (req, res) => {
  	res.render("character");
  });

  app.get("/battle", (req,res) => {
    db.players.findOne({
      where: {
        id: 4
      }
    }).then((dbPlayers) => {
      // var playerInfo= {
      // player: dbPlayers
      // };
      // return res.render("battle", {player: dbPlayers});
      var playerInfo = {
        name: dbPlayers.name,
        image: dbPlayers.image,
        level: dbPlayers.level,
        strength: dbPlayers.strength,
        vitality: dbPlayers.vitatlity,
        agility: dbPlayers.agility
      }

      var MonsterInfo = {
        name: dbMonsters.name,
        image: dbMonsters.image,
        level: dbMonsters.level
      }
      return res.render("battle", {player: playerInfo});
    });
  });  
};


