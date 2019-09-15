import React, {Component} from 'react';

function newCharButton(props) {
    return (
        < button onClick={props.onClick}>
            Add New NPC
        </button>
    );
}

function cancelNewButton(props) {
    return (
        <button onClick={props.onClick}>
            Cancel
        </button>
    );
}