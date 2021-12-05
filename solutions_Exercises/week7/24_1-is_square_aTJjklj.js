function Square(a, b, c, d){
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  }
Square.prototype.isSquare=function(){
  return this.a===this.b&&this.a===this.c&&this.c===this.d;
};
let check= new Square(5,5,5,5);
console.log(check);
console.log(check.isSquare());