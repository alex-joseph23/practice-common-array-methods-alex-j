let cafeOrders = [
    ["Latte", "Tea", "Espresso"],
    ["Croissant", "Muffin", "Bagel"]
  ];
  
console.log("Number of drinks:", cafeOrders[0].length);
console.log("Number of pastries:", cafeOrders[1].length);

console.log("Drink Order 1:", cafeOrders[0][0]);
console.log("Pastry Order 1:", cafeOrders[1][2]);

console.log("Drink Order 2:",cafeOrders[0][1]);
console.log("Pastry Order 2:", cafeOrders[1][0]);

console.log("Drink Order 3:", cafeOrders[0][2]);
console.log("Pastry Order 3:", cafeOrders[1][1]);

let drinkIndex1 = 0;
let pastryIndex1 = 2;

let drinkIndex2 = 1;
let pastryIndex2 = 0;

let drinkIndex3 = 2;
let pastryIndex3 = 1;

console.log("Dynamic Drink Order 1:", cafeOrders[0][drinkIndex1]);
console.log("Dynamic Pastry Order 1:", cafeOrders[1][pastryIndex1]);

console.log("Dynamic Drink Order 2:", cafeOrders[0][drinkIndex2]);
console.log("Dynamic Pastry Order 2:", cafeOrders[1][pastryIndex2]);

console.log("Dynamic Drink Order 3:", cafeOrders[0][drinkIndex3]);
console.log("Dynamic Pastry Order 3:", cafeOrders[1][pastryIndex3]);

for (let i = 0; i < cafeOrders[0].length; i++) {
    console.log("Drink Order " + (i + 1) + ":", cafeOrders[0][i]);
  };
cafeOrders[0].push("Flat White");
console.log("Updated number of drinks:", cafeOrders[0].length);

let anotherDrinkOrder = 0;
let secondaryDrinkOrder = 2;
console.log("Task 6 Order:", cafeOrders[anotherDrinkOrder][secondaryDrinkOrder]);
