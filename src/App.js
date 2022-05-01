import React from 'react';
import FeaturedMovie from './components/FeaturedMovie';
import MovieLibrary from './components/MovieLibrary';
import Header from './components/Header';
import movies from './data';

import './App.css';

function App() {
  const index = Math.floor(Math.random() * movies.length);

  return (
    <div className="App">
      <Header />
      <FeaturedMovie movie={ movies[index] } />
      <div className="lists">
        <MovieLibrary movies={ movies } />
      </div>
    </div>
  );
}

export default App;
