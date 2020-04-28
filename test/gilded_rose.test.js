const {Shop, Item} = require("../src/gilded_rose");

describe(" updateQuality method ", function() {
  it("Checking to see if the item decreases by 1 for both quality and Sellin days of normal items", function() {
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("+5 Dexterity Vest")
    expect(items[0].sellIn).toBe(9)
    expect(items[0].quality).toBe(19);
  });


});
