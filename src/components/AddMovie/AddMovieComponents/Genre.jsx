import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Genre extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div className="container-genre">
        <label data-testid="genre-input-label" htmlFor="genres">
          Gênero
        </label>
        <select
          data-testid="genre-input"
          name="genres"
          id="genres"
          value={ value }
          onChange={ onChange }
        >
          <option data-testid="genre-option" value="Action">Ação</option>
          <option data-testid="genre-option" value="Adventure">Aventura</option>
          <option data-testid="genre-option" value="Fantasy">Fantasia</option>
          <option data-testid="genre-option" value="Anime"> Anime</option>
          <option data-testid="genre-option" value="Sci-fi">Sci-fi</option>
          <option data-testid="genre-option" value="Crime">Crime</option>
          <option data-testid="genre-option" value="Drama">Drama</option>
          <option data-testid="genre-option" value="Mystery">Suspense</option>
          <option data-testid="genre-option" value="Terror">Terror</option>
        </select>
      </div>
    );
  }
}

Genre.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Genre;
