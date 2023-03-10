// /**
//  * To run this file in Gitpod, use the 
//  * command node arrow-functions.js in the terminal
//  */

// // Vanilla JavaScript Function
// // function addTwoNumbers (a, b) {
// //     //code block
// //     return a + b;
// // }

// // let sum = addTwoNumbers (3, 5);

// // console.log(sum)
// // Arrow Function With Parameters
// const addTwoNumbers = (a, b) => {
//     //code block
//     return a + b;
// }

// let sum = addTwoNumbers (3, 5);

// console.log(sum)

// // Single Line Arrow Function With Parameters

// const addTwoNumbers2 = (a, b) => a + b;
// let sum2 = addTwoNumbers2(8, 9);
// console.log(sum2);

// // Implicit Returns

// const saySomething = message => console.log(message);
// saySomething('Hello butchi butxhi!');

// const sayHello = () => console.log('Hello');
// sayHello();

// // Returning Multiple Lines

// const returnMultipleLines = () => (
//     `<p>
//         This is a multiple string!
//     </p>`
// )
// console.log(returnMultipleLines());


//------------------lesson two-----------------
/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("second array:", arr2);
// Copying an array

let arr3 = [4, 5, 6];
let arr4 = [...arr3];

arr4.push(7);
console.log("third array:", arr3);
console.log("fourth array:", arr4);

// Copying an object
let obj1 = {a: 1, b: 2, c: 3, };
let obj2 = {...obj1, d:4 };
let obj3 = {...obj1, b: 5 };
console.log('first object', obj1);
console.log('second object', obj2);
console.log('third object', obj3);

// Copying only part of an array/object
let arr5 = [...arr1, {...obj1}, arr3, "x", "y", "z"];
console.log(arr5);
