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
      };
      let decrease_Quality = function (item) {
        if (item.quality > Min_Quality ){
          item.quality -= 1;
        }
      };
      let decrease_SellIn = function (item){
        item.sellIn -= 1;
      };
      let aged_Brie = function(item) {
        return item.name === 'Aged Brie';
      };
      let concert_tickets = function(item) {
        return item.name === 'Backstage passes to a TAFKAL80ETC concert';
      };
      let Legendary_Item = function(item) {
        return item.name === 'Sulfuras, Hand of Ragnaros'
      };


  
    if ( (Legendary_Item(item)) ) {
         return this.items
        };
        decrease_SellIn(item);
        
        if ( aged_Brie(item) || concert_tickets(item) ){
          if (item.quality < Max_Quality) {
            increase_Quality(item);
            if (concert_tickets(item) && item.sellIn < 11) {
              increase_Quality(item);
              if (item.sellIn < 6 ) {
                increase_Quality(item);
              };
            };
          };
        } else { 
          decrease_Quality(item);
        };
        
        if (item.sellIn < Min_Quality) {
         if (aged_Brie(item)) {
              increase_Quality(item);
               
         } else {
           if  (!(concert_tickets(item))) {
                    decrease_Quality(item);
           } else {
             (item.quality = Min_Quality); 
            }; 
          };
        };
      };
    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
