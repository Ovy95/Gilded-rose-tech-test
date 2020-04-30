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
      
      let increase_Quality = function (item) {
        if (item.quality < Max_Quality){
          item.quality += 1;
        }
      }
      let decrease_Quality = function (item) {
        if (item.quality > 0 ){
          item.quality -= 1;
        }
      }
      
      
      // This first part of the code is simply just to check if the name is cheese or the concert
      if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        //then checks the quality is greater then 0
        if (item.quality > 0) {
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
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.sellIn = item.sellIn - 1;
      }

      if (item.sellIn < 0 && item.name == 'Aged Brie'){
        if (item.quality < Max_Quality)
          {increase_Quality(item)}
      }
 
      if (item.sellIn < 0 && item.name != 'Aged Brie') {
          if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > 0) {

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
