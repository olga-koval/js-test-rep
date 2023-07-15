// Module 3 Practice 2022

/////////////////// Task 1

// let numbers = [5, 10, 15, 20, 25, 30, 35, 40, 48, 51];
// for (const number of numbers) {
//     if (number % 2 === 0) {
//         console.log(number);
//     }
// }

// let numbers2 = [5, 10, 15, 20, 25, 30, 35, 40, 48, 51];

// for (const number of numbers2) {
//     if (number % 2 !== 0) {
//         continue;
//     }
//     console.log(number);
// }


///////////////////// Task 2

// const numbers = [22, 17, 94, 37, 10];
// const MAX = 100;
// let maxElement = 0;

// for (const number of numbers) {
//     if (maxElement < number) {
//         maxElement = number;
//     } else if (maxElement === MAX) {
//         break;
// }
// }
// console.log(maxElement);


///////////////////////Task 3

// const logins = ['rew', 'qwerty', 'apple', 'js', 'row', 'col'];
// const login = 'qwerty';
// let message = '';

// if (logins.includes(login)) {
//         const loginIndex = logins.indexOf(login);
//         message = `The login is already taken, its index is - [${loginIndex}]`;
//     } else {
//         message = 'You are welcome';
// }
// console.log(message);


// console.log(false || "Mango");

// let array1 = [1, 2, 3];
// let array2 = array1;

// console.log(array1);
// console.log(array2);

// array2.push(100);

// console.log(array1);
// console.log(array2);

// array1.push(200);

// console.log(array1);
// console.log(array2);


// const array3 = [3, 5, 7, 8, 9, 7, 6, 7, 5, 7, 3, 7];
// let counter = 0;

// for (const array of array3) {
//     if (array === 7) {
//         counter += 1;
//     }
// }
// console.log(counter);

// let pricePerDroid = 800;
// let orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// console.log(totalPrice);
// console.log(message);


// function sayHi() {
//   console.log("Hello, this is my first function!");
// }

// sayHi();


// function add(a, b, c) {
//   let add = a + b + c;
//   console.log(`Addition result equals ${add}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);


// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b +c}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function add(a, b, c) {
//   // Change code below this line
// return a + b + c;
//   // Change code above this line
// }

// add(2, 5, 8); // 15
// console.log(add(2, 5, 8));

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));


// function makeMessage (name, price) {
//   // Change code below this line
//    const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// };

// console.log(makeMessage('Radar', 6150));

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
// const totalPrice =  orderedQuantity * pricePerDroid + deliveryFee;
// let message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

//   // Change code above this line
//   return message;
// }

// console.log(makeOrderMessage(2, 100, 50));

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   let totalPrice = pricePerDroid * orderedQuantity;

