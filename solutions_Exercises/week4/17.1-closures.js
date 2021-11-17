//!11111111111111111111111111-----------------------

// var b = 1;
// function someFunction(number) {
// function otherFunction(input) {
// return b;
// }
// b = 5;
// return otherFunction;
// }
// var firstResult = someFunction(9);
// var result = firstResult(2);

// //5- someFunction (9) starts and firstResult (2) calls otherFunction is returns B = 5 (because B = 5 is above the reading of the functions) and then returns otherFunction; Returns the B = 5




//!22222222222222222222222222222-----------------------


// var a = 1;
// function b2() {
// a = 10;
// return;
// function a() { }
// }
// b2();
// console.log(a);
// //1- מכיוון ש"אי" הוא הפונקציה אז הוא נשאר שם



//!3333333333333333333333333333333-----------------------


let i;
for (i = 0; i < 3; i++) {
const log = () => {
console.log(i);
}
setTimeout(log, 100);
}

//3,3,3


