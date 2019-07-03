// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(dmg) {
    this.health -= dmg;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(dmg) {
    super.receiveDamage(dmg);
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`
    } else {
      return `${this.name} has received ${dmg} points of damage`
    }
  }

  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength)
  }

  receiveDamage(dmg) {
    super.receiveDamage(dmg);
    if (this.health <= 0) {
      return `A Saxon has died in combat`
    } else {
      return `A Saxon has received ${dmg} points of damage`
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let toReturn = this.saxonArmy[saxonIndex].receiveDamage(viking.attack());
    this.saxonArmy = this.saxonArmy.filter((saxon) => saxon.health > 0);
    return toReturn;
  }

  saxonAttack() {
    let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let toReturn = this.vikingArmy[vikingIndex].receiveDamage(saxon.attack());
    this.vikingArmy = this.vikingArmy.filter((viking) => viking.health > 0);
    return toReturn;
  }

  showStatus() {
    if (this.saxonArmy.length < 1) {
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length < 1) {
      return "Saxons have fought for their lives and survive another day..."
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}