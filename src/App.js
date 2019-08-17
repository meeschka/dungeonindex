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
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
    const filteredChars = this.state.chars.filter(chars =>{
      return chars.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    console.log(filteredChars);
  }

  render(){
    return(
      <div className="tc">
        <Banner />
        <SearchBox searchChange={this.onSearchChange} />
        <CardList chars={this.state.chars}/>
      </div>
    )
  }
}

export default App;
