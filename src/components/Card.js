import React, {Component} from 'react';
import '../containers/App.css';

class Card extends Component {
  constructor(props){
    super(props);
    this.handleCardClick = this.handleCardClick.bind(this);
  }
  handleCardClick(char){
    console.log(char);
  }
  render(){
    return(
      <div className="bg-light-gray dib br3 pa3 ma2 grow shadow-5 tc" onClick={() => { this.props.showNpc(this.props.charObj) }}>
      <img alt="photo of character" src={`https://robohash.org/${this.props.name}?200x200`} />
      <div>
        <h2>{this.props.name}</h2>
        <p className="Card-p">{this.props.race+" "+this.props.charClass}</p>
        {this.props.description &&
        <p className="Card-p">{this.props.description.length>32?this.props.description.substring(0,32).concat('...'):this.props.description}</p>
        }
      </div>
    </div>
    )
  }
}

export default Card;
