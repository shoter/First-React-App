import React, { Component } from 'react';

export default function PokemonInfo(props) {
    var pok = props.pokemon;
    var hp = 0;
    if(pok.getHp() > 0)
        var hp = pok.getHp() / pok.getMaxHp();

    return (
        <div class="pokemonInfo">
            <div class="name">
                {pok.getName()}
            </div>
            <div class="bottom">
                <div class="level">
                    :L {pok.getLevel()}
                </div>
                <div class="hitPoints">
                    <div class="remaining" style={{ width: (hp * 100) + "%" }}> </div>
                </div>
            </div>
        </div>
    );
}