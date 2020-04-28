const {Shop, Item} = require("../src/gilded_rose");

describe(" BackStagePasses checks the value of the quailty over time including increase and descreases  ", function() {
  

  it("increases in value over time (BACKSTAGEPASSES)", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 20, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert")
    expect(items[0].sellIn).toBe(19)
    expect(items[0].quality).toBe(31);
  })

  it("increases the product quailty by 2 if sellIn >6  <11   (BACKSTAGEPASSES)", function() {
    let gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 6, 11)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert")
    expect(items[0].sellIn).toBe(5)
    expect(items[0].quality).toBe(13);
  })
  it("increases the product quailty by 3 if sellIn < 6 (BACKSTAGEPASSES)", function() {
    let gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 3, 11)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert")
    expect(items[0].sellIn).toBe(2)
    expect(items[0].quality).toBe(14);
  })

  it("checks value of BackStagePasses when SellIn is 0 (BACKSTAGEPASSES)", function() {
    let gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 11)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert")
    expect(items[0].sellIn).toBe(-1)
    expect(items[0].quality).toBe(0);
  })
  it("Checks value of Backstage passes that they should be equal to 50 ", function() {
    let gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 3, 48)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert")
    expect(items[0].sellIn).toBe(2)
    expect(items[0].quality).toBe(50);
  })
});