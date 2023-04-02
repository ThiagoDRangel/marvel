import React from 'react';
import HecoCard from './components/HeroCard';
import Search from './components/Search';
import HeroProvider from './context/HeroProvider';
import './styles/App.css';

function App() {
  
  return (
    <HeroProvider>
      <Search />
      <HecoCard />
    </HeroProvider>
  );
}

export default App;
