// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();
const myFunction = () => console.log("Function was invoked!");
myFunction();

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");
const anotherFunction = param => param;
anotherFunction("Example");

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
const add = (a, b) => a + b;
add(1, 2);

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
const subtract = (a, b) => a - b;
subtract(1, 2);

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
const exampleArray = [1,2,3,4];
const triple = exampleArray.map(num => num * 3);
console.log(triple);
