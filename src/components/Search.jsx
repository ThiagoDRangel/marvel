import React, { useContext } from 'react';
import HeroContext from '../context/HeroContext';
import '../styles/Search.css';

function Search() {
  const { character, setCharacter, handleSubmit, showError, error, loading } = useContext(HeroContext);

  return (
    <main className="search-container">
      <form onSubmit={handleSubmit} className="form-container">
        <label>
          Digite o nome do personagem:
          <input
            onChange={(e) => setCharacter({ ...character, name: e.target.value })}
            type="text"
            value={character.name}
            className={loading ? 'hidden' : ''}
          />
        </label>
        <button
          type="submit"
          className={loading ? 'hidden' : ''}
        >
          Buscar
        </button>
        {loading && <div className="loader"></div>}
        <span></span>
      </form>
      {showError && <p>{error}</p>}
    </main>
  );
}

export default Search;
