import React, {Component} from 'react';
import CardList from './CardList';
import {chars} from './chars';
import SearchBox from './SearchBox';
import Banner from './Banner';
import Scroll from './Scroll';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      chars: [],
      searchfield: ''
    }
  }
  componentDidMount() {
    fetch('http://localhost:3001/api/npcs')
    .then(response => response.json())
    .then(chars => {this.setState({chars: chars})});
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  render(){
    const filteredChars = this.state.chars.filter(chars =>{
      return chars.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if (this.state.chars.length === 0) {
        return <h3>Loading!</h3>
    } else {
        return(
          <div className="tc">
            <Banner />
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
              <CardList chars={filteredChars}/>
            </Scroll>
          </div>
        )
    }
  }
}

export default App;
