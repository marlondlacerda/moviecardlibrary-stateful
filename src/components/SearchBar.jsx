import React from 'react';

class SearchBar extends React.Component {
  render() {
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
            />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
