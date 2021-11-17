//!111111111111111111111111111111111111-----------------

// function funcA() {
//   console.log(a);
//   console.log(foo());
//   var a = 1;
//   function foo() {
//   return 2;
//   }
//   }
//   funcA();

//!

//   Result 2 and undefined
// 2 Because the function is STATEMENS then it can be run over it
// undefined because the variable is set to VAR.

// Solution:
// Move console.log (a); Below var a = 1;
  
//!

  // function funcA() {
  //   console.log(foo());
  //   var a = 1;
  //   console.log(a);
  //   function foo() {
  //   return 2;
  //   }
  //   }
  //   funcA();


//!2222222222222222222222222222222222222-----------------
// var fullName = 'John Doe';
// var obj = {
// fullName: 'Colin Ihrig',
// prop: {
// fullName: 'Aurelio De Rosa',
// getFullName: function () {
// return this.fullName;
// }
// }
// };
// console.log(obj.prop.getFullName());
// var test = obj.prop.getFullName;
// //! var test = function () {
// //! return this.fullName;
// //! }
// console.log(test());
// //Aurelio De Rosaזה כמו לרשום את מה שרשמתי ב //! מכיוון שהTHIS הוא עכשיו על הגלובאלי
// //John Doe

//!33333333333333333333333333333333333333-----------------

// function funcB() {
//   let a = b = 0;
//   a++;
//   return a;
//   }
//   funcB();
//   console.log(typeof a);
//   console.log(typeof b);
//   // undefined
//   // number מכיוון שלא הגדרנו את "בי" אז הוא מוגדר בגלובאלי + שווה נקרא מימין לשמאל



//!444444444444444444444444444444444444444-----------------

// function funcC() {
// console.log("1");
// }
// funcC();
// function funcC() {
// console.log("2");
// }
// funcC();

// //2,2 מכיוון שהפונקציה השניה דורסת את זו שלפניה



//!555555555555555555555555555555555555555-----------------

// function funcD1() {
//   d = 1;
//   }
//   funcD1();
//   console.log(d);
//   function funcD2() {
//   var e = 1;
//   }
//   funcD2();
//   console.log(e);
//   // 1 - הוא שמור בגלובל של JS מכיוון שלו הגדרנו אותו
//   //ERROR מכיוון ש"אי" נמצא בתוך הפונקציה
  




//!666666666666666666666666666666666666666-----------------

function funcE() {
  console.log("Value of f in local scope: ", f);
  }
  console.log("Value of f in global scope: ", f);
  var f = 1;
  funcE();
// undefined - מכיוון שזה ואר ופקודת ההדפסה היא מעל להגדרת הואר
//1- מכיוון שהגדרנו את ואר לפני שקראנו לפונקציה



