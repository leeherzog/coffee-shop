var coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    if (drinkType in coffeeShop.drinkRequirements === false) {
      alert("Sorry, we don't make " + drinkType);
    }
    else if (drinkType in coffeeShop.drinkRequirements && coffeeShop.beans- coffeeShop.drinkRequirements[drinkType] > 0) {
      coffeeShop.beans = coffeeShop.beans - coffeeShop.drinkRequirements[drinkType];
    }
    else if (drinkType in coffeeShop.drinkRequirements && coffeeShop.beans - coffeeShop.drinkRequirements[drinkType] < 0){
      alert("Sorry, we're all out of beans!");
    }
  }
}

console.log(coffeeShop.beans);
coffeeShop.makeDrink("latte");
console.log(coffeeShop.beans);
coffeeShop.makeDrink("americano");
console.log(coffeeShop.beans);
coffeeShop.makeDrink("filtered");
console.log(coffeeShop.beans);
coffeeShop.makeDrink("doubleShot");
console.log(coffeeShop.beans);
coffeeShop.makeDrink("frenchPress");
console.log(coffeeShop.beans);

