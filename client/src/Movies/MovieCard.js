import React from 'react';
import MovieList from './MovieList';
import { Link } from 'react-router-dom';
import Movie from './Movie';

const MovieCard = props => {

  const movie = MovieList.map(movie => {
    return (
      <Link to={`/movies/${props.id}`}>
        {movie}
        </Link>
      )
    })
console.log(movie)
};

export default MovieCard;
