import React from 'react';
import PropTypes from 'prop-types';

class SelectInputLabel extends React.Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <label
        htmlFor="selectedGenre"
        data-testid="select-input-label"
      >
        Filtrar por gênero
        <select
          name="selectedGenre"
          data-testid="select-input"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectInputLabel.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SelectInputLabel;
