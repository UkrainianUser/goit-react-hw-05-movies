import React, {  useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesSearchQuery } from 'services/Api';
import SearchBar from 'components/searchBar/SearchBar';
import ListMovies from 'components/listMovies/ListMovies';

const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

	const [movies, setMovies] = useState([]);
	const [error, setError] = useState('');

  useEffect(() => {
    async function fetchMovies() {
      const results = await fetchMoviesSearchQuery(query);
      setMovies(results);
    }
    fetchMovies().catch((error) => {
      setError('Sorry, something went wrong...');
      console.error(error);
    });

  }, [query]);

  const getSearchQuery = (searchQuery) => {
    setSearchParams({query: searchQuery});
  }

	return (
		<>
      <SearchBar onSubmit={getSearchQuery} searchQuery={query}/>
      {error ? (
        <p>{error}</p>
      ) : (
        <ListMovies movies={movies} />
      )}
		</>
	);
};

export default Movies;