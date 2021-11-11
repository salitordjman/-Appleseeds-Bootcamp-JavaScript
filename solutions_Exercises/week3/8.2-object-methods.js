const myCountry = {
  country: 'gftg',
  capital: 'fttddd',
  language: 'dfhhnf',
  population: '623',
  neighbours: ['gbfg', 'rrres', 'eett'],
  describe(){
    const{
      country,
      capital,
      language,
      population,
      neighbours
    }=this;
    return `${country} has ${population} million people, their mother tongue is ${language}, they have 3 neighbouring countries: ${neighbours}, and a capital called ${capital}`;
  },
  checkIsland(){
  // this.isIsLand = this.neighbours.length?false:true;
  // this.isIsLand = !this.neighbours.length;
  this.isIsLand = !(this.neighbours&&true||false);
  }
};
console.log(myCountry.describe());
myCountry.checkIsland()
console.log(myCountry.isIsLand);


