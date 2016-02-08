"use strict";
class StatSet {

  constructor (str, con, dex, int, wis, chr) {
    this.stats = [];
    this.stats[0] = str;
    this.stats[1] = con;
    this.stats[2] = dex;
    this.stats[3] = int;
    this.stats[4] = wis;
    this.stats[5] = chr;
  }

  getStats() {
    return this.stats;
  }
}

//Class Bonus's
var classBonus = [];
classBonus["Barbarian"] = new StatSet(3, 3, 3, -4, -4, -5);
classBonus["Bard"] = new StatSet(-3, -2, 2, 4, 4, 5);
classBonus["Cleric"] = new StatSet(-2, 2, 2, 4, 3, 3);
classBonus["Druid"] = new StatSet(2, 2, 3, 3, 5, 2);
classBonus["Fighter"] = new StatSet(4, 4, 3, 2, 1, 3);
classBonus["Monk"] = new StatSet(4, -4, 4, 4, 4, 3);
classBonus["Paladin"] = new StatSet(3, 2, -4, 4, 4, 4);
classBonus["Ranger"] = new StatSet(3, -4, 4, 2, 4, 1);
classBonus["Rouge"] = new StatSet(5, -5, 4, 3, 5, -3);
classBonus["Sorcerer"] = new StatSet(-3, -3, 1, 5, 5, -5);
classBonus["Warlock"] = new StatSet(-2, -4, -3, 7, 5, -7);
classBonus["Wizard"] = new StatSet(-2, -5, -5, 6, 6, -5);

var adjustedStats = ["Strength", "Constitution", "Dexterity", "Intelligence", "Wisdom", "Charisma", "Acrobatics", "Arcana", "Bluff", "Diplomacy", "Endurance", "History", "Insight", "Intimidate", "Perception", "Stealth", "Streetwise", "Thievery"];
