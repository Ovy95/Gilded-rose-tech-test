const {Shop, Item} = require("../src/gilded_rose");

describe(" BackStagePasses checks the value increase over time", function() {
  
  it("increases in quality by 1 ", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 20, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert")
    expect(items[0].sellIn).toBe(19)
    expect(items[0].quality).toBe(31);
  })

  it("increases the product quality by 2 if sellIn >6  <11   (BACKSTAGEPASSES)", function() {
    let gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 7, 11)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert")
    expect(items[0].sellIn).toBe(6)
    expect(items[0].quality).toBe(13);
  })
  it("increases the product quality by 3 if sellIn < 6 (BACKSTAGEPASSES)", function() {
    let gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 6, 11)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert")
    expect(items[0].sellIn).toBe(5)
    expect(items[0].quality).toBe(14);
  })

});
  describe(" Checks when Sellin value is 0 ", function() {
  
    it("checks quality of BackStagePasses when SellIn is 0 (BACKSTAGEPASSES)", function() {
    let gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 11)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert")
    expect(items[0].sellIn).toBe(-1)
    expect(items[0].quality).toBe(0);
  })

  it("checks quality of BackStagePasses when SellIn is 0 (BACKSTAGEPASSES)", function() {
    let gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", -1, 11)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert")
    expect(items[0].sellIn).toBe(-2)
    expect(items[0].quality).toBe(0);
  })
});
describe("Checks for max quality values to be 50 at different stages of the Sellin values", function() {
  it("Sellin value is under 6 days", function() {
    let gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 3, 48)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert")
    expect(items[0].sellIn).toBe(2)
    expect(items[0].quality).toBe(50);
  })

  it(" Sellin value is between 6-11 days ", function() {
    let gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 8, 49)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert")
    expect(items[0].sellIn).toBe(7)
    expect(items[0].quality).toBe(50);
  })
});