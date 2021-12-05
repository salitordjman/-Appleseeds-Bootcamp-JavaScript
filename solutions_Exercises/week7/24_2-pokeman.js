function Pokemon(pokemonName, pokemonType, pokemonAttackList){
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
  }
let bulbasaur = new Pokemon("Bulbasaur", "Poison", ['Fire', 'Psychic', 'Flying', 'Ice'
]);
let charmander = new Pokemon('Charmander', 'Fire', ['Water','Ground','Rock']);
let pikachu = new Pokemon('Pikachu', 'Electric', ['Ground']);

Pokemon.prototype.callPokemon= function(){
  return console.log(`I choose you, ${this.name}`);
}
Pokemon.prototype.attack= function(attackNumber){
  return console.log(`${this.name} used ${this.attackList[attackNumber-1]}`);
}
bulbasaur.callPokemon()
charmander.callPokemon()
pikachu.callPokemon()

bulbasaur.attack(4)
charmander.attack(3)
pikachu.attack(1)





