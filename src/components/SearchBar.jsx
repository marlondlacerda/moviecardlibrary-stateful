import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="searchText">
            Inclui o texto:
            <input
              data-testid="text-input"
              type="text"
              id="searchText"
              name="searchText"
              value={ searchText }
              onChange={ onSearchTextChange }
              placeholder="Pesquisar Filme!"
            />
          </label>
          <label data-testid="checkbox-input-label" htmlFor="favoritos">
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input"
              id="favoritos"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
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
};

export default SearchBar;
