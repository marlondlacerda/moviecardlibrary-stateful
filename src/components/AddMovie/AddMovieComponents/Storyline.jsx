/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div className="title-box">
        <textarea
          name="storyline"
          value={ value }
          onChange={ onChange }
          placeholder=""
          onFocus={ (e) => { e.target.placeholder = 'Escreva a Sinopse do Filme!'; } }
          onBlur={ (e) => { e.target.placeholder = ''; } }
          required
        />
        <label htmlFor="storyline">
          Sinopse
        </label>
      </div>
    );
  }
}

Storyline.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Storyline;
