import React, { Component } from 'react';
import PokemonInfo from "./PokemonInfo.js";
import Attacks from "./Attacks.js";
import Actions from "./Actions.js"
class BattleScreen extends React.Component {
    render() {
        return (
            <div class="battleScreen">
                <div class="top">
                <PokemonInfo name="left" hitPoints="100" level="1" />
                <PokemonInfo name="right" hitPoints="100" level="2" />
                </div>
                <div class="bottom">
                    <Attacks />
                    <div class="divider" />
                    <Actions />
                </div>
            </div>
        )
    }
}

export default BattleScreen