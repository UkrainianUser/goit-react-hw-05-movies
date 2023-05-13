import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMoviesSearchQuery } from 'services/Api';

const Movies = () => {

	const [searchQuery, setSearchQuery] = useState('');
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState('');

  useEffect(() => {
    async function fetchMovies() {
      try {
        const results = await fetchMoviesSearchQuery(searchQuery);
        setMovies(results);
      } catch (error) {
        setError('Sorry, something went wrong...');
        console.error(error);
      }
    }
    fetchMovies();
  }, [searchQuery]);

  const handleQueryChange = evt => {
    setSearchQuery(evt.target.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
		onSubmit(searchQuery);
  };

	return (
		<>
      <div>Movies</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleQueryChange}
          value={searchQuery}
        />
        <button type="submit">Search</button>
      </form>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {movies.length > 0 &&
            movies.map(({ id, title }) => (
              <li key={id}>
                <Link to={`/movie/${id}`}>{title}</Link>
              </li>
            ))}
        </ul>
      )}
		</>
	);
};

export default Movies;