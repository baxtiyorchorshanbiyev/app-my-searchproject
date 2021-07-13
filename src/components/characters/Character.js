import React from 'react';
import CharacterItem from './CharacterItem';
// import Spinner from '../ui/Spinner';

const Character = ({items, isLoading}) => {
  return isLoading ? (
    <section className="loader">
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </section>
    ): 
    ( <section className="cards">
    {items.map( item =>(
      <CharacterItem key={item.char_id } item = {item}></CharacterItem>
    ))}
  </section>)
    
  
};

export default Character;