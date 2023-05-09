import React, { useEffect, useState } from 'react';
import axios from "axios";

const Home = () => {
	const [trending, setTrending] = useState([]);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=7d64af72531b3a4fd4be20da05e7a65f')
      .then(response => {
        setTrending(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

	return (
		<>
		<div>Home</div>
		<ul>
			{trending.map(({id, title}) => (
				<li key={id}>
				<a href="#">{title}</a>
				</li>
			))}
		</ul>
		</>

	);
};

export default Home;
