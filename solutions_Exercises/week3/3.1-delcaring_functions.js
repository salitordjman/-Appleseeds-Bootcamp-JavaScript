//! From function declarations to function expressions

// function welcome() {
//     let welcome = 'Welcome to Appleseeds Bootcamp!';
//     return welcome;
// }

let welcome = () => 'Welcome to Appleseeds Bootcamp!';
// console.log(welcome());


// function power(a) {
//     let myNumber = a;
//     let result = Math.pow(myNumber, 2);
//     return result;
// }

const power = a => Math.pow(a, 2)
// console.log(power(4));


// function add(a, b = 5) {
//     let myNumber = a;
//     let sum = myNumber + b;
//     return sum;
// }

const add = (a) => a + 5
// console.log(add(11));

// const add = (a,b=5) => a + b
// console.log(add(11,7));
// console.log(add(11,));


//! From function expressions to function declarations

// const hello = () => "Hello!";

function hello() {
  const hello = "Hello!";
  return hello;
}
// console.log(hello());


// const squareRoot = a => Math.sqrt(a);

function squareRoot(a) {
  return Math.sqrt(a);
}
// console.log(squareRoot(8));


// const randomNumbers = (a, b) => Math.random() * (a - b) + b;

function randomNumbers(a, b) {
  return Math.random() * (a - b) + b
}
console.log(randomNumbers(5,2));








// JavaScript - Declaring Functions
//     The following exercise contains the following subjects:
//          functions
    
//     Instructions
//          Please reformat the following function declarations to function expression.
//          Please reformat the following function expressions to function declarations.
//     Submit the file to Hive
// /

// // From function declarations to function expressions
// function welcome() {
//     let welcome = 'Welcome to Appleseeds Bootcamp!';
//     return welcome;
// }

// function power(a) {
//     let myNumber = a;
//     let result = Math.pow(myNumber, 2);
//     return result;
// }

// function add(a, b = 5) {
//     let myNumber = a;
//     let sum = myNumber + b;
//     return sum;
// }


// // From function expressions to function declarations
// const hello = () => "Hello!";

// const squareRoot = a => Math.sqrt(a);

// const randomNumbers = (a, b) => Math.random() * (a - b) + b;