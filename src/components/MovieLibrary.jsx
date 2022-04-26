import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  onClick(object) {
    this.setState(({ movies }) => ({
      movies: [...movies, object],
    }));
  }

  render() {
    const { searchText, movies, bookmarkedOnly, selectedGenre } = this.state;
    const { onChange, onClick } = this;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ onChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onChange }
        />
        <MovieList
          movies={ Object.values(movies)
            .filter((movie) => (bookmarkedOnly === false
              ? movie : movie.bookmarked === bookmarkedOnly))
            .filter((movie) => (selectedGenre === ''
              ? movie : movie.genre === selectedGenre))
            .filter((movie) => movie.title.includes(searchText)
            || movie.subtitle.includes(searchText)
            || movie.storyline.includes(searchText)) }
        />
        <AddMovie onClick={ onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
