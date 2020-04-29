const {Shop, Item} = require("../src/gilded_rose");

describe(" updateQuality method ", function() {
  it("Checking to see if the item decreases by 1 for both quality and Sellin days of normal items", function() {
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("+5 Dexterity Vest")
    expect(items[0].sellIn).toBe(9)
    expect(items[0].quality).toBe(19);
  });

  it("Checking that the quality of the item won't be less then 0", function() {
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", -1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("+5 Dexterity Vest")
    expect(items[0].sellIn).toBe(-2)
    expect(items[0].quality).toBe(0);
  });

  it("Checks to see if the item decreases by 2 when sellIn days are less then zero", function() {
    const gildedRose = new Shop([new Item("Elixir of the Mongoose", 0, 7)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Elixir of the Mongoose")
    expect(items[0].sellIn).toBe(-1)
    expect(items[0].quality).toBe(5);
  });

  it("Checks to see if the item decreases by 2 when sellIn days are less then zero", function() {
    const gildedRose = new Shop([new Item("Elixir of the Mongoose", -1, 7)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Elixir of the Mongoose")
    expect(items[0].sellIn).toBe(-2)
    expect(items[0].quality).toBe(5);
  });

  jest.mock("../src/gilded_rose")
  test('Checks class of the shop has an array of items ', () => {
    const shop = new Shop
    expect(shop.items).toStrictEqual([])
  })
  

  
});