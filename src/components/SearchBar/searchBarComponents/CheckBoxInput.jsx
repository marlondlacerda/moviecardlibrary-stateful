import React from 'react';
import PropTypes from 'prop-types';

import './CheckBoxInput.css';

class CheckBoxInputLabel extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;

    return (
      <label
        htmlFor="bookmarkedOnly"
        className="label-checkbox"
      >
        <input
          type="checkbox"
          name="bookmarkedOnly"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          className="switch"
        />
        Mostrar somente favoritos
      </label>
    );
  }
}

CheckBoxInputLabel.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default CheckBoxInputLabel;