//   if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     let customerCreditsNew = customerCredits - totalPrice;
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCreditsNew} credits left`;
//   }

//   // Change code above this line
//   return message;
// }



// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   let totalPrice = pricePerDroid * orderedQuantity;

//   if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//   }

//   // Change code above this line
//   return message;
// }

// console.log(makeTransaction(3000, 5, 23000));


// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line
//   return isInRange;
// }

// console.log(isNumberInRange(10, 30, 40));


// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
// if (totalSpent >= 50000) {
//   discount = GOLD_DISCOUNT;
// } else if (totalSpent >= 20000 && totalSpent <= 50000) {
//   discount = SILVER_DISCOUNT;
// } else if (totalSpent >= 5000 && totalSpent <= 20000) {
//   discount = BRONZE_DISCOUNT;
// } else if (totalSpent < 5000) {
//   discount = BASE_DISCOUNT;
// }
//   // Change code above this line
//   return discount;
// }

// console.log(getDiscount(46900));


// function getShippingCost(country) {
//   let message;
//   // Change code below this line
// switch (country) {
//   case "China":
//     message = "Shipping to China will cost 100 credits";
//     break;

//   case "Chile":
//     message = "Shipping to Chile will cost 250 credits";
//     break;  

//      case "Australia":
//     message = "Shipping to Australia will cost 170 credits";
//     break;  

//       case "Jamaica":
//     message = "Shipping to Jamaica will cost 120 credits";
//     break; 

//   default:
//     message = "Sorry, there is no delivery to your country";   
// }
//   // Change code above this line
//   return message;
// }

// console.log(getShippingCost("Australia"));

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }

// console.log(getNameLength("Poly"));

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic.slice(0, 1);
// const lastElement = courseTopic.slice(-1);

// // Change code above this line

// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);


// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// // Change code above this line

// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);


// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }

// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 6));


// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
// if (message.length <= maxLength) {
//   result = message;
// } else if (message.length > maxLength) {
//   result = (message.slice(0, maxLength) + "...");
// }
//   /// Change code above this line
//   return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));

// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Change this line
//   return result;
// }

// console.log(checkForName("Egor Kolbasov", "egor"));


// function checkForSpam(message) {
//   let result;
//   // Change code below this line
// if (message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale")) {
//   result = true;
// } else {
//   result = false;
// }
//   // Change code above this line
//   return result;
// }

// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
// //   console.log(key);
//   // Значение свойства
//     console.log(book[key]);
// }

// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line

// fruits.splice(1, 1, "peach");
// fruits.splice(3, 1, "banana");

// console.log(fruits);


// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// console.log(lastElementIndex);

// const lastElement = fruits[lastElementIndex];
// console.log(lastElement);

// const lastElementOne = fruits[fruits.length - 1];
// console.log(lastElementOne);


// function getExtremeElements(array) {
//   // Change code below this line

//     const newArray = [];
//     return newArray.concat(array[0], array[array.length - 1]);

//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));



// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//     words = Array.from((message).split(delimiter));
//   // Change code above this line
//   return words;
// }

// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));


// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line

//     //Variant 1
//     const words = message.split(" ").length;
//     const totalPrice = words * pricePerWord;
//     return totalPrice;

//     //Variant 2    
//     // return (message.split(" ").length) * pricePerWord;

//    // Change code above this line
// }



// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));


// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line

//     string = array.join(delimiter);

//   // Change code above this line
//   return string;
// }

// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));

// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

// function slugify(title) {
//   // Change code below this line

//    const slug = title.split(" ").join("-").toLowerCase();
//    return slug;

//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("Ten secrets of JavaScript"));


// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);


// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);


// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     let newArray = firstArray.concat(secondArray).slice(0, maxLength);
//     return newArray;

//     // Change code above this line
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));


// function calculateTotal(number) {
//  // Change code below this line

//    let sum = 0;
//    for (let i = 1; i <= number; i += 1) {
//        sum += i;
//        console.log(sum);
//   }
//     return sum;

//   // Change code above this line
// }

// console.log(calculateTotal(3));

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//     for (let i = 0; i < order.length; i += 1) {
//         const item = order[i];
//         total += item;
//     }

//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));


// function findLongestWord(string) {
//   // Change code below this line

//     let wordsArray = string.split(" ");
//     let longestWord = wordsArray[1];

//     for (const word of wordsArray) {
//         if (longestWord.length < word.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;

//   // Change code above this line
// }

// console.log(findLongestWord("I catch youyou"));
// console.log(findLongestWord("May the force be with you"));


// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line

//     for (let i = min; i <= max; i += 1) {
//         numbers.push(i);
//     }

//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(29, 34));


// function filterArray(numbers, value) {
//    // Change code below this line

//     let newArray = [];

//     for (const number of numbers) {
//         if (number > value) {
//             newArray.push(number);
//         }
//     }
//     return newArray;

// }

//   // Change code above this line


// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }

// console.log(checkFruit("mandarin"));


// function getCommonElements(array1, array2) {
//   // Change code below this line

//     const commonArray = array1.concat(array2);
//     console.log(commonArray);
//     const newArray = [];
//     let i = 0;

//     for (const number of commonArray) {
//         if (number.includes(commonArray[i])) {
//             newArray.push(number);
//         }
//     }
//     return newArray;


//  // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));


// function getCommonElements(array1, array2) {
//   // Change code below this line

//     const commonNumbers = [];

//     for (const num of array1) {
//         if (array2.includes(num)) {
//             commonNumbers.push(num);
//         }
//     }

//     return commonNumbers;

//  // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));


// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));



// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const item of order) {
//     total += item;
//   }

//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));



// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));



// function getEvenNumbers(start, end) {
//    // Change code below this line

//     let newArray = [];

//     for (let i = start; i <= end ; i += 1) {
//         if (i % 2 === 0) {
//             newArray.push(i);
//             console.log(newArray);
//         }
//     }
//     return newArray;

//     // Change code above this line
// }

// console.log(getEvenNumbers(3, 11));



// function includes(array, value) {
//   // Change code below this line

//     for (const elem of array) {
//         // console.log(elem);
//         if (elem === value) {
//             return true;
//         } 
//     }
//     return false;


//   // Change code above this line
// }


// function includes(array, value) {
//   // Change code below this line

//     for (const elem of array) {
//         // console.log(elem);
//         if (elem === value) {
//             return true;
//         }
//     }
//     return false;


//   // Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };


// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { country: "Jamaica", city: "Kingston" };


// console.log(apartment);


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// for (const key in apartment) {
//     keys.push(key);
// }
// console.log(keys);


// for (const value in apartment) {
//     values.push(apartment[value]);
// }
// console.log(values);



// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line

//   keys.push(key);
//   values.push(apartment[key]);

//   // Change code above this line
// }


// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//     propCount = Object.keys(object).length;
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//     values.push(apartment[key]);
// }


// function countProps(object) {

// const propCount = Object.keys(object).length;
// return propCount;

// }

// console.log(countProps({ name: "Mango", age: 2 }));


// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line

//     let values = Object.values(salaries);
//     for (const value of values) {
//         totalSalary += value;
//     }

//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));



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

// console.log(hexColors);
// console.log(rgbColors);


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line

//     for (const product of products) {
//         if (productName === product.name) {
//             return product.price;
//         }
//     }
//     return null;
// }


//   // Change code above this line


// console.log(getProductPrice("Scanner"));


// const gems = [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 2000, quantity: 1 },
//     { name: 'Ruby', price: 1500, quantity: 2 },
// ];

// const calcTotalPrice = function (gems, name) {
//     for (const gem of gems) {
//         if (gem.name === name) {
//             const gemPrice = gem.price * gem.quantity;
//             return gemPrice;
//         }
//     }

// };

// console.log(calcTotalPrice(gems, 'Emerald'));
// console.log(calcTotalPrice(gems, 'Diamond'));



// convert("1", 2, 3, "4");

// function convert(...args) {
//     console.log(args);

//     let convertedArray = [];

//     for (let arg of args) {
//         if (typeof arg === "string") {
//             convertedArray.push(Number(arg));
//         } else if (typeof arg === "number") {
//             convertedArray.push(String(arg));
//         }     
//     }
//     return convertedArray;
// }

// console.log(convert("1", 2, 3, "4"));


// const users = [
//     {
//         id: "708-302-16bcd-18ed",
//         name: "Moore Hensley",
//         email: "MooreHensley@gmail.cop",
//         eyeColor: "blue",
//         friends: ["Sharon Pace"],
//         isActive: true,
//         balance: 3821,
//         skills: ["tempor", "vempoe", "alance", "cheko"],
//         gender: "female",
//         age: 34,

//     },
//     {
//         id: "802-302-16bcd-18ed",
//         name: "Alan Delon",
//         email: "AlanD@hotmail.cop",
//         eyeColor: "green",
//         friends: ["Elon Mask"],
//         isActive: false,
//         balance: 10005,
//         skills: ["genhe", "koole", "shamr", "thaco"],
//         gender: "male",
//         age: 78,

//     },
//     {
//         id: "305-302-16bcd-18ed",
//         name: "Brad Pitt",
//         email: "brad@yahoo.cop",
//         eyeColor: "grey",
//         friends: ["J Lo"],
//         isActive: true,
//         balance: 5600,
//         skills: ["sweeta", "candy", "tant", "seta"],
//         gender: "male",
//         age: 51,

//     },
// ]

// console.log(users);

// /////////////////////////////////

// const newObject = {};
// const keys = Object.keys(users[0]);

// for (const key of keys) {
//     newObject[key] = [];
// }

// for (const value in newObject) {
//     console.log(newObject[value]);  
//     for (const user of users) {
//         console.log(user[value]);
//         newObject[value].push(user[value]);
// }    
// }
// console.log(newObject);


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     // Change code below this line

//     const propsArray = [];

// /////////////// variant #1
//     // for (const product of products) {
//     //     if (product.hasOwnProperty(propName)) {
//     //         propsArray.push(product[propName]);
//     //     }
//     // }

// /////////////// variant #2
//     for (const product of products) {
//         for (const key in product) {
//             if (key == propName) {
//                 propsArray.push(product[key])
//             }
//         }

//         // Change code above this line
//     }
//     return propsArray;
// }

// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));



// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];


// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки

//     let sum = 0;

//     for (const product of products) {
//         if (product.name === productName) {
//             sum = product.price * product.quantity;
//         }
//     }
//     return sum;

//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Scanner"));



// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });



// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);



// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);



// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//     const newData = { completed, category, priority, ...data };
//     return newData;

//   // Change code above this line
// }


// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
// { category: "General", priority: "Low", text: "Choose shampoo", completed: false }


// Change code below this line
// function add(...args) {
//     let sum = 0;
//     for (const arg of args) {
//         sum += arg;
//     }
//     return sum;
//   // Change code above this line
// }

// console.log(add(12, 4, 11, 48));

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     // Change code below this line
//     message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//     // Change code above this line
//     return message;
// }

// console.log(checkPassword("jqueryismyjam"));


// const checkAmount = Number.parseFloat((prompt("Enter check amount, please")));
// console.log(`The check amount is ${checkAmount}`);

// const tipPercent = Number.parseFloat(prompt("Enter tip percent, please"));
// console.log(`The tip percent is ${tipPercent}%`);

// const tipAmount = Number((checkAmount * tipPercent / 100).toFixed(2));
// console.log(`The tip amount is ${tipAmount}`);

// const totalSum = checkAmount + tipAmount;
// console.log(`The total sum to pay is ${totalSum}`);

// const message = `The check amount is ${checkAmount}.\nThe tip amount is ${tipAmount}.\nThe total sum to pay is ${totalSum}.`;
// alert(message);


// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic.slice(0, 1);
// const lastElement = courseTopic.slice(-1);

// // Change code above this line

// console.log(lastElement);


// const name = prompt("Enter name"); //return string or null
// const years = prompt("Enter years");
// const responseToNumber = Number(years); //change a string to a number
// const isNumber = !isNaN(responseToNumber); //check for NaN

// let color = prompt("Enter the color").toLocaleLowerCase();
// let message;

// switch (color) {
//     case "red":
//         message = `Your color is ${color}.`;
//         break;

//     case "yellow":
//         message = `Your color is ${color}.`;
//         break;

//     case "green":
//         message = `Your color is ${color}.`;
//         break;

//     default:
//         message = "Invalid color.";
// }

// console.log(message);



// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if(message.length <= maxLength) {
//     result = message;
//   } else if (message.length > maxLength) {
//       result = message.slice(0, maxLength) + "...";
//   }
//   /// Change code above this line
//   return result;
// }


// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Curabitur ligula sapien", 16));


// 1) cколько времени нужно улитке чтобы выбраться из колодца
// 2) улитка на 1 день проползает 7 метров вверх
// 3) улитка за ночь сползает на 2 метра вниз
// 4) 3 колодца: 42 метра, 17 метров, 18 метров

// function calcDays(depth) {

//     const daySpeed = 7;
//     const nightSpeed = 2;
//     let distance = 0;
//     let days = 0;

//     while (distance < depth) {
//         distance += daySpeed;
//         days += 1;
//         if (distance < depth) {
//             distance -= nightSpeed;
//             continue;
//         } break;
//     }
//     return days;
// }

// console.log(calcDays(42));
// console.log(calcDays(17));
// console.log(calcDays(18));


// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Change this line
//   return result;
// }

// console.log(checkForName("Egor Kolbasov", "Egor"));


// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//     let updatedMessage = message.toLowerCase();

//   if(updatedMessage.includes("spam") || updatedMessage.includes("sale")) {
//     result = true;
//   } else {
//     result = false;
//   }
//   // Change code above this line
//   return result;
// }

// console.log(checkForSpam("Amazing SalE, only tonight!"));


// function checkForSpam(message) {
//   let result;
//   // Change code below this line

//   if(message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale")) {
//     result = true;
//   } else {
//     result = false;
//   }
//   // Change code above this line
//   return result;
// }

// console.log(checkForSpam("Amazing SalE, only tonight!"));


// 1) Получить имя от prompt
// 2) Взять каждый парный символ с имени

// const name = prompt("Enter your name");
// console.log(name);

// for (let i = 0; i < name.length; i += 1) {
//     if (i % 2 !== 0) {
//         console.log(name[i]);
//     }
// }




// const number = Number(prompt("Enter a number less than 10"));

// while (number < 10) {
//     if (number >= 10) {
//         prompt("Please check the number, it should be less than 10"); 
//     }
//     console.log(number);
// }


////////////////// CASE for practice /////////////////////////

//find a middle character of a word
//user is going to input a word. Your task is to find the middle character of this word.
//if the word's length is odd - return a middle character. If the word's length is even - return the middle 2 characters.
//you should validate for an empty value and for a value with spaces only, show the message "Invalid value".
//for user input use "prompt" function; use "alert" function for displaying a result

// const word = prompt("Please enter a word.");

// if (word === null || word.trim() === "") {
//     alert("Invalid value!");
// } else {
//     const wordLength = word.length;
//     if (wordLength % 2 === 0) {
//         const firstIndex = wordLength / 2 - 1;
//         const lastIndex = wordLength / 2 + 1;
//         const middleLetters = word.slice(firstIndex, lastIndex);
//         alert(middleLetters);
//     } else if (wordLength % 2 !== 0) {
//         const middleIndex = Math.floor(wordLength / 2);
//         const middleLetter = word[middleIndex];
//         alert(middleLetter);
//     }
// }


// const names = ["Masha", "Olya", "Petya", "Vasya", "Petya", "Valya", "Petya"];
// const badName = "Petya";
// const goodName = "Seva";
// let countNames = 0;

// for (let i = 0; i < names.length; i += 1) {
//     if (names[i] === badName) {
//         names[i] = goodName;
//         countNames += 1;
//         if (countNames === 2) {
//             break;
//         }
//     }
// }

// console.log(names);
// console.log(countNames);


//['Masha', 'Olya', 'Petya', 'Vasya', 'Valya', 'Seva']


// const names = ["Masha", "Olya", "Petya", "Vasya", "Petya", "Valya", "Petya", "Olya", "Seva"];

// let uniqueNames = [];

// for (name of names) {
//     if (!uniqueNames.includes(name)) {
//         uniqueNames.push(name);
//     } 
// }

// console.log(uniqueNames);


// const names = ["Masha", "Olya", "Petya", "Vasya", "Petya", "Petya", "Valya", "Petya", "Olya", "Seva"];

// console.log(names);


// for (let i = 0; i < names.length; i += 1) {
//     for (let j = i + 1; j < names.length; j += 1) {
//         if (names[i] === names[j]) {
//             names.splice(j, 1);
//             j -= 1;
//         }
//     } 
// }

// console.log(names);


// const names = ["Masha", "Olya", "Petya", "Vasya", "Petya", "Petya", "Valya", "Petya", "Olya", "Seva"];
// console.log(names);

// for (let name of names) {
//     if (name === "Petya") {
//         const nameIndex = names.indexOf(name);
//         names[nameIndex] = "Roman";
//     }
// }

// console.log(names);

// const a = ["a", "b", "c"];
// const b = [1, [2, 3]];
// const c = 0;

// //result ["a", "b", "c", 0, 1, 2, 3];

// const bNew = b[0];
// console.log(bNew);
// const bArr = b[1];
// console.log(bArr);

// const d = a.concat(c, bNew, bArr);
// console.log(d);;



//result ["a", "b", "c", "a", "b", "c", "g", "h"];
// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];
// const result = a.splice(3, 3, "a", "b", "c");
// console.log(a);

// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];
// const result = a.copyWithin(3, 0, 3);
// console.log(result);


//result [1, 2, 3, 4, 5, 0, 0, 0, 9, 10];
//////////////////////////////Option#1
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = a.splice(5, 3, 0, 0, 0);
// console.log(a);
/////////////////////////////Option#2
// const result = a.fill(0, 5, 8);
// console.log(a);


//result [1, 2, 3, 4, 5, 6, 7];
// const a = [1, 2, [3, 4], [5, 6], 7];

////////////////////////////OPTION#1
// let result = [];
// for (const item of a) {
//     if (Array.isArray(item)) {
//         result.push(item[0], item[1]);
//     } else {
//         result.push(item);
//     }
// }
// console.log(result);

////////////////////////////OPTION#2
// const a = [1, 2, [3, 4], [5, 6], 7];
// const result = a.flat(); //метод flat не меняет исходный массив, а возвращает новый так что нужна новая переменная
// console.log(result);


//------------------------------
/////////A NEW TASK
// узнать какой индекс у последней "n"

// const a = ["a", "k", "n", "h", "n", "n", "k"];

////////////////////////////OPTION#1
// let indexN = 0;
// for (let i = 0; i < a.length; i += 1) {
//     if (a[i] === "n") {
//         indexN = i;
//     }
// }
// console.log(indexN);

////////////////////////////OPTION#2
// const indexN = a.lastIndexOf("n");
// console.log(indexN);


//------------------------------------
//result = [7, 6, 5, 4, 3, 2, 1];
// const a = [1, 2, 3, 4, 5, 6, 7];
// let newArr = [];

////////////////////////////OPTION#1
// for (let i = a.length - 1; i >= 0; i -= 1) {
//     newArr.push(a[i]);
// }
// console.log(newArr);

////////////////////////////OPTION#2
// newArr = a.reverse();
// console.log(newArr);

//---------------------------------
//result ["a", "l", "o", "n", "a"]

// const a = 'alona';
// let b = [];

// b = Array.from(a);
// console.log(b);

// b = a.split("");
// console.log(b);

//--------------------------------
//result >> alona (+ Alona)

// const a = ["a", "l", "o", "n", "a"];
// let b = a.join(""); ////OPTION #1
// const b = a.toString().replaceAll(",", ""); ////OPTION #2
// console.log(b); 
// const c = b.replace(b[0], b[0].toUpperCase());
// console.log(c);


// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length -1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);


//-------------------------------------
//создать функцию которая будет сортировать юзеров на мужчин и женщин
// функция будет принимать 2 параметра - массив users и массив men
// функция возвращает массив women ['Anna', 'Larisa', 'Olga']


// const users = ["Artem", "Anna", "Larisa", "Maksim", "Svetlana","David", "Roman", "Olga"];
// const men = ["Artem", "Maksim", "David", "Roman"];

// function sortUsers(users, men) {
//     let women = [];

//     for (const user of users) {
//         if (men.includes(user)) {
//             continue;
//         } else {
//             women.push(user);
//         }
//     }
//     return women;
// }

// console.log(sortUsers(users, men));

//-----------------------------------------

// const users = ["Artem", "Anna", "Larisa", "Maksim", "Svetlana","David", "Roman", "Olga"];
// const men = ["Artem", "Maksim", "David", "Roman"];

// function sortUsers(users, men) {
//     let women = [];
//     let menIndex = [];
//     let womenIndex = [];

//     for (let i = 0; i < users.length; i += 1) {
//         if (!men.includes(users[i])) {
//             women.push(users[i]);
//             womenIndex.push(i);
//         } else {
//             menIndex.push(i);
//         }
//         // return women;

//     }
//     console.log(women);
//     console.log(womenIndex);
//     console.log(menIndex);
// }

// sortUsers(users, men);


//-------------------------------------

// const all = ["Artem", "Anna", "Larisa", "Maksim", "Svetlana","David", "Roman", "Olga"];
// const boys = ["Artem", "Maksim", "David", "Roman"];

// function sortUsers(users, men) {
//     let women = [];

//     for (let i = 0; i < users.length; i += 1) {
//         if (!~men.indexOf(users[i])) {
//             women.push(users[i]);
//        }

//     }
//     return women;
// }

// console.log(sortUsers(all, boys));

//--------------------------------------

// function getExtremeElements(array) {
//   // Change code below this line
//     let newArray = [];

//     const firstElem = array[0];
//     const lastElem = array[array.length - 1];
//     newArray.push(firstElem, lastElem);

//     return newArray;

//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));

//--------------------------------------

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//     words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "));

//--------------------------------------

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     let countWords = 0;
//     let totalPrice = 0;
//     const words = message.split(" ");

//     for (const word of words) {
//         countWords += 1;
//         totalPrice = countWords * pricePerWord;
//     }
//     return totalPrice;

//    // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));

//>>>>>>>>>>>
//Variant 1
//     const words = message.split(" ").length;
//     const totalPrice = words * pricePerWord;
//     return totalPrice;

//>>>>>>>>>>>
//     //Variant 2    
//     // return (message.split(" ").length) * pricePerWord;


//------------------------------------------

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line

//     string = array.join(delimiter);

//   // Change code above this line
//   return string;
// }

// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));


//------------------------------------------

// const str = "1, 25, 255, 24, 56, 67, 876";
// //создать 2 функции
// // функция 1 - преобразовывает строку в массив 
// // функция 2 - выбирает четные числа


// function makeArray(str) {
//     let array = [];
//     array = str.split(", ");
//     console.log(array);

//     let evenArray = [];
//     for (const item of array) {
//         if (item % 2 === 0) {
//             evenArray.push(item);
//         }
//     }
//     return evenArray;
// }

// console.log(makeArray(str));

//>>>>>>>>>>>>>>>>>>

// const str = "1, 25, 255, 24, 56, 67, 876";

// // создать функции
// // преобразовать строку в массив 
// // выбрать четные числа
// // четные числа нужно умножить на 10
// // нечетные числа поделить на 5 (и округлить)
// // посчитать сумму всех чисел


// function makeArray(str) {
//     let array = [];
//     array = str.split(", ");
//     console.log(array);

//     let totalSum = 0;

//     for (let item of array) {
//         let sum = 0;
//         if (item % 2 === 0) {
//             sum = item * 10;
//             totalSum += sum;
//         } else if (item % 2 !== 0) {
//             sum = item / 5;
//             totalSum += sum;
//         }
//     }
//     return Math.round(totalSum);

// }

// console.log(makeArray(str));

//------------------------------------------

// function slugify(title) {
//     // Change code below this line
//     return title.toLowerCase().split(" ").join("-");

//     // Change code above this line
// }

// console.log(slugify("Arrays for begginers"));


//------------------------------------------
///////-------TASK FROM PRACTICE

// // создать функции
// // преобразовать строку в массив 
// // выбрать четные числа
// // четные числа нужно умножить на 10
// // нечетные числа поделить на 5 (и округлить)
// // посчитать сумму всех чисел

// const str = "1, 25, 255, 24, 56, 67, 876";
// let array = [];
// array = str.split(", ");
// let evenNum = [];
// let oddNum = [];

// /**
//  * find even numbers in an array
//  * @param {String} str - string with numbers
//  * @returns {Array} evenNum - array with even numbers
//  */

// function findEvenNumbers(str) {
//     for (const item of array) {
//         if (item % 2 === 0) {
//             evenNum.push(item);
//         }
//     }
//     return evenNum;
// }
// findEvenNumbers(str)

// /**
//  * find even numbers in an array
//  * @param {String} str - string with numbers
//  * @returns {Array} oddNum - array with odd numbers
//  */

// function findOddNumbers(str) {
//     for (const item of array) {
//         if (item % 2 !== 0) {
//             oddNum.push(item);
//         }
//     }
//     return oddNum;
// }
// findOddNumbers(str)

// /**
//  * find the total amount of multiplied even numbers and divided odd numbers
//  * @param {Array} evenNum - an array with even numbers
//  * @param {Array} oddNum - an array with odd numbers
//  * @returns {Number} total - the addition of multiplySum and divideSum
//  */

// function findTotalSum(evenNum, oddNum) {
//     let multiplySum = 0;
//     let divideSum = 0;
//     let total = 0;

//     for (const number of evenNum) {
//         const multNum = number * 10;
//         multiplySum += multNum;
//     }

//     for (const number of oddNum) {
//         const divideNum = Math.round(number / 5);
//         divideSum += divideNum;
//     }

//     total = multiplySum + divideSum;
//     return total;


// }
// console.log(findTotalSum(evenNum, oddNum));


// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3, fruits.length);


// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);


//------------------------------------------
///////-------TASK FROM PRACTICE

// const number = 12345;

// function reverseNumber(number) {
//     let numToString = String(number);
//     let reverseString = "";

//     if (numToString[0] === "-") {
//         numToString = String(numToString * -1);
//         for (let i = numToString.length - 1; i >= 0; i -= 1) {
//             reverseString += numToString[i];
//         }
//         reverseString = reverseString * -1;
//     } else {
//         for (let i = numToString.length - 1; i >= 0; i -= 1) {
//             reverseString += numToString[i];
//         }
//     }
//     return Number(reverseString);
// }

// console.log(reverseNumber(-12345)); //-54321
// console.log(reverseNumber(12345)); //54321
// console.log(reverseNumber(-98765)); //-56789
// console.log(reverseNumber(98765)); //56789
// console.log(reverseNumber(321)); //123


//------------------------------------------
///////-------TASK FROM PRACTICE



// function convert(...args) {
//     let array = [];

//     for (let arg of args) {
//         if (typeof arg === "string") {
//             arg = Number(arg);
//             array.push(arg);
//         } else {
//             arg = String(arg);
//             array.push(arg);
//         }
//     }
//     return array;

// }


// console.log(convert("1", 2, 3, "4")); //[1, "2", "3", 4]
// console.log(convert(5, 6, "7", "8")); //['5', '6', 7, 8]


//------------------------------------------
///////-------TASK FROM PRACTICE


// function containsValue(array, value) {
//     if (array.includes(value)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(containsValue([2, 5, 8], 2));
// console.log(containsValue([12, 4, 6], 5));

//------------------------------------------

// function makeArray(firstArray, secondArray, maxLength) {
//     const newArray = firstArray.concat(secondArray);
//     return newArray.slice(0, maxLength);
// }


// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); //["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

//>>>>>>>>>>>>>>>>>>>>>

// function makeArray(firstArray, secondArray, maxLength) {
//     let newArray = firstArray.concat(secondArray);

//     if (newArray.length > maxLength) {
//         newArray = newArray.slice(0, maxLength);
//         return newArray;
//     } else {
//         return newArray;
//     }
// }


// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); //["Mango", "Poly", "Ajax"]


//------------------------------------------
///////-------TASK FROM PRACTICE
//------------------------------------------

//УСЛОВИЕ ЗАДАЧИ
// 1) создать массив друзей
// 2) значением массива будут объекты
// 3) объект состоит из ключа name и books; значения books []
// 4) создать функцию, которая будет принимать массив и перебирать объекты в нем и возвращать имя юзера который прочитал больше всего книг

// const friends = [
//     {
//         name: "Anna",
//         books: ["Bible", "Harry Potter"],
//     },
//     {
//         name: "Bob",
//         books: ["War and Peace", "Last Chance", "Novoland", "Romeo and Juliet", "Peter Pen", "Alice in Wonderland", "Pamela"],
//     },
//     {
//         name: "Alice",
//         books: ["War and Peace", "Romeo and Juliet"],
//     },
//     {
//         name: "Alex",
//         books: ["Anna Karenina", "Bible", "Harry Potter", "Romeo and Juliet", "Martin Eden", "Best Friends", "Twilights"],
//     },
// ];

/**
* Identifies the users who read the biggest number of books
* @param { Array } arr > an array of users
* @returns { String } readMostUser > the name of the user who read the biggest number of books
*/


// function readMostBooks(arr) {
//     let maxBooks = 0;
//     let readMostUser;
//     for (let user of arr) {
//         if (user.books.length > maxBooks) {
//             maxBooks = user.books.length;
//             readMostUser = user.name;
//         }
//     }
//     return readMostUser;
// }

// console.log(readMostBooks(friends));


// 5) добавляем условие к задаче - найти массив юзеров кто прочитал больше всего книг (например, если несколько юзер прочитали одинаковое количество книг)


/**
* Identifies the users who read the biggest number of books
* @param { Array } arr > an array of users
* @returns { Array } readMostUser > the array of users who read the biggest number of books
*/


// function readMostBooks(arr) {
//     let maxBooks = 0;
//     let readMostUser = [];
//     for (let user of arr) {
//         if (user.books.length > maxBooks) {
//             maxBooks = user.books.length;
//         }
//     }
//     for (let user of arr) {
//         if (maxBooks === user.books.length) {
//             readMostUser.push(user.name);
//         }
//     }
//     return readMostUser;
// }

// console.log(readMostBooks(friends));


//------------------------------------------
///////-------TASK FROM PRACTICE
//------------------------------------------


// 1) создать массив объектов
// 2) у юзеров есть друзья
// 3) найти зрузей что совпадают


// const userBill = {
//     friends: ["Maria", "John", "Rick", "Sheril", "Alex", "Mary", "Steve"],
// };

// const userTom = {
//     friends: ["Kate", "Sara", "Rick", "Sheril", "Fabio", "Meril", "Klara"],
// };

// const users = {
//     userBill,
//     userTom,
//     friends: ["Maria", "Rick", "Sara"],
//     findCommonFriends() {
//         const input = prompt("Please enter your friend's name");
//         const userFriends = this[input].friends;
//         const commonFriends = [];

//         for (const friend of this.friends) {
//             if (userFriends.includes(friend)) {
//                 commonFriends.push(friend);
//             }
//         }
//         return commonFriends;
//     }
// }

// console.log(users.findCommonFriends())



// function calculateTotal(number) {
//     // Change code below this line

//     let total = 0;

//     for (let i = 0; i <= number; i += 1) {
//         total += i;
//     }
//     return total;
//     // Change code above this line
// }

// console.log(calculateTotal(24));


// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//     for (const item of order) {
//         total += item;
//     }
//     // Change code above this line
//     return total;
// }

// console.log(calculateTotalPrice([164, 48, 291]));


// function findLongestWord(string) {
//     // Change code below this line
//     const wordsArray = string.split(" ");
//     let longestWord = "";

//     for (const word of wordsArray) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;

//     // Change code above this line
// }

// console.log(findLongestWord("May the force be with you"));


// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Change code below this line

//     for (let i = min; i <= max; i += 1) {
//         numbers.push(i);
//     }


//     // Change code above this line
//     return numbers;
// }

// console.log(createArrayOfNumbers(14, 17));


// function filterArray(numbers, value) {
//     // Change code below this line

//     let newArr = [];

//     for (const number of numbers) {
//         if (number > value) {
//             newArr.push(number);
//         }
//     }
//     return newArr;
//     // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));


// function getCommonElements(array1, array2) {
//     // Change code below this line
//     let newArr = [];

//     for (const item of array1) {
//         if (array2.includes(item)) {
//             newArr.push(item);
//         }
//     }
//     return newArr;

//     // Change code above this line
// }

// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));


// function filterArray(numbers, value) {
//     // Change code below this line
//     const filteredNumbers = [];

//     for (const number of numbers) {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     }

//     return filteredNumbers;
//     // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));


// function getEvenNumbers(start, end) {
//     // Change code below this line
//     let evenNumbers = [];

//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             evenNumbers.push(i);
//         }
//     }
//     return evenNumbers;

//     // Change code above this line
// }

// console.log(getEvenNumbers(2, 5));


// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//     if (i % 5 === 0) {
//         number = i;
//         break;
//     }
// }

// console.log(number)


// function findNumber(start, end, divisor) {
//     // Change code below this line


//     for (let i = start; i < end; i += 1) {
//         if (i % divisor === 0) {
//             return i;
//         }
//     }

//     // Change code above this line
// }

// console.log(findNumber(16, 35, 7));



// function includes(array, value) {
//     // Change code below this line

//     for (const item of array) {
//         if (item === value) {
//             return true;
//         }
//     }
//     return false;

//     // Change code above this line
// }

// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));



//------------------------------------------
///////-------TASK FROM PRACTICE
//------------------------------------------


// const hogvarts = {
//     griffindor: [
//         {
//             name: "Harry",
//             points: 15
//         },
//         {
//             name: "Hermiona",
//             points: 16
//         },
//         {
//             name: "Ron",
//             points: 14
//         },

//     ],
//     sliserin: [
//         {
//             name: "Draco",
//             points: 25
//         },
//         {
//             name: "Goyl",
//             points: 40
//         },
//         {
//             name: "Crabbe",
//             points: 5
//         },

//     ],

//     // 1) написать метод объекта кто есть на факультете - isOnFaculty; принимает 1 параметр (один из факультетов) 
//     // 2) написать метод объекта сколько всего поинтов - calculateFacultyPoints; принимает 1 параметр факультет и считает всего поинтов по факультету

//     isOnFaculty(faculty) {
//         const chosenFaculty = this[faculty];
//         let namesArray = [];
//         for (const student of chosenFaculty) {
//             namesArray.push(student.name);
//         }
//         return namesArray.join(", ");
//     },

//     calculateFacultyPoints(faculty) {
//         const chosenFaculty = this[faculty];
//         let totalPoints = 0;
//         for (const point of chosenFaculty) {
//             totalPoints += point.points;
//         }
//         return totalPoints;
//     }

// }
// console.log(hogvarts.isOnFaculty("griffindor"));
// console.log(hogvarts.calculateFacultyPoints("griffindor"));



//------------------------------------------
///////-------TASK FROM PRACTICE
//------------------------------------------


// 1) создать функцию которая принимает объект
// 2) возвращает массив ключей объекта
// нельзя использовать методы Object.keys() или Object.values()


// function getKeys(object) {
//     let keyArray = [];
//     for (const key in object) {
//         keyArray.push(key);
//     }
//     return keyArray;
// }

// getKeys({ keyOne: 1, keyTwo: 2, keyThree: 3 });
// console.log(getKeys({ keyOne: 1, keyTwo: 2, keyThree: 3 }));


//------------------------------------------
///////-------TASK FROM PRACTICE
//------------------------------------------

// создать функцию getvalues которая принимает объект и возвращает массив значений этого объекта

// function getValues(object) {
//     let valueArray = [];
//     for (const key in object) {
//         valueArray.push(object[key])
//     }
//     return valueArray;
// }

// console.log(getValues({ keyOne: 1, keyTwo: 2, keyThree: 3 }));


// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
// };

// console.log(getValues(book));


//------------------------------------------
///////-------TASK FROM PRACTICE
//------------------------------------------

// const users = [
//     {
//         id: "701bc405nc",
//         name: "Jack Dock",
//         eyeColor: "blue",
//         friends: ["Sharon Pace"],
//         isActive: false,
//         balance: 2811,
//         skills: ["cooking", "cleaning"],
//         gender: "male",
//         age: 37,
//     },
//     {
//         id: "566bc405nc",
//         name: "Mary Brown",
//         eyeColor: "gray",
//         friends: ["Betty Pace"],
//         isActive: true,
//         balance: 5008,
//         skills: ["sewing", "gardening"],
//         gender: "female",
//         age: 58,
//     },
//     {
//         id: "218bc405nc",
//         name: "Larry Smith",
//         eyeColor: "green",
//         friends: ["John Brown"],
//         isActive: false,
//         balance: 3000,
//         skills: ["painting", "cleaning"],
//         gender: "male",
//         age: 45,
//     },
// ]


// 1) напиши функцию, которая дает список новый объект 
// 2) в этом новом объекте у нас есть список ключей  объекта users и в каждом ключе есть массив значений этого объекта


// function createNewObject(object) {
//     const newObject = {};
//     const keys = Object.keys(object[0]);

//     for (const key of keys) {
//         newObject[key] = [];
//     }

//     for (const objKey in newObject) {
//         for (const user of object) {
//             newObject[objKey].push(user[objKey]);
//         }
//     }

//     let newObj = [];
//     for (const objKey in newObject) {
//         newObj[objKey] = newObject[objKey].flat();
//     }

//     const finalObj = {};
//     for (const objKey in newObj) {
//         finalObj[objKey] = [];
//         for (let i = 0; i < newObj[objKey].length; i += 1) {
//             if (newObj[objKey].indexOf(newObj[objKey][i]) === i) {
//                 finalObj[objKey].push(newObj[objKey][i]);
//             }
//         }
//     }


//     return finalObj;
// }

// console.log(createNewObject(users));


//------------------------------------------
///////-------TASK FROM PRACTICE
//------------------------------------------

// 1) напиши функцию, которая будет рандомно генерировать статус true или false
// 2) если число от 0 до 0.5, то возвращает true
// 3) если число от 0.5 до 1, то возвращает false

// function generateStatus() {
//     const number = Math.random().toFixed(2);
//     if (number < 0.5) {
//         return true;
//     } else if (number > 0.5) {
//         return false;
//     }
// }
// generateStatus()


// const users = [
//     {
//         id: "701bc405nc",
//         name: "Jack Dock",
//         eyeColor: "blue",
//         friends: ["Sharon Pace"],
//         isActive: false,
//         balance: 2811,
//         skills: ["cooking", "cleaning"],
//         gender: "male",
//         age: 37,
//     },
//     {
//         id: "566bc405nc",
//         name: "Mary Brown",
//         eyeColor: "gray",
//         friends: ["Betty Pace"],
//         isActive: true,
//         balance: 5008,
//         skills: ["sewing", "gardening"],
//         gender: "female",
//         age: 58,
//     },
//     {
//         id: "218bc405nc",
//         name: "Larry Smith",
//         eyeColor: "green",
//         friends: ["John Brown"],
//         isActive: false,
//         balance: 3000,
//         skills: ["painting", "cleaning"],
//         gender: "male",
//         age: 45,
//     },
// ]
// console.log(users);


// function addNewKeys(object) {
//     const arrayCopy = [];
//     for (const item of object) {
//         const newObj = { ...item };
//         newObj.isVIP = generateStatus();
//         newObj.skills = "no info";
//         arrayCopy.push(newObj);
//     }
//     return arrayCopy;
// }

// console.log(addNewKeys(users));


// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//     if (apartment.hasOwnProperty(key)) {
//         keys.push(key);
//         values.push(apartment[key]);
//     }
// }
// console.log(keys);
// console.log(values);

// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             propCount += 1;
//         }
//     }
//     // Change code above this line
//     return propCount;
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({}));



// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//     values.push(apartment[key]);
// }


// console.log(keys);
// console.log(values);


// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;
//     const keys = Object.keys(object);

//     for (const key of keys) {
//         if (object.hasOwnProperty(key)) {
//             propCount += 1;
//         }
//     }

//     return propCount;
//     // Change code above this line
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));



//------------------------------------------
///////-------TASK FROM PRACTICE
//------------------------------------------

//1) fuction gets an object and the model of the car
//2) returns the most expensive car model
// we need to use destructing

// const cars = {
//     audi: {
//         q7: 100000,
//         a4: 150000,
//         a6: 220000,
//     },
//     nissan: {
//         almera: 90000,
//         tiana: 60000,
//         gtr: 80000,
//     },
//     ford: {
//         F150: 75000,
//         Kuga: 60000,
//         Focus: 50000,
//     },
// }

// function findMostExpensiveCar(object, brand) {
//     const carValues = object[brand];
//     const keys = Object.keys(carValues);
//     let maxPrice = 0;
//     let carName;

//     for (const key of keys) {
//         if (maxPrice < carValues[key]) {
//             maxPrice = carValues[key];
//             carName = key;
//         }
//     }
//     return carName;
// }

// console.log(findMostExpensiveCar(cars, "ford"));



//------------------------------------------
///////-------TASK FROM PRACTICE
//------------------------------------------


// find the cheapest car in the CAR object

// const cars = {
//     audi: {
//         q7: 100000,
//         a4: 150000,
//         a6: 220000,
//     },
//     nissan: {
//         almera: 90000,
//         tiana: 60000,
//         gtr: 80000,
//     },
//     ford: {
//         F150: 75000,
//         Kuga: 60000,
//         Focus: 50000,
//     },
// }


// function findMostCheapestCar(object) {
//     const brands = Object.keys(object);

//     let models = [];
//     let prices = [];
//     let cheapestPrice;
//     let carIndex;
//     let cheapestCarName;

//     for (const key of brands) {
//         const modelsKeys = Object.keys(object[key]);
//         const pricesValues = Object.values(object[key]);
//         models = models.concat(modelsKeys);
//         prices = prices.concat(pricesValues);
//     }

//     cheapestPrice = Math.min(...prices);
//     carIndex = prices.indexOf(cheapestPrice);
//     cheapestCarName = models[carIndex];

//     return cheapestCarName;

// }

// console.log(findMostCheapestCar(cars));



//------------------------------------------
///////-------TASK FROM PRACTICE
//------------------------------------------


// const footballTeam = [
//     {
//         name: "Dinamo",
//         totalScore: 20,
//     },
//     {
//         name: "Shakhtyor",
//         totalScore: 40,
//     },
//     {
//         name: "Niva",
//         totalScore: 60,
//     },
// ];


// function findTheBestScore(object) {
//     let bestScore = 0;
//     let bestTeam;

//     for (const obj of object) {
//         const { name, totalScore } = obj;
//         if (bestScore < totalScore) {
//             bestScore = totalScore;
//             bestTeam = name;
//         }
//     }
//     return bestTeam;
// }

// console.log(findTheBestScore(footballTeam));


//------------------------------------------


// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// // for (const color of colors) {
// //     const keys = Object.keys(color);
// //     for (const key of keys) {
// //         if (key === "hex") {
// //             hexColors.push(color[key])
// //         } else {
// //             rgbColors.push(color[key]);
// //         }
// //     }
// // }


// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

//------------------------------------------

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     // Change code below this line

//     for (const object of products) {
//         if (object.name === productName) {
//             return object.price;
//         }
//     }
//     return null;

//     // Change code above this line
// }

// console.log(getProductPrice("Engine"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Radar"));


//------------------------------------------

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     // Change code below this line
//     let array = [];


//     // /////////////// variant #1
//     // for (const object of products) {
//     //     if (object.hasOwnProperty(propName)) {
//     //         array.push(object[propName]);
//     //     }
//     // }
//     // return array;

//     // /////////////// variant #2
//     //     for (const object of products) {
//     //         for (const key in object) {
//     //             if (key === propName) {
//     //                 array.push(object[key])
//     //             }
//     //         }

//     //         // Change code above this line
//     //     }
//     //     return array;
//     // }

//     /////////////// variant #3
//     for (const object of products) {
//         const keys = Object.keys(object);
//         for (const key of keys) {
//             if (key === propName) {
//                 array.push(object[key]);
//             }
//         }
//     }
//     return array;
// }


// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("price"));


//------------------------------------------

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки

//     let totalPrice = 0;
//     for (const item of products) {
//         if (item.name === productName) {
//             totalPrice = item.price * item.quantity;
//         }
//     }
//     return totalPrice;

//     // Пиши код выше этой строки
// }


// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Grip"));


//------------------------------------------


// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);
// console.log(yesterday);


//------------------------------------------

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // Change code below this line

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;

// const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(today);
// console.log(yesterday);



//------------------------------------------
///////-------TASK FROM PRACTICE
//------------------------------------------

// 1) написать функцию, которая будет находить Нарцисса
// 2) главное условие - Нарцисса знают все, но Нарцисс не знает никого
// 3) функция приниамет 1 параметр - массив обектов, где объект это юзеры
// 3) функция возвращает нарцисса если он есть, а если его нет, то возвращается "Narcissi was not found".



// const people1 = [
//     {
//         name: "Alex",
//         know: ["Eva", "John"],
//     },
//     {
//         name: "John",
//         know: ["Ivan"],
//     },
//     {
//         name: "Eva",
//         know: ["John", "Ivan"],
//     },
// ];

// const people2 = [
//     {
//         name: "Alex",
//         know: ["Eva", "Brad"],
//     },
//     {
//         name: "Brad",
//         know: [],
//     },
//     {
//         name: "Eva",
//         know: ["Brad"],
//     },
//     {
//         name: "Ivan",
//         know: ["Brad", "Alex", "Eva"],
//     },
// ];

// const people3 = [
//     {
//         name: "Alex",
//         know: ["Eva", "John"],
//     },
//     {
//         name: "John",
//         know: [],
//     },
//     {
//         name: "Eva",
//         know: ["Alex", "John"],
//     },
//     {
//         name: "Ivan",
//         know: ["John", "Alex"],
//     },
// ];


//people1 - нарцисса нет
//people2 - нарцисс John and Eva
//people3 - нарцисса John

// function findNarcissi(arr) {
//     let narcissi;
//     let message;

//     for (const obj of arr) {
//         const { name, know } = obj;
//         if (know.length === 0) {
//             narcissi = name;
//         } else {
//             continue;
//         }
//     }

//     for (const { name, know } of arr) {
//         if (!know.includes(narcissi) && name !== narcissi) {
//             message = "Oops, Narcissi not found :(";
//             return message;
//         }
//     }
//     return narcissi;
// }

// console.log(findNarcissi(people1));
// console.log(findNarcissi(people2));
// console.log(findNarcissi(people3));


//------------------------------------------


// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // Change code below this line

// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(highYesterday);
// console.log(highTomorrow);
// console.log(highIcon);

//------------------------------------------

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

//------------------------------------------


// const forecast = {
//     today: {
//         low: 28,
//         high: 32,
//         icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//         low: 27,
//         high: 31,
//     },
// };
// // Change code below this line

// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;

// const { today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }, tomorrow: { low: lowTomorrow, high: highTomorrow, tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } } = forecast;

// console.log(highTomorrow);


//------------------------------------------

// Change code below this line

// function calculateMeanTemperature(forecast) {
//     // const todayLow = forecast.today.low;
//     // const todayHigh = forecast.today.high;
//     // const tomorrowLow = forecast.tomorrow.low;
//     // const tomorrowHigh = forecast.tomorrow.high;

//     const { today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = forecast;


//     // Change code above this line
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }



//------------------------------------------


// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);

//------------------------------------------

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);


// console.log(bestScore);
// console.log(allScores);


//------------------------------------------


// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
// };
// const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {
//     ...defaultSettings,
//     ...overrideSettings
// };

// console.log(finalSettings);



//------------------------------------------

// function makeTask(data) {
//     // const completed = false;
//     // const category = "General";
//     // const priority = "Normal";
//     // Change code below this line

//     const newObj = {
//         completed: false,
//         category: "General",
//         priority: "Normal",
//         ...data,
//     }
//     return newObj;

//     // Change code above this line
// }


// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// //{ category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }


//------------------------------------------


// // Change code below this line
// function add(...args) {
//     let sum = 0;

//     for (const arg of args) {
//         sum += arg;
//     }
//     return sum;
//     // Change code above this line
// }

// console.log(add(12, 4, 11, 48));


//------------------------------------------


// Change code below this line
// function addOverNum(...args) {
//     let total = 0;
//     const firstNumber = args[0];

//     for (const arg of args) {
//         if (arg > firstNumber)
//             total += arg;
//     }
//     return total;
//     // Change code above this line
// }

// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));


//------------------------------------------


// // Change code below this line
// function findMatches(...args) {
//     const matches = []; // Don't change this line

//     const firstArg = args[0];
//     const restArgs = args.splice(1);

//     for (const arg of restArgs) {
//         if (firstArg.includes(arg)) {
//             matches.push(arg);
//         }
//     }

//     // Change code above this line
//     return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// //[1, 2]

// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// //[17, 89, 2]


//------------------------------------------


// const bookShelf = {
//     // Change code below this line
//     books: ["The last kingdom", "The guardian of dreams"],
//     getBooks() {
//         return "Returning all books";
//     },
//     addBook(bookName) {
//         return `Adding book ${bookName}`;
//     },
//     removeBook(bookName) {
//         return `Deleting book ${bookName}`;
//     },
//     updateBook(oldName, newName) {
//         return `Updating book ${oldName} to ${newName}`;
//     }
//     // Change code above this line
// };

// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));


//------------------------------------------

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//         // Change code below this line
//         for (let item of this.books) {
//             const bookIndex = this.books.indexOf(item);
//             if (item === oldName) {
//                 this.books.splice(bookIndex, 1, newName);
//             }
//         }
//         return this.books;

//         // Change code above this line
//     },
// };

// // console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// //["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));
// //["Dune", "Haze", "The guardian of dreams"]



//------------------------------------------
///////-------TASK FROM PRACTICE
//------------------------------------------

// перебрать массив объектов
// мутировать его чтобы остались уникальные id объекты
// если объекты дублировались, у них были одинаковые id, то сложить их количество

// const products = [
//     {
//         id: "sku1",
//         qty: 1,
//     },
//     {
//         id: "sku2",
//         qty: 2,
//     },
//     {
//         id: "sku3",
//         qty: 3,
//     },
//     {
//         id: "sku1",
//         qty: 6,
//     },
//     {
//         id: "sku1",
//         qty: 8,
//     },
//     {
//         id: "sku2",
//         qty: 19,
//     },
//     {
//         id: "sku4",
//         qty: 1,
//     },
// ];

// // если айди совпадают, то поскладывать qty
// // вывести уникальные айди с новым квонтити

// function findUniqueIds(arr) {

//     for (let i = 0; i < arr.length; i += 1) {
//         console.log("first one: ", arr[i].id);
//         for (let j = i + 1; j < arr.length; j += 1) {
//             console.log("second one: ", arr[j].id);
//             if (arr[i].id === arr[j].id) {
//                 arr[i].qty += arr[j].qty;
//                 arr.splice(j, 1);
//                 j -= 1;
//             }
//         }
//     }
//     return arr;
// }

// console.log(findUniqueIds(products));


//------------------------------------------
///////-------TASK FROM PRACTICE
//------------------------------------------


// создать банк систему (объект), которая будет принимать 2 параметра - тип карты и сумма на счету
// нужно создать 3 метода для этого объекта: 
// 1) проверить баланс на карте - выводим сколько денег на карте //checkCardBalance() { };
// 2) пополнить баланс карты - добавляем деньги на карту //addFunds() { };
// 3) списать деньги с карты ////withdrawFunds() { };

// const myCard = {
//     cardType: "Visa Gold",
//     cardBalance: 1000,

//     getCardBalance() {
//         return `Your ${this.cardType} card balance is $${this.cardBalance}.`
//     },
//     addFunds(sum) {
//         this.cardBalance += sum;
//         return this.getCardBalance();
//     },
//     withdrawFunds(sum) {
//         this.cardBalance -= sum;
//         return this.getCardBalance();
//     },
// };

// console.log(myCard.getCardBalance());
// console.log(myCard.addFunds(500));
// console.log(myCard.withdrawFunds(600));


//------------------------------------------
///////-------TASK FROM PRACTICE
//------------------------------------------

// создать персонажа игры
// ввод никнейма персонажа
// ввод расы персонажа - human, ork, elf
// у каждой расы свои скиллы - human (sword), ork (axe), эльф (bow)
// персонаж может блокировать и атаковать
// метод при атаке - выводить какой damage нанесли + выводить сколько всего было урона (суммировать поинты damage); урон от разного оружия разный
// метод при блокировке - выводить рандомно заблокировал ли персонаж удар или нет

//>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 1) создаем объект со свойствами: ник и раса (human, ork, elf); каждая раса со своими скиллами
// 2) создаем 2 метода: атаки и блокировка
// 3) метод атаки - атакует установленным damage и возвращает сообщение сколько нанесено урона
// 4) метод блока - выводим заблокировано или нет


// const races = {
//     human: {
//         weapon: "sword",
//         damage: 150,
//     },
//     ork: {
//         weapon: "axe",
//         damage: 120,
//     },
//     elf: {
//         weapon: "bow",
//         damage: 90,
//     },
// };

// let nickname = prompt("Enter your nickname");
// let race = prompt("Enter your race");

// const user = {
//     userNick: nickname,
//     userRace: races[race],
//     totalDamage: 0,

//     attack() {
//         this.totalDamage += this.userRace.damage;
//         console.log(`Oops, ${this.userNick} caused damage of ${this.userRace.damage} points. The total damage you've got is ${this.totalDamage} points.`);
//     },
//     // getDamage() {
//     //     return this.totalDamage;
//     // },
//     getBlocks() {
//         let occasion = Math.random();
//         if (occasion > 0.5) {
//             this.totalDamage -= occasion;
//             console.log("You skipped the damage.");
//         }
//         console.log("Oops, you didn't skip the damage.");
//     },
// }

