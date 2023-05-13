import React, { useEffect, useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

const MovieDetails = ({ id }) => {
console.log(id);
	const [movie, setMovie] = useState([]);

  // useEffect(() => {
  //   axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=7d64af72531b3a4fd4be20da05e7a65f`)
  //     .then(response => {
  //       setMovie(response.data.results);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, [id]);

	// return (
	// 	<>
	// 	<div>MovieDetails</div>
	// 		<ul>
  //       <li><Link to="cast">Cast</Link></li>
  //       <li><Link to="reviews">Reviews</Link></li>
  //     </ul>
	// 	<Outlet />
	// 	</>
	// );
};

export default MovieDetails;