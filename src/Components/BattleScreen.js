import React, { Component } from 'react';
import PokemonInfo from "./PokemonInfo";
import Attacks from "./Attacks";
import Actions from "./Actions"
import Pokemons from "./Pokemons";
import GameStates from "../Game/GameStates";
import PlayerActions from "../PlayerActions";
import Message from "./Message"
import Items from "./Items"
class BattleScreen extends React.Component {

    constructor(props) {
        super(props);
        
        this.Bottom = this.Bottom.bind(this);
        this.game = this.game.bind(this);
        this.actionClicked = this.actionClicked.bind(this);
    }

    game() {
        return this.props.game;
    }

    canChangeAction() {
        switch(this.game().state)
        {
            case GameStates.IDLE:
            case GameStates.POKEMON:
            case GameStates.ATTACK:
            case GameStates.ITEM:
            return true;
        }
        return false;
    }

    actionClicked(action) {
        if(!this.canChangeAction())
            return;
        switch(action)
        {
            case PlayerActions.Attack:
                this.props.changeGamestate(GameStates.ATTACK)
                break;
            case PlayerActions.Items:
                this.props.changeGamestate(GameStates.ITEM);
                break;
            case PlayerActions.Pokemon:
                this.props.changeGamestate(GameStates.POKEMON);
                break;
            case PlayerActions.Run:
                alert("You cannot run you cocksucker.");
                break;
        }
    }

    Bottom(props) {
        var player = this.game().player;
        var left = <div className="left" />;
        switch(this.game().state)
        {
            case GameStates.POKEMON:
            {
                left = <Pokemons pokemons={player.pokemons} />
                break;
            }
            case GameStates.ATTACK:
            {
                var pokemon = this.game().playerPokemon;
                left = <Attacks onAttackClick={this.props.onAttackClick} attacks={pokemon.attacks} />
                break;
            }
            case GameStates.ITEM:
            {
                left = <Items />
                break;
            }
            case GameStates.PLAYER_ATT_MSG:
            case GameStates.ENEMY_ATT_MSG:
            {
                left = <Message onMessageAccepted={this.props.onMessageAccepted} message={this.game().message} />
                break;
            }
        }

        return (
            <div className="bottom">
                {left}
                <div className="divider" />
                <Actions onActionClick={this.actionClicked} />
            </div>
        )
    }

    render() {
        var game = this.game();
        return (
            <div className="battleScreen">
                <div className="top">
                <PokemonInfo pokemon={game.enemyPokemon} />
                <PokemonInfo pokemon={game.playerPokemon} />
                </div>
                <this.Bottom />
            </div>
        )
    }
}

export default BattleScreen