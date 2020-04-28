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
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 3, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Conjured Mana Cake")
    expect(items[0].sellIn).toBe(2)
    expect(items[0].quality).toBe(5);
  });

});

describe("Increases product quailty over time Aged Brie and BackStagePasses ", function() {
  it("increases in value over time (AGED BRIE)", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 20, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie")
    expect(items[0].sellIn).toBe(19)
    expect(items[0].quality).toBe(31);
  })

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

});
  describe("Values of items can't be more then 50 unless it's 'Sulfuras' ", function() {
    it("Checks value of Backstage passes that they should be equal to 50 ", function() {
    let gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 3, 48)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert")
    expect(items[0].sellIn).toBe(2)
    expect(items[0].quality).toBe(50);
  })
  
  it("Checking the value of the Sulfuras is equal to 80", function() {
   let gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
   let items = gildedRose.updateQuality();
   expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros")
   expect(items[0].sellIn).toBe(0)
   expect(items[0].quality).toBe(80);
  })

});