// user.attack();
// user.getBlocks();


//------------------------------------------

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     // Change code above this line
// };

// console.log(atTheOldToad.getPotions());


//------------------------------------------

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     addPotion(potionName) {
//         // Change code below this line
//         this.potions.push(potionName);
//         return this.potions;
//         // Change code above this line
//     },
// };

// console.log(atTheOldToad.addPotion("Power potion"));

//------------------------------------------

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//         // Change code below this line
//         for (let i = 0; i < this.potions.length; i += 1) {
//             if (this.potions[i] === potionName) {
//                 this.potions.splice(i, 1);
//             }
//         }
//         return this.potions;
//         // Change code above this line
//     },

// };

// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));


//------------------------------------------


// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     updatePotionName(oldName, newName) {
//         // Change code below this line
//         for (let i = 0; i < this.potions.length; i += 1) {
//             if (this.potions[i] === oldName) {
//                 this.potions.splice(i, 1, newName);
//             }
//         }
//         return this.potions;
//         // Change code above this line
//     },
// };


// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// //["Speed potion", "Polymorth", "Stone skin"]


//------------------------------------------


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
//         for (const item of this.potions) {
//             if (item.name === newPotion.name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
//         }
//         this.potions.push(newPotion);
//     },

//     removePotion(potionName) {
//         // let potionIndex = this.potions.indexOf(potionName);
//         let potionIndex = -1;

//         for (let i = 0; i < this.potions.length; i += 1) {
//             if (potionName === this.potions[i].name) {
//                 potionIndex = i;
//                 this.potions.splice(potionIndex, 1);
//                 return this.potions;
//             }
//         }
//         if (potionIndex === -1) {
//             return `Potion ${potionName} is not in inventory!`;
//         }

//     },

//     updatePotionName(oldName, newName) {
//         const potionIndex = -1;
//         for (const item of this.potions) {
//             if (item.name === oldName) {
//                 item.name = newName;
//                 return this.potions;
//             } else if (item.name !== oldName) {
//                 return `Potion ${oldName} is not in inventory!`;
//             }
//         }
//     },

//     // Change code above this line
// }

// console.log(atTheOldToad.removePotion("Stone skin"));


// function processCall(recipient) {
//     // Имитируем доступность абонента случайным числом
//     const isRecipientAvailable = Math.random() > 0.5;

//     if (!isRecipientAvailable) {
//         console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//         // Логика активации автоответчика
//     } else {
//         console.log(`Соединяем с ${recipient}, ожидайте...`);
//         // Логика принятия звонка
//     }
// }

// processCall("Манго");


// const students = [
//     { name: "Манго", score: 83 },
//     { name: "Поли", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Киви", score: 94 },
//     { name: "Хьюстон", score: 64 },
// ];

// // Название аккумулятора может быть произвольным, это просто параметр функции
// const totalScore = students.reduce((total, student) => {
//     return total + student.score;
// }, 0);

// console.log(totalScore);

// const averageScore = totalScore / students.length;

// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // Пройдем по всем элементам коллекции и добавим значения свойства tags
// // к аккумулятору, начальное значение которого укажем пустым массивом [].
// // На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.
// const tags = tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
// }, []);

// console.log(tags);

// // Наверное сбор тегов не одиночная операция, поэтому напишем функцию
// // для сбора тегов из коллекции
// const getTags = tweets =>
//     tweets.reduce((allTags, tweet) => {
//         allTags.push(...tweet.tags);

//         return allTags;
//     }, []);

// console.log(getTags(tweets));


// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = tweets =>
//     tweets.reduce((allTags, tweet) => {
//         allTags.push(...tweet.tags);

//         return allTags;
//     }, []);

// const tags = getTags(tweets);

// // Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// // Это стандартная практика если callback-функция довольно большая.

// // Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// // то создаем его и записывает ему значение 0.
// // В противном случае увеличиваем значение на 1.
// const getTagStats = (acc, tag) => {
//     if (!acc.hasOwnProperty(tag)) {

//         acc[tag] = 0;

//     }

//     acc[tag] += 1;

//     return acc;
// };

// // Начальное значение аккумулятора это пустой объект {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// const students = [
//     { name: "Манго", score: 83 },
//     { name: "Поли", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Киви", score: 94 },
// ];

// const inAscendingScoreOrder = [...students].sort(
//     (a, b) => a.score - b.score
// );
// console.log(inAscendingScoreOrder);

// const inDescendingScoreOrder = students.sort(
//     (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// console.log(inDescendingScoreOrder);

// const students = [
//     { name: "Манго", score: 83, courses: ["математика", "физика"] },
//     { name: "Поли", score: 59, courses: ["информатика", "математика"] },
//     { name: "Аякс", score: 37, courses: ["физика", "биология"] },
//     { name: "Киви", score: 94, courses: ["литература", "информатика"] },
// ];

// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// console.log(sortedByAscendingScore);

// const names = sortedByAscendingScore.map(student => student.name);
// console.log(names); // ['Аякс', 'Поли', 'Манго', 'Киви']


// const arr = [5, 6, 7, 8, 9];

// const sum = arr.map(item => item ** 2).filter(item => item > 40).reduce((acc, item) => acc + item, 0);

// // const sum = quadra.reduce((acc, item) => {
// //     return acc + item;
// // }, 0);

// console.log(sum); //194


// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, action) {
//     return action(pizzaName);
// }

// console.log(makeMessage("Ultracheese", deliverPizza));
// console.log(makeMessage("Royal Grand", makePizza));


// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}.`);
// });


// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, makePizza, onOrderError) {
//         return this.pizzas.includes(pizzaName) ? makePizza(pizzaName) : onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//     },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//     return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError))

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line

//     // for (let i = 0; i < orderedItems.length; i += 1) {
//     //     totalPrice += orderedItems[i];
//     // }
//     orderedItems.forEach(item => totalPrice += item);

//     // Change code above this line
//     return totalPrice;
// }

// console.log(calculateTotalPrice([164, 48, 291]));


// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line

//     numbers.forEach(number => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });

//     // Change code above this line
//     return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));


// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line

//     // for (let i = 0; i < firstArray.length; i += 1) {
//     //     if (secondArray.includes(firstArray[i])) {
//     //         commonElements.push(firstArray[i]);
//     //     }
//     // }
//     firstArray.forEach((number) => {
//         if (secondArray.includes(number)) {
//             commonElements.push(number);
//         }
//     })

//     return commonElements;
//     // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));


// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// console.log(calculateTotalPrice(5, 100));


// Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;

//     orderedItems.forEach(item => totalPrice += item);

//     return totalPrice;
// }
// // Change code above this line

// console.log(calculateTotalPrice([164, 48, 291]));


// // Change code below this line
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach(number => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });

