import React, { useContext } from 'react';
import HeroContext from '../context/HeroContext';

function Search() {
  const { character, setCharacter, handleSubmit } = useContext(HeroContext);

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label>
          Digite o nome do personagem:
          <input
            onChange={(e) => setCharacter({name: e.target.value}) }
            type="text"
            value={character ? character.name : ''}
          />
        </label>
        <button type="submit">Buscar</button>
        <span></span>
      </form>
    </main>
  );
}

export default Search;
