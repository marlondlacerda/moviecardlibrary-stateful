import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Subtítulo
        <input
          type="text"
          name="imagePath"
          value={ value }
          data-testid="image-input"
          onChange={ onChange }
          placeholder="Digite a url da Imagem!"
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImagePath;
