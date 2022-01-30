

// function calculateTotal(number) {

// let sum = 0;

// for (let i = 0; i <= number; i += 1) {
//    sum += i;
// }

// return sum;

// }

// console.log(calculateTotal(4));


// const array = [1, 'hello', 2, 15];
// let sum = 0;

// for (let i = 2; i < array.length; i += 1) {
//    sum += array[i];
// }

// console.log(sum);




// const newArray = [2, 15, 20, 17, 50];
// let sum = 0;

// for (let i = 0; i < newArray.length; i += 1) {

//    sum = sum + newArray[i]; 
// }

// console.log(sum);


// console.log(createArrayOfNumbers(1, 3));



// function createArrayOfNumbers(min, max) {
//    const numbers = [];

//    for (let i = min; i <= max; i += 1) {
//       numbers.push(i);
//    }
//    return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));


// function filterArray(numbers, value) {
//    // Change code below this line
//    const array = [];
   
//    for (let i = 0; i > 3; i += 1) {
//       array.push(i);
//    }
//    return array;

//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// ASSIGNMENT #23

// function filterArray(numbers, value) {
//    // Change code below this line
//    let array = [];

//    for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] > value) {
//          array.push(numbers[i]);
//       }
//    }

//    return array;

//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// ASSIGNMENT #25

// function getCommonElements(array1, array2) {
//   // Change code below this line



//  // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));

// Как объявить параметры функции так,
// чтобы можно было передать любое кол-во аргументов?

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризируем
// const { title, author, isPublic, rating, coverImage } = book;
// console.log(rating); // undefined

// const accessType = isPublic ? "публичном" : "закрытом";
// const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;




// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
// };

// // Добавим картинку обложки если её нет в объекте книги
// const {
//   title,
//   coverImage = "https://via.placeholder.com/640/480",
//   author,
// } = book;

// console.log(title); // The Last Kingdom
// console.log(author); // Bernard Cornwell
// console.log(coverImage); // https://via.placeholder.com/640/480



// const firstBook = {
//   title: "The Last Kingdom",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;

// console.log(firstTitle); // The Last Kingdom
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//   title: "Сон смешного человека",
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle); // Сон смешного человека
// console.log(secondCoverImage); // https://via.placeholder.com/640/480





// doStuffWithBook({
//   title: "The Last Kingdom",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 9.38,
//   isPublic: true,
// });

// function doStuffWithBook(book) {
//   // Делаем что-то со свойствами объекта
//   console.log(book.title);
//   console.log(book.rating);
//   // И так далее
// }

// const a = { x: 1, y: 2 };
// const b = {a};

// console.log(b === a);

// a.c = 100;
// b.d = 200;

// console.log(a);
// console.log(b);

// const fruits = {
//    apples: 10,
//    bananas: 20,
//    apricots: 30,
// };

// const keys = Object.keys(fruits);
// console.log(keys);

// let totalFruits = 0;

// for (const key of keys) {
//    // console.log(key);
//    // console.log(fruits[key]);

//    totalFruits += fruits[key];  
// }

// console.log(totalFruits);

// const values = Object.values(fruits);
// console.log(values);

// let totalFruits = 0;

// for (const value of values) {
//    // console.log(value);

//    totalFruits += value;
// }

// console.log(totalFruits);



// ----------- EXAMPLE #2


// const friends = [
//    {
//       name: 'Mango',
//       online: false,
//    },
//    {
//       name: 'Poly',
//       online: true,
//    }

// ];

// console.log(friends);

// const findFriend = function (allFriends, name) {
   

//    for (const friend of allFriends) {
//       console.log(friend);
//       console.log(friend.name === name);

//       if (friend.name === name) {
//          return 'OK';
//       }
//    }

//    return 'NOT OK';
   
// };

// console.log(findFriend(friends, 'John'));


// ------------ EXAMPLE #2


// const friends = [
//    {
//       name: 'Mango',
//       online: false,
//    },
//    {
//       name: 'Poly',
//       online: true,
//    }

// ];

// console.log(friends);


// const getAllNames = function (allFriends) {

//    const names = [];

//    for (const friend of allFriends) {
//       console.log(friend.name);
//       names.push(friend.name);
//    }

//    return names;
// };

// console.log(getAllNames(friends));


// const fruits = [
//    {
//    names: 'apples',
//    price: 10,
//    },
//    {
//    names: 'bananas',
//    price: 20,
//    },
//    {
//    names: 'apricots',
//    price: 30,
//    }
// ];

// console.log(fruits);

// const getFruitsNames = function (allFruits) {

//    let fruitsNamesArray = [];

//    for (const a of allFruits) {
//       console.log(a.names);

//       fruitsNamesArray.push(a.names);
//    }
//    return fruitsNamesArray;

// }

// console.log(getFruitsNames(fruits));

// const getFruitPrice = function (fruitPrice) {

//    let priceArray = [];

//    for (const cost of fruitPrice) {
//       console.log(cost.price);
//       priceArray.push(cost.price);
//    }
//    return priceArray;
//    console.log(priceArray);
// }

// console.log(getFruitPrice(fruits));


// ---- A NEW EXAMPLE ----

// const fruits = [
//    {
//    names: 'apples',
//    price: 10,
//    },
//    {
//    names: 'bananas',
//    price: 20,
//    },
//    {
//    names: 'apricots',
//    price: 30,
//    }
// ];

// console.log(fruits);