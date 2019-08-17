import React from 'react';
import CardList from './CardList';
import {chars} from './chars';
import SearchBox from './SearchBox';
import Banner from './Banner';
import logo from './logo.svg';
import './App.css';


const App = () => {
  return (
    <div className="tc">
      <Banner />
      <SearchBox />
      <CardList chars={chars}/>
    </div>
  )
}

export default App;
