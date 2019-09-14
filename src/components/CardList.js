import React from 'react';
import Card from './Card';

const CardList = ({chars}) => {
  return (
    <div>
      {
        chars.map((char, i) => {
          return (
            <Card
              key={chars[i]._id}
              name={chars[i].name}
              charClass={chars[i].charClass}
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
