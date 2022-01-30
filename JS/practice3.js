// --------- TASK #1

// const a = ["a", "b", "c"];
// const b = [1, [2, 3]];
// const c = 0;

// Result: ["a", "b", "c", 0, 1, 2, 3];

// ---- VARIANT 1 ------

// const arrayBFirst = b.splice(0);
// console.log(arrayBFirst);

// const arrayBSecond = b.splice(1);
// console.log(arrayBSecond);

// const result = a.concat(c, b, arrayBSecond[0]);
// console.log(result);

// ---- VARIANT 2 ------

// let result = a.slice();
// result.push(c, b[0]);
// result = result.concat(b[1]);
// console.log(result);

// ---------  TASK #2

// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];

// Result: ["a", "b", "c", "a", "b", "c", "g", "h"];

// const result = a.splice(3, 3, "a", "b", "c");
// console.log(a);

// copyWithin

// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];
// const newResult = a.copyWithin(3, 0, 3);
// console.log(newResult);

// ______________

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// const newFruits = fruits.copyWithin(2, 0, 2);
// console.log(newFruits);

// ---------  TASK #3

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // Result: [1, 2, 3, 4, 5, 0, 0, 0, 9, 10];

// // const result = a.splice(5, 3, 0, 0, 0);
// console.log(a);

// ------- VARIANT #1

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // Result: [1, 2, 3, 4, 5, 0, 0, 0, 9, 10];

// const copyA = a;

// const result = copyA.splice(5, 3, 0, 0, 0);
// console.log(copyA);
// console.log(a);

// ------- VARIANT #2

// FILL () METHOD

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = a.fill(0, 5, 8);
// console.log(a);

// ---------  TASK #4

// const a = [1, 2, [3, 4], [5, 6], 7];
// // Result: [1, 2, 3, 4, 5, 6, 7]

// let result = [];

// for (const i of a) {
//     if (Array.isArray(i)) {
//         result.push(i[0], i[1]);
//     } else {
//         result.push(i);
//     }
        
// }
// console.log(result);

// ----- VARIANT 2 Array.prototype.flat()

// const a = [1, 2, [3, 4], [5, 6], 7];
// const array = a.flat();
// console.log(array);


// ---------  TASK# 5

// const a = ['a', 'k', 'n', 'h', 'n', 'n', 'k'];

// let letter = 0;

// for (let i = 0; i <= a.length; i += 1) {
//     if (a[i] === "n") {
//         letter = i;
//     } 
// }

// console.log(letter);

// ----- VARIANT 2

// const a = ['a', 'k', 'n', 'h', 'n', 'n', 'k'];

// let letter = a.lastIndexOf('n');
// console.log(letter);


// ---------  TASK #6

// VARIANT #1 (mutated one/destructive one)

// const a = [1, 2, 3, 4, 5, 6, 7]
// // Result: [7, 6, 5, 4, 3, 2, 1]

// const reversedA = a.reverse();
// console.log(reversedA);

// VARIANT #2

// const a = [1, 2, 3, 4, 5, 6, 7]
// // Result: [7, 6, 5, 4, 3, 2, 1]

// let reversedArray = [];

// for (let i = a.length - 1; i >= 0; i -= 1) {
//     reversedArray.push(a[i]);
// }

// console.log(reversedArray);
// console.log(a);

// ---------  TASK #7

// const a = 'alona';
// Result: ['a', 'l', 'o', 'n', 'a']

// VARIANT #1

// const newA = a.split("");
// console.log(newA);

// VARIANT #2

// const newA = Array.from(a);
// console.log(newA);

// --------- TASK #8

// const a = ['a', 'l', 'o', 'n', 'a'];
// Result: 'alona'

// const newA = a.join("");
// console.log(newA);

// ---------- TASK #9

// const a = ['a', 'l', 'o', 'n', 'a'];
// // Result: 'a,l,o,n,a'

// const newA = a.toString();
// console.log(newA);

// ---------- TASK #10

// const a = ['a', 'l', 'o', 'n', 'a'];
// // Result: 'a l o n a'

// const newA = a.toString();
// console.log(newA);

// const newString = newA.replaceAll(",", "");
// console.log(newString);

// const capitalLetter = newString[0].toUpperCase();
// console.log(capitalLetter);

// const newName = newString.replace('a', capitalLetter);
// console.log(newName);

// const target = 10;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);
