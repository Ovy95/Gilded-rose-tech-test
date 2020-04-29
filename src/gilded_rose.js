class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      // This first part of the code is simply just to check if the name is cheese or the concert
      if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        //then checks the quality is greater then 0
        if (item.quality > 0) {
          // checks if the name is Sulfuras if it is then take away quality 
          if (item.name != 'Sulfuras, Hand of Ragnaros') {
            item.quality = item.quality - 1;
          }

        }
      } else {
        // Check quality is less then 50 
        if (item.quality < 50) {
          // IF quality less then 50 add 1
          item.quality = item.quality + 1;
          // checks name is equal to concert tickets
          if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
          // Checks Sellin if less then 11 
            if (item.sellIn < 11) {
              // And checks quality is less then 50 
              if (item.quality < 50) {
              // runs though the cycle twice so 2 is added 
              item.quality = item.quality + 1;
              }
            }
            // Then again the Backstage pass is run though here checks the sellin and quality is less then 50
            if (item.sellIn < 6) {
              if (item.quality < 50) {
                // Adds another one 
                item.quality = item.quality + 1;
              }
            }
          }
        }
      }
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (item.name != 'Aged Brie') {
          if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > 0) {
              if (item.name != 'Sulfuras, Hand of Ragnaros') {
                item.quality = item.quality - 1;
              }
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
