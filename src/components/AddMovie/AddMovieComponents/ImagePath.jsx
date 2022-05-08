/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div className="title-box">
        <input
          type="text"
          name="imagePath"
          value={ value }
          data-testid="image-input"
          onChange={ onChange }
          placeholder=""
          onFocus={ (e) => { e.target.placeholder = 'Digite a url da Imagem!'; } }
          onBlur={ (e) => { e.target.placeholder = ''; } }
          required
        />
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
        </label>
      </div>
    );
  }
}

ImagePath.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImagePath;
