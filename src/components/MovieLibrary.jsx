import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      movies: props.movies,
      bookmarkedOnly: false,
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,

    });
  }

  render() {
    const { searchText, movies, bookmarkedOnly } = this.state;
    const { handleChange } = this;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ handleChange }
        />
        <MovieList movies={ movies } />
        <AddMovie />
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
