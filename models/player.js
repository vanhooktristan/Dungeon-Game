
"use strict";

module.exports = function (sequelize, DataTypes) {

  var players = sequelize.define("players", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    strength: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    vitality: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    agility: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  });
  return players;
};
