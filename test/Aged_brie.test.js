const {Shop, Item} = require("../src/gilded_rose");

describe("Checks the quality of Brie, BackStagePasses and Conjured items over time including increase and descreases  ", function() {
  it("increases in value over time (AGED BRIE)", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 20, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie")
    expect(items[0].sellIn).toBe(19)
    expect(items[0].quality).toBe(31);
  })

  
    it("Aged brie quality increases by 2 after Sellin is -0", function() {
      let gildedRose = new Shop([new Item("Aged Brie", -5, 48)]);
      let items = gildedRose.updateQuality();
      expect(items[0].name).toBe("Aged Brie")
      expect(items[0].sellIn).toBe(-6)
      expect(items[0].quality).toBe(50);
    })
});
