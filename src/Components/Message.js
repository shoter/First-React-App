import React, {Component} from "react";

export default function Message(props) {
    return (<div onClick={props.onMessageAccepted} class="message">
        {props.message}
    </div>)
}