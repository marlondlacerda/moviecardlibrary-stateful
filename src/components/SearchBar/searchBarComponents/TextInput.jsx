import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

class TextInputLabel extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <div className="content">
        <div className="search">
          <input
            id="searchText"
            className="search__input"
            type="text"
            name="searchText"
            data-testid="text-input"
            value={ searchText }
            placeholder="enter your search"
            onChange={ onSearchTextChange }
          />
          <button type="button" className="search__submit">
            <FontAwesomeIcon icon={ faSearch } />
          </button>
        </div>
      </div>
    );
  }
}

TextInputLabel.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default TextInputLabel;
