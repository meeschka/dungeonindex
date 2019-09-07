import React, {Component} from 'react';
import CardList from './CardList';
import {chars} from './chars';
import SearchBox from './SearchBox';
import Banner from './Banner';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      chars: chars,
      searchfield: ''
    }
  }
  componentDidMount() {
    fetch('http://localhost:3001/api/npcs')
    .then(response => response.json())
    .then(chars => {
      this.setState({chars: chars});
      console.log(chars);
    })
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  render(){
    const filteredChars = this.state.chars.filter(chars =>{
      return chars.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return(
      <div className="tc">
        <Banner />
        <SearchBox searchChange={this.onSearchChange} />
        <CardList chars={filteredChars}/>
      </div>
    )
  }
}

export default App;
