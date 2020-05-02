class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
const Max_Quality = 50
const Min_Quality = 0

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    this.items.forEach(updateItemQuality);
  return this.items
  }
}


let updateItemQuality = function(item){
      
      let conjured = function(item){
        return item.name === 'Conjured Mana Cake';
      };
      let conjured_update = function(item){
          decrease_SellIn(item);
          decrease_Quality(item);
          decrease_Quality(item);
      };
    
      let aged_Brie = function(item) {
        return item.name === 'Aged Brie';
      };
       let update_Aged_Brie = function(item) {
          
          decrease_SellIn(item);
          increase_Quality(item);
  
            if ( (passed_Sellin(item)) ){
              increase_Quality(item);
            }
            return;
      }
      let concert_tickets = function(item) {
        return item.name === 'Backstage passes to a TAFKAL80ETC concert';
      };
      let update_concert_tickets = function(item) {
        decrease_SellIn(item);
        increase_Quality(item);

        if (item.sellIn < 11) {
           increase_Quality(item);
          } 
        if (item.sellIn < 6 ) {
           increase_Quality(item);
        };

          if ( (passed_Sellin(item)) ) {
              item.quality = Min_Quality;
          }
          return;
      };
      
      let Legendary_Item = function(item) {
        return item.name === 'Sulfuras, Hand of Ragnaros'
      };
      let normal_items = function(item) {
        
        decrease_SellIn(item);
        decrease_Quality(item);
      if (item.sellIn < Min_Quality) {
        decrease_Quality(item);
      };
      };
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
      let passed_Sellin = function(item) {
        return item.sellIn < Min_Quality 
      };
      let decrease_SellIn = function (item){
        item.sellIn -= 1;
      };

      if ( (Legendary_Item(item)) ) {
          return this.items
      };
      
      if (aged_Brie(item)) {
        return update_Aged_Brie(item);
      };

      if (concert_tickets(item) ) {
          return update_concert_tickets(item);
      }
      if (conjured(item) ){
          return conjured_update(item);
      }
      normal_items(item);
    };


    module.exports = {
      Item,
      Shop,
    }