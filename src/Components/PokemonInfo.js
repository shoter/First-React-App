import React, { Component } from 'react';

export default function PokemonInfo(props) {
    var pok = props.pokemon;
    var hp = 0;
    if(pok.getHp() > 0)
        var hp = pok.getHp() / pok.getMaxHp();

    return (
        <div className="pokemonInfo">
            <div className="name">
                {pok.getName()}
            </div>
            <div className="bottom">
                <div className="level">
                    :L {pok.getLevel()}
                </div>
                <div className="hitPoints">
                    <div className="remaining" style={{ width: (hp * 100) + "%" }}> </div>
                </div>
            </div>
        </div>
    );
}