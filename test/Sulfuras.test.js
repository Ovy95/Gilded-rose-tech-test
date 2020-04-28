const {Shop, Item} = require("../src/gilded_rose");

describe("Tests for Sulfuras", function() {

  it("Checking the value of the Sulfuras is equal to 80", function() {
    let gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros")
    expect(items[0].sellIn).toBe(0)
    expect(items[0].quality).toBe(80);
   })
 
   it("Checking the value of the Sulfuras is equal to 80", function() {
     let gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -1, 80)]);
     let items = gildedRose.updateQuality();
     expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros")
     expect(items[0].sellIn).toBe(-1)
     expect(items[0].quality).toBe(80);
    })
});