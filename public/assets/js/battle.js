$(function () {

  var count = 0;

  $.get("/api/character", (data) => {
    var i = 1;
    var j = 0;
    var player1 = new Character(data[i].name, data[i].strength, data[i].vitality, data[i].agility);
    var monster1 = new Character(data[j].name, data[j].strength, data[j].vitality, data[j].agility);

    $("#round_num").text("Round " + count);
    $("#health_player").text("Player: " + player1.hp);
    $("#health_monster").text("Monster: " + monster1.hp);

    player1.printStats();
    monster1.printStats();

    $("#attack").on("click", function (event) {
      event.preventDefault();
      if (player1.hp >= 0 && monster1.hp >= 0) {
      count += 1;
      $("#round_num").text("Round " + count);
      $("#round_info").text("");
      player1.battle(monster1);

      $("#health_player").text("Health: " + player1.hp);
      $("#health_monster").text("Health: " + monster1.hp);
      }
    });
  });

  function Character(name, str, vit, agi) {
    this.name = name;
    this.str = str;
    this.vit = vit;
    this.agi = agi;
    this.hp = 10 + (vit * 2);
    this.def = Math.round(str / 3 + vit);
    this.spd = Math.ceil(3 + agi * 1.5);
  }

  Character.prototype.battle = function (opponent) {
    function round(a, d) {
      var damage = Math.ceil(((a.str / 2) * 2.5) - d.def / 2);
      var chance = Math.ceil((a.spd / d.spd) * 20 + ((Math.random() * 100) + 50));

    // if (d.hp >= 0 && a.hp >= 0) {
      if (chance >= 100) {
        d.hp -= damage;
        $("#round_info").append("<p>" + d.name + " took " + damage + " damage!</p>");
        console.log(d.name + " took " + damage + " damage!");
      } else {
        $("#round_info").append("<p>" + a.name + " missed the attack</p>");
        console.log(a.name + " missed the attack");
      }
    // } else {

    // }
    } //end of round function

    round(this, opponent);
    round(opponent, this);
    
  } //end of battle function

  Character.prototype.printStats = function () {
    console.log(this.name, this.str, this.vit, this.agi, this.hp, this.def, this.spd);
  }


});

//need to remove unneed console.logs