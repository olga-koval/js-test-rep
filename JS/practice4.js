
// ----------- TASK #1

// Write a function that reverse an integer number. You can't use any array methods, besides push.
// reverseNumber(12345) returns 54321
// -12345
// -54321

//создаем переменную для номера
// const number = -12345;

// function reverseNumber(number) {
//     //преобразуем число в строку
//     const arrayNumber = number.toString().split("");
//     //объявляем новыц массив куда пушим перебранный массив
//     const reversedArray = [];
//     //делаем условие что если первый элемент с минусом, то запускается цикл
   

//     if (arrayNumber[0] === '-') {
//         //перебираем массив
//         for (let i = arrayNumber.length - 1; i >= 1; i -= 1) {
//             reversedArray.push(arrayNumber[i]);
//         }
//         const newString = reversedArray.toString().replaceAll(",", "");
//         const newNumber = Number('-' + newString);
//         return newNumber;

//     } else {

//         for (let i = arrayNumber.length - 1; i >= 0; i -= 1) {
//         reversedArray.push(arrayNumber[i]);
//         }
//         const newString = reversedArray.toString().replaceAll(",", "");
//         const newNumber = Number(newString);
//         return newNumber;
//     } 
// }
// console.log(reverseNumber(12345));
// reverseNumber(number);

// VARIANT 2 FROM SASHA MOROZOV

// function reverses(stt) {
//     if (stt < 0) {
//         stt *= -1;
//     }
    
//     stt = String(stt);
//     let res = "";
//     for (i = stt.length; i >= 1; i -= 1) {
//         res += String(i);
//     }
//     return Number(res);
// }
// console.log(reverses(12345));


// -------- TASK #2

// Write a function that converts the argument values. If it will be a string, convert it to number and wise versa.

// It should return an array of converted values.

// console.log(convert("1", 2, 3, "4"));
// convert('1', 2, 3, '4') // [1, '2', '3', 4]


// function convertArgument(...args) {

//     for (let i = 0; i < args.length; i += 1) {
//         if (typeof args[i] === 'string') {
//             args[i] = Number(args[i]);
//         } else {
//             args[i] = String(args[i]);
//         }
//     }
//     return args;
// }

// console.log(convertArgument('1', 2, 3, '4'));

// ----------------------

// function convertArgument(...args) {
//     const newArray = [];

//     for (let argument of args) {
//         if (typeof argument === "string") {
//             argument = Number(argument);
//             newArray.push(argument);
//         } else {
//             argument = String(argument);
//             newArray.push(argument);
//         }
//     }
//     return newArray;
// }

// console.log(convertArgument('1', 2, 3, '4'));

// ------------------------
// TASK #3

// Write a function that checks if array contains arg passed as a parameter value and returns true in this case.

// containsValue([2, 5, 8], 2) 
// returns true

// containsValue([12, 4, 6], 5) 
// returns false



// function containsValue(arrayOne, arrayTwo) {
//     for (const element of arrayOne) {
//         if (element === arrayTwo) {
//             return true;
//         }
//         return false;
//     }
// }
// console.log(containsValue([2, 5, 8], 2));
// console.log(containsValue([12, 4, 6], 5));



// TASK #4

// Write a function which creates an array from the given range of numbers

// makeListFromRange([2, 7]) 
// [2, 3, 4, 5, 6, 7]

// makeListFromRange([8, 5]) 
// [5, 6, 7, 8]