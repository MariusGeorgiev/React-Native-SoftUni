import { useState } from 'react';

import data from './data.json';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';


export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const movePressHandler = (movieId) => {
    const movie = data.movies.find(movie => movie.id === movieId);
    setSelectedMovie(movie);
  };

  const closeDetailsHandler = () => {
    setSelectedMovie(null);
  }

  return selectedMovie
    ? <MovieDetails movie={selectedMovie} onClose={closeDetailsHandler} />
    : <MovieList movies={data.movies} moviePressHandler={movePressHandler} />

}

