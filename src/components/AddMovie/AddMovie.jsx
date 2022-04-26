import React from 'react';
import PropTypes from 'prop-types';
import {
  ImagePath,
  Genre,
  InputRating,
  Title,
  Subtitle,
  Storyline,
} from './AddMovieComponents';

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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  onClickFunc = () => {
    const { onClick } = this.props;

    onClick(this.state);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { handleChange } = this;
    return (
      <div>
        Adicionar novo Filme
        <form data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
          <section>
            <Title value={ title } onChange={ handleChange } />
            <Subtitle value={ subtitle } onChange={ handleChange } />
            <ImagePath value={ imagePath } onChange={ handleChange } />
            <Storyline value={ storyline } onChange={ handleChange } />
            <InputRating value={ Number(rating) } onChange={ handleChange } />
            <Genre value={ genre } onChange={ handleChange } />
          </section>
          <button
            data-testid="send-button"
            type="button"
            onClick={ this.onClickFunc }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
