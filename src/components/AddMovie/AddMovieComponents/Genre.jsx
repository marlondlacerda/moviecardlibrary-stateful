/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Genre extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div className="container-genre">
        <label htmlFor="genres">
          Gênero
        </label>
        <select
          name="genres"
          id="genres"
          value={ value }
          onChange={ onChange }
        >
          <option value="Action">Ação</option>
          <option value="Adventure">Aventura</option>
          <option value="Fantasy">Fantasia</option>
          <option value="Anime"> Anime</option>
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

Genre.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Genre;
