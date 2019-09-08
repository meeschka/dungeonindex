import React from 'react';
import Card from './Card';

const CardList = ({chars}) => {
  return (
    <div>
      {
        chars.map((char, i) => {
          return (
            <Card
              key={i}
              name={chars[i].name}
              charClass={chars[i].class}
              race = {chars[i].race}
              description={chars[i].details}
              id={chars[i].id}
            />
          )
        })
      }
    </div>
  )
}
export default CardList;
