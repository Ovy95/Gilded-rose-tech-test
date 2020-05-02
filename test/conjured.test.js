const {Shop, Item} = require("../src/gilded_rose");

describe(" updateQuality method ", function() {
  it("Checking to see if the item decreases by 1 for both quality and Sellin days of normal items", function() {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 3, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Conjured Mana Cake")
    expect(items[0].sellIn).toBe(2)
    expect(items[0].quality).toBe(4);
  });

  it("Checking to see if the item decreases by 1 for both quality and Sellin days of normal items", function() {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 3, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Conjured Mana Cake")
    expect(items[0].sellIn).toBe(2)
    expect(items[0].quality).toBe(0);
  });

});