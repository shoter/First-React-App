import Attack from "./Attack.js";

var id = (function() {
    var     lastID = 0;
    return function() {
        return lastID++;
    }
})();


class Bite extends Attack {
    constructor(props) {
        super(props);
        this.id = id();
        this.name = "Bite";
        this.description = "Bites another pokemon";
    }
    
    affect(pokemon, otherPokemon) {
        var dmg = pokemon.level * 2;

        otherPokemon.damage(dmg);
    }
}

class Dizzy extends Attack {
    constructor(props) {
        super(props);
        this.id = id();
        this.name = "Dizzy";
        this.description = "Can cause other pokemon to lose turn";
    }
    
    affect(pokemon, otherPokemon) {
        var dmg = pokemon.level * 1;

        otherPokemon.damage(dmg);
    }
}

export {Bite, Dizzy};