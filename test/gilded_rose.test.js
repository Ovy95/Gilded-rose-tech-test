const {Shop, Item} = require("../src/gilded_rose");

describe(" updateQuality method ", function() {
  it("Checking to see if the item decreases by 1 for both quality and Sellin days of normal items", function() {
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("+5 Dexterity Vest")
    expect(items[0].sellIn).toBe(9)
    expect(items[0].quality).toBe(19);
  });

  it("Checking to see if the item decreases by 1 for both quality and Sellin days of normal items", function() {
    const gildedRose = new Shop([new Item("Elixir of the Mongoose", 0, 7)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Elixir of the Mongoose")
    expect(items[0].sellIn).toBe(-1)
    expect(items[0].quality).toBe(5);
  });

  it("Checks the value won't be less then zero", function() {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 0, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Conjured Mana Cake")
    expect(items[0].sellIn).toBe(-1)
    expect(items[0].quality).toBe(0);
  })

});








