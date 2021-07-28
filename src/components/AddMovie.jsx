import React from 'react';
// import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import Storyline from './Storyline';
import InputRating from './InputRating';
import Genre from './Genre';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { handleChange } = this;
    return (
      <form data-testid="add-movie-form">
        <section>
          <Title value={ title } onChange={ handleChange } />
          <Subtitle value={ subtitle } onChange={ handleChange } />
          <ImagePath value={ imagePath } onChange={ handleChange } />
          <Storyline value={ storyline } onChange={ handleChange } />
          <InputRating value={ rating } onChange={ handleChange } />
          <Genre value={ genre } onChange={ handleChange } />
        </section>

      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
