/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Subtitle extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div className="title-box">
        <input
          type="text"
          name="subtitle"
          value={ value }
          onChange={ onChange }
          placeholder=""
          onFocus={ (e) => { e.target.placeholder = 'Digite um subtítulo do Filme!'; } }
          onBlur={ (e) => { e.target.placeholder = ''; } }
          required
        />
        <label htmlFor="subtitle">
          Subtítulo
        </label>
      </div>
    );
  }
}

Subtitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Subtitle;
