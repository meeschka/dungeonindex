import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
  return(
    <div className="pa2">
      <input className="pa3" type="search" placeholder="Search Characters" onChange ={searchChange}/>
    </div>
  )
}

export default SearchBox;
