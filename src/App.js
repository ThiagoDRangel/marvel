import React from 'react';
import HecoCard from './components/HeroCard';
import Search from './components/Search';
import HeroProvider from './context/HeroProvider';

function App() {
  
  return (
    <HeroProvider>
      Hello World!
      <Search />
      <HecoCard />
    </HeroProvider>
  );
}

export default App;
