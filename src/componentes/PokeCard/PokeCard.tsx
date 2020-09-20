import * as style from './styled';
import React from 'react';

export interface IPokemon {
  name: string;
  img: string;
}

const PokeCard = (pokemon: IPokemon) => {
  const { name, img } = pokemon;

  return (
    <style.Card>
      <style.Photo src={img} />
      <style.Title>{name}</style.Title>
    </style.Card>
  );
};

export default PokeCard;
