/* eslint-disable max-lines-per-function */
import React, { useEffect, useState } from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';
import './MovieList.css';

const WIDTHLENGHT = 350;
const SIXTY = 60;
const TWOHUNDRED = 150;
const FOUR = 4;

const MovieList = (props) => {
  const [scrollX, setScrollX] = useState(-TWOHUNDRED);

  const { movies } = props;

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    console.log(movies.length);
    if (x > 0) x = 0;
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    const list = movies.length * WIDTHLENGHT;

    if ((window.innerWidth - list) > x) {
      x = (window.innerWidth - list) - SIXTY;
    }
    setScrollX(x);
  };

  useEffect(() => {
    if (movies.length < FOUR) {
      setScrollX(0);
    } else if (scrollX === 0) {
      setScrollX(-TWOHUNDRED);
    }
  }, [movies, scrollX]);

  return (
    <div className="movieRow">
      <h2>Lançamentos</h2>
      <button
        type="button"
        className="movieRow-left"
        onClick={ handleLeftArrow }
      >
        <NavigateBeforeIcon style={ { fontSize: 50 } } />
      </button>

      <button type="button" className="movieRow-right" onClick={ handleRightArrow }>
        <NavigateNextIcon style={ { fontSize: 50 } } />
      </button>
      <div className="movieRow-listarea">
        <main
          data-testid="movie-list"
          className="movie-list"
          style={ {
            marginLeft: scrollX,
            width: '1780px',
          } }
        >
          {
            movies.map((filme) => <MovieCard key={ filme.title } movie={ filme } />)
          }
        </main>
      </div>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
