import React, { useContext } from 'react';
import HeroContext from '../context/HeroContext';

function HecoCard() {
  const { character } = useContext(HeroContext);
  const { path, extension } = character.thumbnail;
  return (
    <main>
      <p>{character.id}</p>
      <p>{character.name}</p>
      <img
        src={`${path}/portrait_xlarge.${extension}`}
        alt={character.name}
      />
    </main>
  );
}

export default HecoCard;
