import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
export const API_KEY = '7d64af72531b3a4fd4be20da05e7a65f';

export const fetchTrendingMovies = async () => {
	const response = await axios.get('trending/movie/day', {
		params: {
			api_key: API_KEY,
		}
	});

	return response.data.results;
};

export const fetchMoviesSearchQuery = async (searchQuery) => {
	const response = await axios.get('search/movie', {
		params: {
			api_key: API_KEY,
			query: searchQuery,
			page: 1,
		}
	});

	return response.data.results;
};

export const fetchMoviesById = async (movie_id) => {
	const response = await axios.get(`movie/${movie_id}`, {
		params: {
			api_key: API_KEY,
		}
	});

	return response.data;
};

export const fetchMovieCast = async (movie_id) => {
	const response = await axios.get(`movie/${movie_id}/credits`, {
		params: {
			api_key: API_KEY,
		}
	});

	return response.data.cast;
};

export const fetchMovieRewiews = async (movie_id) => {
	const response = await axios.get(`movie/${movie_id}`, {
		params: {
			api_key: API_KEY,
			pafe: 1,
		}
	});

	return response.data.results;
}