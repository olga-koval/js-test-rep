

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Если это собственное свойство - выполняем тело if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Если это не собственное свойство - ничего не делаем
// }

// ASSIGNMENT #12

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//         propCount += 1;
//     }
// }
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// ASSIGNMENT #13

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//  value = apartment[key];
// }

// ASSIGNMENT #14

// function countProps(object) {
//   // Change code below this line
//     let propCount = 0;

//   const keys = Object.keys(object);
//     console.log(keys);
//   for (const key of keys) {
//       propCount += 1;
//   }
//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// ASSIGNMENT #16

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//     const values = Object.values(salaries);
//     for (const value of values) {
//         totalSalary += value;
// }

//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// ASSIGNMENT #16

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }


// ASSIGNMENT #18

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line


//     for (const product of products) {
//         if (product.name === productName) {
//             return product.price;
//         }
//     }
//     return null;


//   // Change code above this line
// }

// console.log(getProductPrice("Radar"));



// ASSIGNMENT #19

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line

//     let nameArray = [];

//     for (const product of products) {
//         if (product.hasOwnProperty(propName)) {
//             nameArray.push(product[propName]);
//         }
//     }
//     return nameArray;


//   // Change code above this line
// }

// console.log(getAllPropValues("song"));


// ASSIGNMENT #20

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки

//     let totalPrice = 0;

//     for (const product of products) {
//         if (product.name === productName) {
//             totalPrice = product.price * product.quantity;
//         }
//     }
//     return totalPrice;

//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice("Radar"));

// ASSIGNMENT #20


// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//     today: {
//     low: lowToday,
//     high: highToday,
//    icon: todayIcon =  "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//   },
// } = forecast;

// console.log(forecast);


// ASSIGNMENT #26


// Change code below this line
// function calculateMeanTemperature(forecast) {
//   const todayLow = forecast.today.low;
//   const todayHigh = forecast.today.high;
//   const tomorrowLow = forecast.tomorrow.low;
//   const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }));



// function calculateMeanTemperature(forecast) {

//     const { today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = forecast;

//     console.log(forecast);
// //   const todayLow = forecast.today.low;
// //   const todayHigh = forecast.today.high;
// //   const tomorrowLow = forecast.tomorrow.low;
// //   const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }));

// const forecast {
//     today: {
//         low: 10,
//         high: 20,
//     },
//     tomorrow: {
//         low: 20,
//         high: 30,
//     }
// }

// ASSIGNMENT #28

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];

// console.log(allScores);
// const bestScore = Math.max(...allScores);
// console.log(bestScore);
// const worstScore = Math.min(...allScores);

// ASSIGNMENT #30

// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";
//     // Change code below this line

//     const newData = { completed, category, priority, ...data };

//     return newData;

//   // Change code above this line
// }

// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));


// ASSIGNMENT #31

// // Change code below this line
// function add(...args) {

//     let totalArgs = 0;

//     for (const arg of args) {
//         totalArgs += arg;
//     }
//     return totalArgs;

//   // Change code above this line
// }

// console.log(add(15, 27));


// ASSIGNMENT #32

// // Change code below this line
// function addOverNum(...args) {
//   let total = 0;

//     for (const arg of args) {
//         if (arg > args[0]) {
//             total += arg;
//         }
//   }

//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(50, 15, 27));


// ASSIGNMENT #33

// // Change code below this line
// function findMatches(firstArray, ...args) {
//   const matches = []; // Don't change this line

//     for (const arg of args) {
//         if (firstArray.includes(arg)) {
//             matches.push(arg);
//       }
//     }

//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// ASSIGNMENT #35

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line

//       const index = this.books.indexOf(oldName);
//       console.log(index);
//       this.books.splice(index, 1, newName);
//       console.log(this.books);

//     // Change code above this line
//   },
// };

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));


// ASSIGNMENT #37

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
// getPotions() {
//   return this.potions;
// },
//   // Change code above this line
// };


// ASSIGNMENT #39


// VARIANT #1


// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//         // Change code below this line

//         for (let i = 0; i < this.potions.length; i += 1) {
//             if (potionName === this.potions[i]) {
//                 this.potions.splice(i, 1);
//             }
//         }

//         return this.potions;

//         // Change code above this line
//     }

//     };

// console.log((atTheOldToad.removePotion("Dragon breath")));


// VARIANT #2


// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//         // Change code below this line

//         const index = this.potions.indexOf(potionName);
//         this.potions.splice(index, 1);

//         return this.potions;

//         // Change code above this line
//     }

//     };

// console.log((atTheOldToad.removePotion("Dragon breath")));


// ASSIGNMENT #40

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line

//       const index = this.potions.indexOf(oldName);
//       this.potions.splice(index, 1, newName);

//       return atTheOldToad.potions;
//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));

// // ["Speed potion", "Polymorth", "Stone skin"]

// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));

// // ["Speed potion", "Polymorth", "Invisibility"]


// ASSIGNMENT #41

// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Dragon breath", price: 780 },
//         { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         for (const i of this.potions) {
//             if (i.name === newPotion.name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
//         }
//         this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
//         // const potionIndex = this.potions.indexOf(potionName);
//         let potionIndex = -1;

//         for (let i = 0; i < this.potions.length; i += 1) {
//             if (potionName === this.potions[i].name) {
//                 potionIndex = i;
//             }
//         }

//         if (potionIndex === -1) {
//             return `Potion ${potionName.name} is not in inventory!`;
//         }
//         this.potions.splice(potionIndex, 1);

//     },

//     updatePotionName(oldName, newName) {
//         const potionIndex = -1;

//         for (const potion of this.potions) {
//             if (potion.name === oldName) {
//                 potion.name = newName;
//                 return;
//             }
//         }

//         if (potionIndex === -1) {
//             return `Potion ${oldName} is not in inventory!`;
//         }

//         this.potions.splice(potionIndex, 1, newName);
//     },
// Change code above this line
;


// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));

// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));