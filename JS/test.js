// сумма чека
// процент чаевых

    // Check price: 200
    // Tip: 15%
    // Tip amount: 30
    // Total sum to pay: 230

//  PRACTICE WITH ALYONA, LESSON 1   

// const checkPrice = prompt("Please enter the check number.");

// const formatedPrice = Number.parseFloat(checkPrice);
// console.log(formatedPrice);

// const tip = prompt("Please enter the amount of tips.");

// const formatedTip = Number.parseFloat(tip);
// console.log(formatedTip);

// const tipAmount = Number((formatedPrice / 100 * formatedTip).toFixed(2));
// console.log(`The total amount of tips: ${tipAmount}`);

// const totalSum = Number((formatedPrice + tipAmount).toFixed(2));

// const message = `The total amount to pay is ${totalSum}. The amount of tips is ${tipAmount}.`;
// console.log(message);


// const totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//     discount = 0.02;
//     console.log(`You are our Bronze Parter, the discount is 2%`);
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     discount = 0.05;
//     console.log(`You are our Silver Parter, the discount is 5%`);
// } else (totalSpent >= 1000 && totalSpent < 5000) {
//     discount = 0.01;
//     console.log(`You are our Silver Parter, the discount is 5%`);
// }

// console.log(`You've submitted an order for the amount of ${payment} with the discount of ${discount * 100}%`);

// const shoppingCart = [10, 20, 15];
// const icannFee = 0.18;

// for (let i = 0; i < shoppingCart.length; i += 1) {
//     shoppingCart[i] += icannFee;
// }

// console.log(shoppingCart);

// const numbers = [1, 4, 6, 9, 11, 12, 13, 15, 19];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);

//     if (numbers[i] % 2 === 0) {
//         console.log('Even');

//         total += numbers[i];
//     }
// }

// console.log('Total: ', total);

// const numbers = [54, 76, 13, 21, 9, 90, 3, 39];
// let smallestNumber = numbers[0];

// console.log(smallestNumber);

// for (const number of numbers) {
//     console.log(number);

//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }

// console.log('The smallest number: ', smallestNumber);

// const numbers = [54, 76, 13, 21, 9, 90, 3, 39];
// let biggestNumber = numbers[0];

// console.log(biggestNumber);

// for (const number of numbers) {
//     console.log(number);

//     if (number > biggestNumber) {
//         biggestNumber = number;
//     }
// }

// console.log('The biggest number: ', biggestNumber);


// const string = 'JAVAscript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);

//     // if (letter === letter.toLocaleLowerCase()) {
//     //     invertedString += letter.toLocaleUpperCase();
//     //     console.log('This is a small letter ', letter);
//     // } else {
//     //     invertedString += letter.toLocaleLowerCase();
//     //     console.log('This is a capital letter ', letter);
//     // }

//     invertedString += letter === letter.toLocaleLowerCase() ? letter.toLocaleUpperCase() : letter.toLocaleLowerCase();
// }

// console.log(invertedString);

// let a = [121];
// const b = a;

// console.log(a === b);

// a[0] = 150;

// console.log(a === b);

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line


// const message = message.length;


//    // Change code above this line
// }

// const arr = [5, 10, 12, 15, 25];
// const start = 1;
// const end = 3;
// const arrCopy = arr.pop(12);

// console.log(arrCopy);

// function findLongestWord(string) {

//     const words = string.split(" ");
//     let element = words[0];
//     let longestWord = 0;

//     for (let i = 0; i < longestWord; i += 1) {
//         if (words[i] > longestWord) {
//             longestWord = words[i];
//         }
//         return words[i];
//     }
// }

// console.log(findLongestWord("My favourite best transformers Google do a roll"));

// function findLongestWord(string) {
//   // Change code below this line
// const elements = string.split(" ");
// let longestWord = elements[0];

// for (const elements of string) {
//   if (elements > longestWord) { 
//     elements = longestWord;
//   }
// }
//     return elements;

//   // Change code above this line
// }
// console.log(findLongestWord("My favourite best transformers Google do a roll"));



// function findLongestWord(string) {
//   // Change code below this line
//     const words = string.split(" ");
//     let longestWord = words[0];
//     console.log(longestWord);

//     for (const element of string) {
//         if (element.length > longestWord.length) {
//             longestWord = element;
//             console.log(longestWord);
//         } else {
         
//         }
//     }

//   // Change code above this line
// }

// console.log(findLongestWord("My favourite best transformers Google do a roll"));



// function findLongestWord(string) {
//   // Change code below this line
    
//     const words = string.split(" ");
//     let longestWord = words[0];
    
//     for (let i = 0; i < words.length; i += 1) {
//         if (longestWord.length < words[i].length) {
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
//   // Change code above this line
// }

// console.log(findLongestWord("My favourite best transformers Google do a roll"));



// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });



