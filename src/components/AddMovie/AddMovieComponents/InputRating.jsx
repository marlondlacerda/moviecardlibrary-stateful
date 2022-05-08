/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const TEN = 10;

class InputRating extends Component {
  inc = () => {
    const { value, onChange } = this.props;

    if (value === TEN) return;

    const target = {
      name: 'rating',
      value: value + 1,
    };

    onChange({ target });
  }

  dec = () => {
    const { value, onChange } = this.props;

    if (value === 0) return;

    const target = {
      name: 'rating',
      value: value - 1,
    };

    onChange({ target });
  }

  render() {
    const { value, onChange } = this.props;
    const { inc, dec } = this;

    return (
      <div className="input-rating">
        <label htmlFor="rating">
          Avaliação
        </label>
        <div className="container-input">
          <span
            role="button"
            className="prev"
            tabIndex="0"
            onClick={ () => dec() }
            onKeyDown={ () => dec() }
          />
          <input
            type="number"
            name="rating"
            className="rating-input"
            id="rating"
            value={ value }
            onChange={ onChange }
            placeholder="Digite o nome do Filme!"
            min="0"
            max="10"
          />
          <span
            role="button"
            className="next"
            name="rating"
            tabIndex="0"
            onClick={ () => inc() }
            onKeyUp={ () => inc() }
          />
        </div>
      </div>
    );
  }
}

InputRating.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputRating;
