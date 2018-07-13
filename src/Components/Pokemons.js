import React, { Component } from 'react';

function Pokemon(props) {
    return (
        <button type="button"> {props.name} [:L{props.level}] - {props.hitPoints}% HP </button>
    )
}

class Pokemons extends React.Component
{
    

    render() {
        let pokemons = [];
        
        this.props.pokemons.forEach(p => {
            var hp = p.getHp() / p.getMaxHp() * 100;
            pokemons.push(<Pokemon name={p.name} hitPoints={hp} level={p.level} />)
        });

        return (
            <div class="pokemons left">
                {pokemons}
            </div>

        )
    }
}
export default Pokemons;