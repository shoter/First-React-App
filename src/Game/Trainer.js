import Pokemon from "./Pokemon.js";

class Trainer {
  constructor(name, pokemons) {
    this.name = name;
    this.pokemons = pokemons;
  }

  
  getName() {
    return this.name;
  }

  getPokemon(index)
  {
      return this.pokemons[index];
  }

  getPokemonCount()
  {
      return this.pokemons.length;
  }


}

export default Trainer;
