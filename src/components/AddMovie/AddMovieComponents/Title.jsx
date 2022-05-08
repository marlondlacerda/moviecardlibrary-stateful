/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div className="title-box">
        <input
          id="title"
          type="text"
          name="title"
          value={ value }
          onChange={ onChange }
          placeholder=""
          onFocus={ (e) => { e.target.placeholder = 'Digite o nome do Filme!'; } }
          onBlur={ (e) => { e.target.placeholder = ''; } }
          required
        />
        <label htmlFor="title">
          Título
        </label>
      </div>
    );
  }
}

Title.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Title;