//     // Change code above this line
//     return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 4));


// // Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];

//     firstArray.forEach(element => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });

//     // Change code above this line
//     return commonElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));



// function changeEven(numbers, value) {
//     // Change code below this line
//     let newArr = [...numbers];
//     for (let i = 0; i < newArr.length; i += 1) {
//         if (newArr[i] % 2 === 0) {
//             newArr[i] = newArr[i] + value;
//         }
//     }
//     return newArr;
//     // Change code above this line
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10)); //1, 12, 3, 14, 5]


// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths);


// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);
// console.log(titles);


// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         genres: ["adventure", "history"],
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         genres: ["fiction"],
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         genres: ["horror", "mysticism"],
//     },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);
// console.log(genres);

// // Change code below this line
// const getUserNames = users => {
//     return users.map(user => user.name);
// };
// // Change code above this line

// console.log(getUserNames(users));


// // Change code below this line
// const getUserEmails = users => {
//     return users.map(user => user.email);
// };
//   // Change code above this line


// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         genres: ["adventure", "history"],
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         genres: ["fiction", "mysticism"],
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         genres: ["horror", "mysticism", "adventure"],
//     },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);

// console.log(allGenres);
// console.log(uniqueGenres);


// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         genres: ["adventure", "history"],
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         genres: ["fiction", "mysticism"],
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         genres: ["horror", "mysticism", "adventure"],
//     },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);

