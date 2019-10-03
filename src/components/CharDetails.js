import React, {Component} from 'react';

class CharDetails extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            {this.props.currentChar &&
                <div id="currentChar" onClick={() => { this.props.showNpc(null) }}>
                    <h1>Current char is {this.props.currentChar.name}</h1>
                    <button id="editChar">Edit Details</button>
                    <button id="deleteChar">Delete Character</button>
                </div>
            }
            </div>
        );
    }
}
export default CharDetails;