import React, { useEffect, useState, Suspense } from 'react';
import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { fetchMoviesById } from 'services/Api';
import BackLink from 'components/backLink/BackLink';
import Loader from 'components/loader/Loader';
import MovieInfo from 'components/movieInfo/MovieInfo';

const MovieDetails = () => {

  const {movieId} = useParams();
	const [movie, setMovie] = useState({});
  const [error, setError] = useState('');

  const location = useLocation();
  const backLinkPath = location.state?.from ?? '/';
  
  useEffect(() => {
    async function fetchMovies() {
      const movies = await fetchMoviesById(movieId);
      setMovie(movie);
    }
    fetchMovies().catch((error) => {
      setError('The resource you requsted could not be found.');
      console.error(error);
    });
  }, [movieId]);

	return (
		<>
      <BackLink to={backLinkPath}/>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
        <MovieInfo
        poster_path={movie.poster_path}
        title={movie.title}
        release_date={movie.release_date}
        vote_average={movie.vote_average}
        overview={movie.overview}
        genres={movie.genres}
        />
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to='cast' state={{from: backLinkPath}}>Cast</Link>
          </li>
          <li>
            <Link to='reviews' state={{from: backLinkPath}}>Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        </>
      )}
		</>
	);
};

export default MovieDetails;