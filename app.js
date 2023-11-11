"use strict";

const menu = {
  _meal: [
    "Hamburger",
    "Fish n Chips",
    "Mac & Cheese",
    "Sphagetti",
    "Fried Chicken",
  ],
  _price: [5, 10, 15, 25, 30],
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck;
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      this._price = priceToCheck;
    }
  },
  get todaysSpecial() {
    let randomMeal = Math.floor(Math.random() * this._meal.length);
    let randomPrice = Math.floor(Math.random() * this._price.length);

    if (this._meal && this._price) {
      return `Today's Special is ${this._meal[randomMeal]} for $${this._price[randomPrice]}!`;
    } else {
      return "Meal or price was not set correctly!";
    }
  },
};

console.log(menu.todaysSpecial);
