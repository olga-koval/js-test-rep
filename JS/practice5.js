
// TASK #1

// getKeys({ keyOne: 1, keyTwo: 2, keyThree: 3 })

// написать функцию которая будет принимать объект и будет возвращать ключи getKeys
// Написать функцию, которая принимает объект и возвращает массив, не используя метод Объект.кейс/велъю/энтрис


// const keys = {
//     keyOne: 1,
//     keyTwo: 2,
//     keyThree: 3
// };

// console.log(keys);



// function getKeys(allKeys) {
//     let keyArray = [];

//     for (const key in allKeys) {

//         if (allKeys.hasOwnProperty(key)) {
//             keyArray.push(key);
//         }
//     }
//     console.log(keyArray);
//     return keyArray;
// }

// console.log(getKeys({ keyOne: 1, keyTwo: 2, keyThree: 3 }))

// console.log(getKeys({
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
// }));


// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
// };

// console.log(getKeys(book));

//  ------- TASK #2 ------

// Написать функцию getValues, которая принимает объект и возвращает массив, не используя метод Объект.кейс/велъю/энтрис
// getValues({ keyOne: 1, keyTwo: 2, keyThree: 3 })


// function getValues(allValues) {
//     const valuesArray = [];

//     for (const value in allValues) {

//         if (allValues.hasOwnProperty(value)) {
//         valuesArray.push(allValues[value]) 
//         }
//  }
//     return valuesArray;
// }


// console.log(getValues({ keyOne: 1, keyTwo: 2, keyThree: 3 }));

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
// };

// console.log(getValues(book));


// запускаем цикл
// проверка метод include


// function getCommonElements(array1, array2) {
//     // Change code below this line

//     let commonArray = [];
    
//     for (let i = 0; i < array1.length; i += 1) {

//         if (array2.includes(array1[i])) {
//             commonArray.push(array1[i]);
//         }
//     }
//     return commonArray;
    
//  // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));

