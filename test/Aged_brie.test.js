const {Shop, Item} = require("../src/gilded_rose");

describe("Checks Aged Brie increases by 1 ", function() {
  it("increases in value of the AGED BRIE by 1", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie")
    expect(items[0].sellIn).toBe(1)
    expect(items[0].quality).toBe(1);
  })

  it("checks the value of the Aged brie can't have a quality more then 50", function(){
    const gildedRose = new Shop([new Item("Aged Brie", 20, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie")
    expect(items[0].sellIn).toBe(19)
    expect(items[0].quality).toBe(50);
  })
  
});

describe("Aged brie quality increases by 2 after Sellin is -0", function() {

  it("Aged brie quality increases by 2 after Sellin is -0", function() {
    let gildedRose = new Shop([new Item("Aged Brie", 0, 1)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie")
    expect(items[0].sellIn).toBe(-1)
    expect(items[0].quality).toBe(3);
  })

  it("Aged brie quality isn't more then 50", function() {
      let gildedRose = new Shop([new Item("Aged Brie", -5, 49)]);
      let items = gildedRose.updateQuality();
      expect(items[0].name).toBe("Aged Brie")
      expect(items[0].sellIn).toBe(-6)
      expect(items[0].quality).toBe(50);
  })

});
