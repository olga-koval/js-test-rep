

// Assignment #29

// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).


// function getEvenNumbers(start, end) {
//    // Change code below this line

//     let array = [];
//     // console.log(array);

//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             array.push(i);
//         }
//     }
//     return array;
// }

//     // Change code above this line
  
// console.log(getEvenNumbers(2, 5));


// const fruit = "apple";

// if (fruit === "apple" || fruit === "strawberry") {
//   console.log("It is a red fruit!");
// }

// // Выносим варианты в массив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }


// function includes(array, value) {
//   // Change code below this line

//     if (array.includes(value)) {
//         return true;
//     } else {
//         return false;
//     }
    
//   // Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 5], 3));


// ASSIGNMENT #32

// function includes(array, value) {

//     for (let i = 0; i < array.length; i += 1) {
//         if (array[i] === value) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 17));
