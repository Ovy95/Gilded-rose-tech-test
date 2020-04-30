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
      
      const Max_Quality = 50
      const Min_Quality = 0

      let increase_Quality = function (item) {
        if (item.quality < Max_Quality){
          item.quality += 1;
        }
      }
      let decrease_Quality = function (item) {
        if (item.quality > Min_Quality ){
          item.quality -= 1;
        }
      }

      let decrease_SellIn = function (item){
        item.sellIn -= 1;
      }

      // This first part of the code is simply just to check if the name is cheese or the concert
      if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        //then checks the quality is greater then 0
        if (item.quality > Min_Quality) {
          // checks if the name is Sulfuras if it is then take away quality 
          if (item.name != 'Sulfuras, Hand of Ragnaros') {
            decrease_Quality(item);
          }
        }
      } else {

        if (item.quality < Max_Quality) {
          increase_Quality(item);
            if (item.name == 'Backstage passes to a TAFKAL80ETC concert' && item.sellIn < 11 && item.quality < Max_Quality ) {
              increase_Quality(item);
              if (item.sellIn < 6 && item.quality < Max_Quality) {
                increase_Quality(item);
              }
            }
          }
        }
          // This is used to reduces the Selling days by one
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        decrease_SellIn(item);
      }

        // This checks that Aged Brie increases by two after Sellin date is zero
      if (item.sellIn < Min_Quality && item.name == 'Aged Brie'){
        if (item.quality < Max_Quality)
          {increase_Quality(item)}
          return this.items;
      }
 
      if (item.sellIn < Min_Quality && item.name != 'Aged Brie') {
          if (item.sellIn < Min_Quality && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > Min_Quality) {

              if (item.name != 'Sulfuras, Hand of Ragnaros') {
                decrease_Quality(item);
              }
            }
          } else {
            item.quality -= item.quality ;
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
