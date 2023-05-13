import React, { useEffect, useState } from 'react';
import ListMovies from 'components/listMovies/ListMovies';
import { fetchTrendingMovies } from 'services/Api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchMovies() {
        const results = await fetchTrendingMovies();
        setMovies(results);
    }
    fetchMovies().catch((error) => {
      setError('Sorry, something went wrong...');
      console.error(error);
    });
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <ListMovies movies={movies} />
      )}
    </>
  );
};

export default Home;
