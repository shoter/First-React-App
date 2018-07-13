import React, { Component } from 'react';
import {Charmander, Mew} from "../Game/Pokemons";
import GameStates from "../Game/GameStates";
import Trainer from "../Game/Trainer";
import BattleScreen from "./BattleScreen"

class Game extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            player: new Trainer("Player",[
                new Charmander(45)
            ]),
            enemy: new Trainer("Garry",[
                new Mew(50)
            ]),
            state: GameStates.IDLE 
        }

        this.state.playerPokemon = this.state.player.getPokemon(0);
        this.state.enemyPokemon = this.state.enemy.getPokemon(0);
    }

    setPlayerPokemon(index) {
        this.setState((prevState) => ({
            playerPokemon: prevState.player.getPokemon(index)
        }))
    }

    setEnemyPokemon(index) {
        this.setState((prevState) => ({ 
            enemyPokemon: prevState.enemy.getPokemon(index)
        }))
    }
    

    setGameState(gameState)
    {
        this.setState({
            state: gameState
        });
    }

    onAttackClick(attack) {
        var pokemon = this.state.playerPokemon;

        this.setState({
            state: GameStates.PLAYER_ATT_MSG,
            attack: attack,
            message: pokemon.getName() + " used " + attack.getName()
        })
    }

    nextState() {
        switch(this.state.state)
        {
            case GameStates.PLAYER_ATT_MSG:
            {
                this.state.attack.affect(this.state.playerPokemon, this.state.enemyPokemon);
                this.enemyMove();
                break;
            }
            case GameStates.ENEMY_ATT_MSG:
            {
                this.state.attack.affect(this.state.enemyPokemon, this.state.playerPokemon);
                this.setState({
                    state: GameStates.IDLE
                })
                break;
            }
        }
    }

    enemyMove() {
        var pokemon = this.state.enemyPokemon;
        var attacks = pokemon.attacks;
        var attack = attacks[Math.floor(Math.random()*attacks.length)];

        this.setState({
            state: GameStates.ENEMY_ATT_MSG,
            attack: attack,
            message: pokemon.getName() + " used " + attack.getName()
        })
    }

    render() {
        return <BattleScreen 
        changeGamestate={this.setGameState.bind(this)}
        onAttackClick={this.onAttackClick.bind(this)}
        onMessageAccepted={this.nextState.bind(this)}
        game={this.state} />
    }

}

export default Game;