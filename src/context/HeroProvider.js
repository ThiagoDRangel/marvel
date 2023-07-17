import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import HeroContext from './HeroContext';
import { getCharacter } from '../services/fetchAPI';

function HeroProvider({ children }) {
  const INITIAL_STATE = {
    id: '',
    path: '',
    name: '',
    extension: '',
  }
  const [character, setCharacter] = useState(INITIAL_STATE);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCharacter(INITIAL_STATE);
    setLoading(true);
    try {
      const characterData = await getCharacter(character.name);
      console.log('here', characterData);
      setCharacter({
        id: characterData.id,
        path: characterData.thumbnail.path,
        name: characterData.name,
        extension: characterData.thumbnail.extension,
      });
      setLoading(false);
      setError(null);
      setShowError(false);
    } catch (error) {
      setCharacter(INITIAL_STATE);
      setLoading(false);
      setError('Personagem não encontrado');
      setShowError(true);
    }
  };

  const context = useMemo(() => ({
    character,
    error,
    loading,
    setCharacter,
    handleSubmit,
    showError,
    setShowError,
  }), [character, error, loading, showError]);

  return (
    <HeroContext.Provider value={context}>
      {children}
    </HeroContext.Provider>
  );
}

HeroProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeroProvider;
