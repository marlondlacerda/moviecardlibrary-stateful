/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

class SelectInputLabel extends React.Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <div className="search-genre">
        <label
          htmlFor="selectedGenre"
        >
          Filtrar por gênero:
        </label>
        <select
          className="select-input"
          name="selectedGenre"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
        >
          <option value="">Todos</option>
          <option value="Action">Ação</option>
          <option value="Adventure">Aventura</option>
          <option value="Fantasy">Fantasia</option>
          <option value="Anime">Anime</option>
          <option value="Sci-fi">Sci-fi</option>
          <option value="Crime">Crime</option>
          <option value="Drama">Drama</option>
          <option value="Mystery">Suspense</option>
          <option value="Terror">Terror</option>
        </select>
      </div>
    );
  }
}

SelectInputLabel.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SelectInputLabel;
