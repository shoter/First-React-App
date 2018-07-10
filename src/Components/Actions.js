import React, { Component } from 'react';

function Button(props) {
    return (
        <button type="button"> {props.name} </button>
    )
}

class Actions extends React.Component
{
    

    render() {
        return (
            <div class="actions">
                <Button name="Attack" />
                <Button name="Pokemon" />
                <Button name="Item" />
                <Button name="Run" />
            </div>

        )
    }
}
export default Actions;