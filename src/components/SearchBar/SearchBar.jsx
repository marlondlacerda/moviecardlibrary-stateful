import React from 'react';
import PropTypes from 'prop-types';
import { CheckBoxInput, SelectInput, TextInput } from './searchBarComponents';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, onSelectedGenreChange, selectedGenre } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          <TextInput
            searchText={ searchText }
            onSearchTextChange={ onSearchTextChange }
          />

          <CheckBoxInput
            bookmarkedOnly={ bookmarkedOnly }
            onBookmarkedChange={ onBookmarkedChange }
          />

          <SelectInput
            selectedGenre={ selectedGenre }
            onSelectedGenreChange={ onSelectedGenreChange }
          />
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
