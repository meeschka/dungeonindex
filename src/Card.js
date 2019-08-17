import React from 'react';

const Card = ({name, race, charClass, description, id}) => {
  return(
    <div className="bg-light-gray dib br3 pa3 ma2 grow shadow-5 tc">
      <img alt="photo of character" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{race+" "+charClass}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
