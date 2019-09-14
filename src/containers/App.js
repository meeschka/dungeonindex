import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Banner from '../Banner';
import Scroll from '../components/Scroll';
import NewCharControl from '../components/NewCharControl';
import ErrorBoundry from '../components/ErrorBoundry';
import logo from '../logo.svg';
import './App.css';

const APIURL = 'http://localhost:3001/api/npcs';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chars: [],
      searchfield: ''
    }
    this.addNpc = this.addNpc.bind(this);
  }

  componentDidMount() {
    this.loadChars();
  }

  loadChars(){
    fetch(APIURL)
    .then(response => {
      if(!response.ok) {
        if(response.status >=400 && response.status < 500) {
          return response.json().then(data => {
            let err = {errorMessage: data.message};
            throw err;
          })
        } else {
          let err = {errorMessage: 'Please try again later, server not responding'};
          throw err;
        }
      }
      return response.json();
    })
    .then(chars => this.setState({chars: chars}));
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  addNpc(npc){
    fetch(APIURL, {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(npc)
    })
    .then(response => {
      if(!response.ok) {
        if(response.status >=400 && response.status < 500) {
          return response.json().then(data => {
            let err = {errorMessage: data.message};
            throw err;
          })
        } else {
          let err = {errorMessage: 'Please try again later, server not responding'};
          throw err;
        }
      }
      return response.json();
    })
    .then(chars => this.setState({chars: chars}));
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
            <NewCharControl addNpc={this.addNpc}/>
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
