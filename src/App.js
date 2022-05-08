import React, { useEffect, useState } from 'react';
import FeaturedMovie from './components/FeaturedMovie';
import MovieLibrary from './components/MovieLibrary';
import Header from './components/Header';
import Footer from './components/Footer';
import movies from './data';
import loading from './images/loading1.gif';
import loadingMobile from './images/loadingmobile.gif';

import './App.css';

const TWO_SECONDS = 2000;

function App() {
  const [isCardsLoading, setIsCardsLoading] = useState(true);

  const index = Math.floor(Math.random() * movies.length);

  useEffect(() => {
    setTimeout(() => {
      setIsCardsLoading(false);
    }, TWO_SECONDS);
  });

  return (
    <div className="App">
      <Header />
      <FeaturedMovie movie={ movies[index] } />
      <div className="lists">
        <MovieLibrary movies={ movies } />
      </div>
      <Footer />

      {
        isCardsLoading
          && (
            <div className="loading">
              <img className="load-desktop" src={ loading } alt="loading" />
              <img className="load-mobile" src={ loadingMobile } alt="loading" />
            </div>
          )
      }
    </div>
  );
}

export default App;
