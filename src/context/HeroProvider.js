import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import HeroContext from './HeroContext';
import { getCharacter } from '../services/fetchAPI';

function HeroProvider({ children }) {
  const INITIAL_STATE = {
    data: {},
    name: '',
  }
  const [character, setCharacter] = useState(INITIAL_STATE);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCharacter({});
    setLoading(true);
    try {
      const characterData = await getCharacter(character.name);
      setCharacter(characterData);
      setLoading(false);
      setError(null);
    } catch (error) {
      setCharacter({});
      setLoading(false);
      setError(error.message);
    }
  };

  const context = useMemo(() => ({
    character,
    error,
    loading,
    setCharacter,
    handleSubmit,
  }), [character, error, loading]);

  return (
    <HeroContext.Provider value={ context }>
      { children }
    </HeroContext.Provider>
  );
}

HeroProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeroProvider;