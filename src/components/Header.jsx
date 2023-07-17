import React from 'react';
import md5 from 'js-md5';
import '../styles/Header.css';

const publicKey = '2fe80a1d9525348cba1de3eb501b7d38';
const privateKey = '04e343ee7dad82c7466301cc8fc5be576e053986';

function Header() {
  const [character, setCharacter] = React.useState(null);

  React.useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const ts = new Date().getTime();
        const hash = md5(`${ts}${privateKey}${publicKey}`);
        const response = await fetch(
          `http://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&ts=${ts}&hash=${hash}`
        );
        if (response.ok) {
          const data = await response.json();
          const characters = data.data.results;
          const randomIndex = Math.floor(Math.random() * characters.length);
          const randomCharacter = characters[randomIndex];
          setCharacter(randomCharacter);
        } else {
          console.error('Error:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCharacter();
  }, []);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <header className="header">
      <h1 className="header__title">{character.name}</h1>
      <img
        className="header__image"
        src={`${character.thumbnail.path}/portrait_xlarge.${character.thumbnail.extension}`}
        alt={character.name}
      />
      <p className="header__description">{character.description}</p>
    </header>
  );
}

export default Header;
