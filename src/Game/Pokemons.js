import Pokemon from "./Pokemon.js";
import {Bite, Dizzy} from "./Attacks.js";

class Charmander extends Pokemon {
    constructor(level) {
        super("Charmander", level, [
            new Bite()
        ])
    }

    getMaxHp() {
        return this.level * 10;
    }
}

class Mew extends Pokemon {
    constructor(level) {
        super("Mew", level, [
            new Bite(),
            new Dizzy()
        ])
    }

    getMaxHp() {
        return this.level * 7;
    }
}

export {Charmander, Mew};