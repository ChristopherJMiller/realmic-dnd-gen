"use strict";
class StatSet {

  constructor (str, con, dex, int, wis, chr) {
    this.stats = [];
    this.stats["str"] = str;
    this.stats["con"] = con;
    this.stats["dex"] = dex;
    this.stats["int"] = int;
    this.stats["wis"] = wis;
    this.stats["chr"] = chr;
  }

  getStats() {
    return this.stats;
  }
}
