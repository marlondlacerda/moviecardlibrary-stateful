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

import './AddMovie.css';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genres: 'Action',
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
    const { genres } = this.state;

    const newMovie = {
      ...this.state,
      genres: [genres],
    };

    onClick(newMovie);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genres: 'Action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genres } = this.state;
    const { handleChange } = this;
    return (
      <div className="new-movie-box">
        <h2>Adicionar novo Filme</h2>
        <form data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
          <section>
            <Title value={ title } onChange={ handleChange } />
            <Subtitle value={ subtitle } onChange={ handleChange } />
            <ImagePath value={ imagePath } onChange={ handleChange } />
            <Storyline value={ storyline } onChange={ handleChange } />
            <div className="container">
              <InputRating value={ Number(rating) } onChange={ handleChange } />
              <Genre value={ genres } onChange={ handleChange } />
            </div>
          </section>
          <div className="button-container">
            <button
              data-testid="send-button"
              type="button"
              onClick={ this.onClickFunc }
            >
              <span />
              <span />
              <span />
              <span />
              Adicionar filme
            </button>
          </div>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