// console.log(allGenres);
// console.log(uniqueGenres);


// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter((book) => book.rating > MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);


// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {

//     return users.filter((user) => user.eyeColor === color);

// };
// // Change code above this line


// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {

//     return users.filter(user => minAge <= user.age && user.age <= maxAge);
// };
// // Change code above this line


// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//     return users.filter(user => user.friends.includes(friendName));
// };
// // Change code above this line

// const users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39
//     }
// ]




// // Change code below this line
// const getFriends = (users) => {
//     return users.flatMap(user => user.friends).filter((friend, index, array) => array.indexOf(friend) === index);
// };
// // Change code above this line


// // Change code below this line
// const getActiveUsers = (users) => {
//     return users.filter(user => user.isActive === true);
// };
// // Change code above this line

// console.log(getActiveUsers(users));

// const books = [
//     {
//         title: 'The Last Kingdom',
//         author: 'Bernard Cornwell',
//         rating: 8.38,
//     },
//     {
//         title: 'Beside Still Waters',
//         author: 'Robert Sheckley',
//         rating: 8.51,
//     },
//     {
//         title: 'The Dream of a Ridiculous Man',
//         author: 'Fyodor Dostoevsky',
//         rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);


// console.log(bookWithTitle);
// console.log(bookByAuthor);


