import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Banner from '../Banner';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import logo from '../logo.svg';
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
    const {chars, searchfield} = this.state;
    const filteredChars = chars.filter(char =>{
      return char.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if (!chars.length) {
        return <h3>Loading!</h3>
    } else {
        return(
          <div className="tc">
            <Banner />
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
              <ErrorBoundry>
                <CardList chars={filteredChars}/>
              </ErrorBoundry>
            </Scroll>
          </div>
        )
    }
  }
}

export default App;
