var db = require("../models");

module.exports = function(app) {

  //POST route for saving a new character
  app.post("/api/character", (req, res) => {
    db.players.create(req.body).then((dbPlayers) => {
      res.json(dbPlayers);
    });
  });

  //DELETE route for deleting characters
  app.delete("/api/character/:id", (req, res) => {
    db.players.destroy({
      where: {
        id: req.params.id
      }
    }).then((dbPlayer) => {
      res.json(dbPlayer);
    })
  })

  //PUT route for updating character stats
  app.put("/api/character", (req, res) => {
    db.players.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }
    ).then((dbPlayer) => {
      res.json(dbPlayer);
    });
  });

  //GET route for grabbing user info
  app.get("/api/character/:id", (req, res) => {
    db.players.findOne({
      where: {
        id: req.params.id
      }
    }).then((dbPlayers) => {
      res.json(dbPlayers);
    });
  });

  //GET route for grabbing monster info
  app.get("/api/monster/:id", (req, res) => {
    db.monsters.findOne({
      where: {
        id: req.params.id
      }
    }).then((dbMonster) => {
      res.json(dbMonster);
    });
  });

  app.get("/api/character", (req, res) => {
    db.sequelize.query("select 'Monster' As Type, id, name, level, image, strength, vitality, agility from monsters union select 'Player', id, name, level, image,strength, vitality, agility from players order by type, id DESC").spread((dbPlayer, meta) => {
      res.json(dbPlayer);
    });
  });
  
}