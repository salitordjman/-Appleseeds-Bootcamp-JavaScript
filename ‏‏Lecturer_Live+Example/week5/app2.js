// Creation and Hoistion // הרמה / יצירה

//! exeuction contetx - divide for two phases
//! 1) creation phase
//* var - JS will alocate space with var name and without the value
//* let - JS will alocate space only no var name and no value
//* const - JS will alocate space only no var name and no value
//* function (decleration) - JS will alocate the func name and the inside of the {}

//* 2) execution phase

//! Scope
//! מרווח תמון של משתנה
//! איפה המשתנה זמין בקוד
// JS will look for the var name and if it dident find he will go up.
//* var - global scope (global object) if hes outside && function scoped if hes inside any function
//* let - block scoped - any {}
//* const - block scoped - any {}
//* nothing - global anyway (global object)

// function talk(firstWord) {
//   return function (secondWord) {
//     console.log(firstWord + ' ' + secondWord);
//   };
// }
// const myFunc = talk('Hello'); //
// myFunc('World');

// function buildFuncs() {
//   const newArr = [];
//   for (var i = 0; i < 3; i++) {
//     newArr.push(function () {
//       console.log(i);
//     });
//     //   (function (index) {
//     //     return function () {
//     //       console.log(index);
//     //     };
//     //   })(i)
//   }
//   return newArr;
// }
// const myFuncs = buildFuncs();
// // i = 3;
// myFuncs[0](); //
// myFuncs[1](); //
// myFuncs[2](); //

function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `
    Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?

// const arr = [1, 2, 3, 3, 4];
// const [dsafg, two, ...rest] = arr;
// console.log(dsafg);
