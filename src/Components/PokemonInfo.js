import React, { Component } from 'react';

export default function PokemonInfo(props) {
    return (
        <div class="pokemonInfo">
            <div class="name">
                {props.name}
            </div>
            <div class="bottom">
                <div class="level">
                    :L {props.level}
                </div>
                <div class="hitPoints">
                    <div class="remaining" style={{ width: props.hitPoints + "%" }}> </div>
                </div>
            </div>
        </div>
    );
}