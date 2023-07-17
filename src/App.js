import React from 'react';
import HeroCard from './components/HeroCard';
import Search from './components/Search';
import HeroProvider from './context/HeroProvider';
import './styles/App.css';

function App() {
  return (
    <HeroProvider>
      <Search />
      <HeroCard />
    </HeroProvider>
  );
}

export default App;
