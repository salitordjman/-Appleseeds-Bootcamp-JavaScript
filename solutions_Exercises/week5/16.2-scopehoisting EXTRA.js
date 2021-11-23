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
//* var - global scope if hes outside && function scoped if hes inside any {}
//* let - block scoped - any {}
//* const - block scoped - any {}
//* nothing - global anyway


var x = 10;
console.log(x);
if (true) {
var x = 20;
console.log(x);
}
console.log(x);