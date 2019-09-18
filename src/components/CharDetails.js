import React, {Component} from 'react';

class CharDetails extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            {this.props.currentChar &&
                <h1>Current char is {this.props.currentChar.name}</h1>
            }
            </div>
        );
    }
}
export default CharDetails;