// const users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male"
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female"
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male"
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female"
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male"
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male"
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female"
//     }
// ]

// // Change code below this line
// const getUserWithEmail = (users, email) => {
//     return users.find(user => user.email === email);
// };
// // Change code above this line



// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(value => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(value => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(value => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(value => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(value => value % 2 !== 0);

////--------------------------------------------

// const posNumbers = (...args) => args.reduce((sum, num) => {
//     // return num >= 0 ? sum += num : sum; // var#1
//     if (num >= 0) {
//         sum += num;
//     }
//     return sum; //var#2
// }, 0);


// console.log(posNumbers(5, 2, 3, -2, -2));

////--------------------------------------------


// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((acc, playtime) => acc += playtime, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(averagePlayTime);

////--------------------------------------------

// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((acc, { playtime, gamesPlayed }) => {
//     const avrTimePerPlayer = playtime / gamesPlayed;
//     return acc += avrTimePerPlayer;
// }, 0);

// console.log(totalAveragePlaytimePerGame); //1023


////--------------------------------------------

// const users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male"
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female"
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male"
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female"
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male"
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male"
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female"
//     }
// ]


// // // Change code below this line
// // const calculateTotalBalance = users => {
// //     return users.reduce((acc, { balance }) => acc += balance, 0);
// // };
// // // Change code above this line

