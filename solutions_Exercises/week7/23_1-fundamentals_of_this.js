//! Question 1: In your own words what will this point to and why?(Note this is the global scope)
// window- global scope - this key return the object that he inside him

// console.log(this);

//! Question 2: a. In your own words what will this point to and why. b. How can you fix this code.
// window- global scope- beacuse its arrow function 

// const myObj = {
//   name: "Timmy",
//   greet: () => {
//     console.log(this);
//     console.log(`Hello ${this.name}`);
//   },
// }; myObj.greet();


// const myObj = {
//   name: "Timmy",
//   greet: function(){
//       console.log(this);
//     console.log(`Hello ${this.name}`);
//     },
//     }; myObj.greet();
    

//! Question 3: In your own words what will this point to and why?
// window- global scope - this key return the object that he inside him

// const myFuncDec = function(){
//   console.log(this);
//   };
//   myFuncDec()

//   function myFuncDec1(){
//     console.log(this);
//     };
//     myFuncDec1()
  // function- local scope - this key return the object that he inside him
  
  // const myFuncDec = {
    //   a: function () {
      //     console.log(this);
      //   }
      //     };
      //   myFuncDec.a()
      
// window- global scope - this key return the object that he inside him-if you call the function inside of here

// const myFuncDec = {
//   a: (function () {
//     console.log(this);
//   })()
//     };

//! Question 4: In your own words what will this point to and why?
// window- global scope - this key return the object that he inside him
// const myFuncArrow = () => {
  // console.log(this);
  // }; myFuncArrow();
  
  
  
  //! Question 5:  a. In your own words what will this point to and why.  b. How can you fix this code.
  // window- global scope - this key return the object that he inside him 
  // querySelector- not method of window 
  
  // document.querySelector(".element").addEventListener("click",() => {
    // console.log(this);
    // });
  
    
    //fix - change arrow func to regular func

// document.querySelector(".element").addEventListener("click",function(){
// console.log(this);
// });