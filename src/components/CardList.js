import React, {Component} from 'react';
import Card from './Card';

class CardList extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div>
        {
          this.props.chars.map((char, i) => {
            return (
                <Card
                  key={this.props.chars[i]._id}
                  name={this.props.chars[i].name}
                  charClass={this.props.chars[i].charClass}
                  race = {this.props.chars[i].race}
                  description={this.props.chars[i].details}
                  id={this.props.chars[i].id}
                  charObj={this.props.chars[i]}
                  showNpc={this.props.showNpc}
                />
            )
          })
        }
      </div>
    );
  }
}

export default CardList;
