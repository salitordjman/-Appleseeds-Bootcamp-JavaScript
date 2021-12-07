const wonderWoman = {
  name: "Diana Prince"
  }
  const batman = {
  name: "Bruce Wayne"
  }
  const superHeroes = [wonderWoman, batman];

  function printName() {
    console.log(`my name is ${this.name}`);
    }

  function printHeroes(heroes, printFunc) {
    
    for(let i=0;i<heroes.length;i++){
    // printFunc.call(heroes[i]);
    printFunc.bind(heroes[i])();
      // console.dir(printFunc.bind(heroes[i]));
      // console.log(xcx());
    }
    }
  printHeroes(superHeroes,printName)