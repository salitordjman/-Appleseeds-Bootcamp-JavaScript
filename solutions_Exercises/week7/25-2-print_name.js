// const printObject = {
//   name: "nsndsf",
//   printName: function(){
//       console.log(this.name);
//   },
//   printNameAfterSec: function(){
//       setTimeout(
//         function(){
//           // ()=>{
//           console.log(this.name);
//         // }.bind(this), 
//         }, 
//         1000
//         );
//   },

// };
// printObject.printName();
// printObject.printNameAfterSec();





const printObject = {
  name: "nsndsf",
  printName: function(){
      console.log(this.name);
  },
  printNameAfterSec: function(){
      setTimeout(this.printName.bind(this),1000);
  },

};


printObject.printName();
printObject.printNameAfterSec();