import React, { Component } from 'react';

function Button(props) {
    return (
        <button type="button"> {props.name} </button>
    )
}

class Attacks extends React.Component
{
    render() {
        return (
            <div class="attacks">
                <Button name="Silny atak" />
                <Button name="Słaby atak" />
                <Button name="Bach" />
                <Button name="Benc" />
            </div>

        )
    }
}

export default Attacks;