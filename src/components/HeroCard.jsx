import React, { useContext } from 'react';
import HeroContext from '../context/HeroContext';
import '../styles/HeroCard.css';

function HeroCard() {
  const { character } = useContext(HeroContext);
  const { id, name, path, extension } = character;
  return (
    <main className="hero-card-container">
      <section className="hero-card">
        <p>{id}</p>
        <p>{name}</p>
        <img
          src={`${path}/portrait_xlarge.${extension}`}
          alt={name}
        />
      </section>
    </main>
  );
}

export default HeroCard;
