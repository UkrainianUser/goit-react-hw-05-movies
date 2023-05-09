import React, {  useState } from "react";
import axios from "axios";

const Movies = () => {

	const [searchQuery, setSearchQuery] = useState("");
	const [movies, setMovies] = useState([]);
	
	const handleQueryChange = evt => {
		setSearchQuery(evt.currentTarget.value.toLowerCase());
	};
	
	const handleSubmit = evt => {
		evt.preventDefault();

		if (searchQuery !== "") {
			axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7d64af72531b3a4fd4be20da05e7a65f&query=${searchQuery}`)
			.then((response) => {
				setMovies(response.data.results);})
			.catch((error) => {
				console.error(error);});
		};
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
		<ul>
			{movies.length > 0 && movies.map(({id, title}) => (
				<li key={id}>
				<a href="#">{title}</a>
				</li>
			))}
		</ul>
		</>
	);
};

export default Movies;