// // console.log(calculateTotalBalance); //20916



// // Change code below this line
// // const getTotalFriendCount = users => {
// //     return users.reduce((acc, user) => acc + user.friends.length, 0)
// // };
// const getTotalFriendCount = users.reduce((acc, user) => acc + user.friends.length, 0);
// // Change code above this line
// console.log(getTotalFriendCount);


////--------------------------------------------


// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// const alphabeticalAuthors = [...authors].sort((a, b) => a.localeCompare(b));

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);


////--------------------------------------------


// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);


////--------------------------------------------

// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
//     "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);


////--------------------------------------------


// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));
// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));
// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);


// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);


////--------------------------------------------

// const users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male"
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female"
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male"
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female"
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//         isActive: true,
//         balance: 3951,
//         gender: "male"
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//         isActive: false,
//         balance: 1498,
//         gender: "male"
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female"
//     }
// ]

// Change code below this line
// const sortByAscendingBalance = users => {
//     return users.sort((a, b) => a.balance - b.balance);
// };
// const sortByAscendingBalance = users.sort((a, b) => a.balance - b.balance);
// // Change code above this line

// console.log(sortByAscendingBalance);


////--------------------------------------------


// Change code below this line
// const sortByDescendingFriendCount = users => {
//     return users.sort((a, b) => a.friends.length - b.friends.length);

// };
// const sortByDescendingFriendCount = users.sort((a, b) => b.friends.length - a.friends.length);
// // Change code above this line

