import React, {Component} from 'react';
import NewCharForm from './NewCharForm';

function NewCharButton(props) {
    return (
        < button onClick={props.onClick}>
            Add New NPC
        </button>
    );
}

function CancelNewButton(props) {
    return (
        <button onClick={props.onClick}>
            Cancel
        </button>
    );
}

class NewCharControl extends Component {
    constructor(props) {
        super(props);
        this.handleNewCharButtonClick = this.handleNewCharButtonClick.bind(this);
        this.handleCancelNewButtonClick = this.handleCancelNewButtonClick.bind(this);
        this.state = {newChar: false};
    }
    handleNewCharButtonClick() {
        this.setState({newChar: true});
    }
    handleCancelNewButtonClick(){
        this.setState({newChar: false});
    }
    render() {
        const newChar = this.state.newChar;
        let button;

        if (newChar) {
            button = <CancelNewButton onClick={this.handleCancelNewButtonClick} />
        } else {
            button = <NewCharButton onClick={this.handleCancelNewButtonClick} />
        }

        return (
            <div>
                {button}
                {newChar && <NewCharForm />}
            </div>
        )
    }
}
export default NewCharControl;