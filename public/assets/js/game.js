

function Character(name, str, vit, agi) {
  this.name = name;
  this.str = str;
  this.vit = vit;
  this.agi = agi;
  this.hp = 10 + (vit*2);
  this.def = Math.round(str/3 + vit);
  this.spd = Math.ceil(3 + agi*1.5);
}

Character.prototype.printStats = function() {
  console.log(this.name, this.str, this.vit, this.agi, this.hp, this.def, this.spd);
}

//needs to be edited for nontesting purposes
Character.prototype.battle =  function(opponent) {
  

  function round(a, d) {
    var damage = Math.ceil(((a.str/2) * 2.5) - d.def/2);
    var chance = Math.ceil((a.spd/d.spd) * 20 + ((Math.random()*100)+ 50));

    console.log(a.name + ": " + a.hp + " || " + d.name + ": " + d.hp);
  
    if (chance >= 100) {
      d.hp -= damage;
      console.log(d.name + " took " + damage + " damage!");
    } else {
      console.log("You missed the attack");
    }
    console.log(a.name + ": " + a.hp + " || " + d.name + ": " + d.hp);
    console.log("Damage: " + damage, "Chance: " + chance);
    console.log(".........")
  }

  round(this, opponent);
  round(opponent, this);
}

var player1 = new Character("Mel", 4, 3, 2);
var monster1 = new Character("Wolf", 2, 5, 2);

//for testing purposes
var count = 1
while ((player1.hp > 0) && (monster1.hp > 0)){
  
  console.log("Round " + count);
  player1.battle(monster1);
  console.log("---------");
  count += 1
}