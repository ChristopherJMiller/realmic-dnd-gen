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
classBonus["Barbarian"] = new StatSet(2, 2, 2, -3, -3, -4);
classBonus["Bard"] = new StatSet(-2, -1, 1, 3, 3, 4);
classBonus["Cleric"] = new StatSet(-1, 1, 1, 3, 2, 2);
classBonus["Druid"] = new StatSet(1, 1, 2, 2, 4, 1);
classBonus["Fighter"] = new StatSet(3, 1, 2, 1, 0, 2);
classBonus["Monk"] = new StatSet(3, -3, 3, 3, 3, 2);
classBonus["Paladin"] = new StatSet(2, 1, -3, 3, 3, 3);
classBonus["Ranger"] = new StatSet(2, -3, 3, 1, 3, 0);
classBonus["Rouge"] = new StatSet(4, -4, 3, 2, 4, -2);
classBonus["Sorcerer"] = new StatSet(-2, -2, 0, 4, 4, -4);
classBonus["Warlock"] = new StatSet(-1, -3, -2, 6, 4, -6);
classBonus["Wizard"] = new StatSet(-1, -4, -4, 5, 5, -4);

var adjustedStats = ["Strength", "Constitution", "Dexterity", "Intelligence", "Wisdom", "Charisma", "Acrobatics", "Arcana", "Bluff", "Diplomacy", "Endurance", "History", "Insight", "Intimidate", "Perception", "Stealth", "Streetwise", "Thievery"];