// console.log(sortByDescendingFriendCount);

////--------------------------------------------

// Change code below this line
// const sortByName = users => {
//     return [...users].sort((a, b) => a.name.localeCompare(b.name));
// };
// const sortByName = [...users].sort((a, b) => a.name.localeCompare(b.name));
// // Change code above this line

// console.log(sortByName);

////--------------------------------------------


// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//         title: "The Dreams in the Witch House",
//         author: "Howard Lovecraft",
//         rating: 8.67,
//     },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books.filter(({ rating }) => rating > MIN_BOOK_RATING).map(book => book.author).sort((a, b) => a.localeCompare(b));
// console.log(names);


//--------------------------------------------

// const getNamesSortedByFriendCount = users.sort((a, b) => a.friends.length - b.friends.length).map(({ name }) => name);

// console.log(getNamesSortedByFriendCount);


//--------------------------------------------

// const getSortedFriends = [...users].flatMap(({ friends }) => friends).filter((friend, index, array) => array.indexOf(friend) === index).sort((a, b) => a.localeCompare(b));


// console.log(getSortedFriends);
// //["Adrian Cross", "Aisha Tran", "Briana Decker", "Eddie Strong", "Goldie Gentry", "Jacklyn Lucas", "Jordan Sampson", "Linda Chapman", "Marilyn Mcintosh", "Naomi Buckner", "Padilla Garrison", "Sharron Pace", "Solomon Fokes"]

//--------------------------------------------


// const getTotalBalanceByGender = (users, gender) => {
//     // varient #1
//     // return users.filter(user => user.gender === gender).map(({ balance }) => balance).reduce((acc, sum) => acc + sum, 0);

//     // varient #1
//     // return [...users].filter(user => user.gender === gender).reduce((total, user) => total + user.balance, 0);
// };


// console.log(getTotalBalanceByGender(users, 'male'));
// console.log(getTotalBalanceByGender(users, 'female'));



//--------------------------------------------


// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],
//     // Change code below this line
//     checkPizza(pizzaName) {
//         return this.pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//         const isPizzaAvailable = this.checkPizza(pizzaName);

//         if (!isPizzaAvailable) {
//             return `Sorry, there is no pizza named «${pizzaName}»`;
//         }

//         return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
//     // Change code above this line
// };


// console.log(pizzaPalace.order("Smoked"));
// console.log(pizzaPalace.order("Four meats"));
// console.log(pizzaPalace.order("Big Mike"));
// console.log(pizzaPalace.order("Viennese"));

//--------------------------------------------

// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],
//     // Change code below this line
//     getBalance() {
//         return this.balance;
//     },
//     getDiscount() {
//         return this.discount;
//     },
//     setDiscount(value) {
//         this.discount = value;
//     },
//     getOrders() {
//         return this.orders;
//     },
//     addOrder(cost, order) {
//         this.balance -= cost - cost * this.discount;
//         this.orders.push(order);
//     },
//     // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


//--------------------------------------------

// const historyService = {
//     orders: [
//         { email: "jacob@hotmail.com", dish: "Burrito" },
//         { email: "solomon@topmail.net", dish: "Burger" },
//         { email: "artemis@coldmail.net", dish: "Pizza" },
//         { email: "solomon@topmail.net", dish: "Apple pie" },
//         { email: "jacob@hotmail.com", dish: "Taco" },
//     ],
//     // Change code below this line
//     getOrdersLog() {
//         return this.orders
//             .map(order => `email: ${order.email} dish: ${order.dish}`)
//             .join(" - ");
//     },
//     getEmails() {
//         const emails = this.orders.map(order => order.email);
//         const uniqueEmails = new Set(emails);
//         return [...uniqueEmails];
//     },
//     getOrdersByEmail(email) {
//         return this.orders.filter(order => order.email === email);
//     },
//     // Change code above this line
// };


//--------------------------------------------

// class Storage {
//     constructor(items) {
//         this.items = items;
//     }

//     getItems() {
//         return this.items;
//     }

//     addItem(newItem) {
//         return this.items.push(newItem);
//     }

//     removeItem(itemToRemove) {
//         this.items.forEach(function callback(elem, index, array) {
//             if (elem === itemToRemove) {
//                 array.splice(index, 1);
//             }
//         });
//     }
// }


// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]




//--------------------------------------------

// class StringBuilder {
//     constructor(initialValue) {
//         this.value = initialValue;
//     }

//     getValue() {
//         return this.value;
//     }

//     padStart(str) {
//         this.value = str + this.value;
//     }

//     padEnd(str) {
//         this.value = this.value + str;
//     }


//     padBoth(str) {
//         this.value = str + this.value + str;
//     }
// }


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."

// builder.padStart("^");
// console.log(builder.getValue()); // "^."

// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"

// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="



//--------------------------------------------

// const word = prompt("Please enter your word.");
// let midIndexStart = 0;
// let midIndexEnd = 0;
// let midLetters;

// if (word === null) {
//     alert("No word was entered");
// } else if (word.trim().length === 0) {
//     console.log("Invalid value");
// } else if (word.length % 2 === 0) {
//     midIndexStart = word.length / 2 - 1;
//     midIndexEnd = word.length / 2 + 1;
//     midLetters = word.slice(midIndexStart, midIndexEnd);
// } else if (word.length % 2 !== 0) {
//     midIndexStart = Math.floor(word.length / 2);
//     // midIndexEnd = Math.ceil(word.length / 2);
//     midLetters = word[midIndexStart];
// }

// console.log(midLetters);


//--------------------------------------------

// function countPoints(array) {
//     let total = 0;
//     for (const elem of array) {
//         if (elem[0] === elem[2]) {
//             total += 1;
//         } else if (elem[0] > elem[2]) {
//             total += 3;
//         } else if (elem[0] < elem[2]) {
//             total += 0;
//         }
//     }
//     return total;
// }


// console.log(countPoints(["1:1", "2:0", "4:2", "0:1", "2:3", "1:1", "0:1", "1:1", "3:0"])); //12


//---
// const countPoints = (array) => {
//     const win = array.filter(elem => elem[0] > elem[2]);
//     const draw = array.filter(elem => elem[0] === elem[2]);
//     const total = win.length * 3 + draw.length;
//     return total;
// }


//---
// const countPoints = (array) => {
//     const total = (array.filter(elem => elem[0] > elem[2]).length * 3) + array.filter(elem => elem[0] === elem[2]).length;
//     return total;
// }

//---
// const countPoints = (array) => (array.filter(elem => elem[0] > elem[2]).length * 3) + array.filter(elem => elem[0] === elem[2]).length;

//---
// const countPoints = (array) => array.reduce((acc, elem) => { 
//     if (elem[0] > elem[2]) {
//         acc += 3;
//     } else if (elem[0] === elem[2]) {
//         acc += 1;
//     }
//     return acc;
//  }, 0);

// console.log(countPoints(["1:1", "200:0", "4:2", "0:100", "2:3", "1:1", "0:1", "1:1", "3:0"])); //12

//--------------------------------------------
// class Car {
//     // Change code below this line
//     #brand;

//     constructor({ brand, model, price }) {
//         this.#brand = brand;
//         this.model = model;
//         this.price = price;
//     }

//     getBrand() {
//         return this.#brand;
//     }

//     changeBrand(newBrand) {
//         this.#brand = newBrand;
//     }

//     // Change code above this line
// }

// console.log(new Car({ brand: "bmw", model: "X5", price: 58900 }));

// console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }));

// console.log(changeBrand("Honda"));




// //--------------------------------------------
// class StringBuilder {
//     // Change code below this line
//     #value;

//     constructor(initialValue) {
//         this.#value = initialValue;
//     }

//     getValue() {
//         return this.#value;
//     }

//     padEnd(str) {
//         this.#value += str;
//     }

//     padStart(str) {
//         this.#value = str + this.#value;
//     }

//     padBoth(str) {
//         this.padStart(str);
//         this.padEnd(str);
//     }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="



//--------------------------------------------

// class Car {
//     // Change code below this line

//     static MAX_PRICE = 50000;

//     #price;

//     constructor({ price }) {
//         this.#price = price;
//     }

//     get price() {
//         return this.#price;
//     }

//     set price(newPrice) {
//         if (newPrice <= Car.MAX_PRICE) {
//             this.#price = newPrice;
//         }
//     }
//     // Change code above this line
// }


// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000




//--------------------------------------------

// class Car {
//     static #MAX_PRICE = 50000;
//     // Change code below this line
//     static checkPrice(price) {
//         if (price > Car.#MAX_PRICE) {
//             return "Error! Price exceeds the maximum";
//         } else {
//             return "Success! Price is within acceptable limits";
//         }
//     }

//     // Change code above this line
//     constructor({ price }) {
//         this.price = price;
//     }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"



//--------------------------------------------
// class User {
//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }
// // Change code below this line

// class Admin extends User {

//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//     }

// }

// console.log(Admin.AccessLevel.SUPERUSER);


//--------------------------------------------


// class User {
//     email;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }

// class Admin extends User {
//     // Change code below this line

//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//     };

//     constructor({ email, accessLevel }) {
//         super(email);
//         this.accessLevel = accessLevel;
//     }

//     // Change code above this line
// }

// const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"



//--------------------------------------------

// class User {
//     email;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }
// class Admin extends User {
//     // Change code below this line

//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//     };

//     constructor({ email, accessLevel, blacklistedEmails }) {
//         super(email);
//         this.accessLevel = accessLevel;
//         this.blacklistedEmails = [];
//     }

//     blacklist(email) {
//         this.blacklistedEmails.push(email);
//     }

//     isBlacklisted(email) {
//         return this.blacklistedEmails.includes(email) ? true : false;
//     }

//     // Change code above this line
// }

// const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true





//--------------------------------------------


// const button = document.querySelector(".my-button");

// const handleClick = () => {
//     console.log("Button was clicked");
// };

// button.addEventListener("click", handleClick);


//--------------------------------------------






//--------------------------------------------