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
      // This first part of the code is simply just to check if the name is cheese or the concert
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        //then checks the quality is greater then 0
        if (this.items[i].quality > 0) {
          // checks if the name is Sulfuras if it is then take away quality 
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1;
          }

        }
      } else {
        // Check quality is less then 50 
        if (this.items[i].quality < 50) {
          // IF quality less then 50 add 1
          this.items[i].quality = this.items[i].quality + 1;
          // checks name is equal to concert tickets
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
          // Checks Sellin if less then 11 
            if (this.items[i].sellIn < 11) {
              // And checks quality is less then 50 
              if (this.items[i].quality < 50) {
              // runs though the cycle twice so 2 is added 
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            // Then again the Backstage pass is run though here checks the sellin and quality is less then 50
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                // Adds another one 
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
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
