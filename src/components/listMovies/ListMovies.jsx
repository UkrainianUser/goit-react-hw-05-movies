import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListMovies = ({movies}) => {
	const location = useLocation();

	return (
		<ul>
			{movies.map((movie) => {
				return (
					<li key={movie.id}>
						<Link to={`/movies/${movie.id}`} state={{from: location}}>
						{movie.name? movie.name : movie.title}
						</Link>
					</li>
				)
			})}
		</ul>
	)
};

export default ListMovies;

ListMovies.propTypes = {
	movies: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string,
		title: PropTypes.string,
	}))
}