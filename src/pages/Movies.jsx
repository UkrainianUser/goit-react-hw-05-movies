import React, { useEffect, useState } from 'react';
import axios from "axios";

const Movies = () => {

	const [searchQuery, setSearchQuery] = useState('');

	const handleQueryChange = evt => {
		setSearchQuery(evt.currentTarget.value.toLowerCase());
		console.log(searchQuery);
	};

	useEffect(() => {
		axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7d64af72531b3a4fd4be20da05e7a65f&query=${searchQuery}`)
	}, [searchQuery]);

	return (
		<>
		<div>Movies</div>
		<form>
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
		</>
	);
};

export default Movies;