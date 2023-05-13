import PropTypes from 'prop-types';
import css from 'components/movieInfo/MovieInfo.module.css';

const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w300/';

const MovieInfo = ({poster_path, title, release_date, vote_average, overview, genres}) => {
	return (
		<div className={css.movieCard}>
			{poster_path && <img src={IMAGES_BASE_URL + poster_path} alt={title} />}
			<div>
				<h2>{title} ({release_date?.slice(0, 4)})</h2>
				<p>User Score: {Math.round(vote_average * 10)}%</p>
				<h3>Overview</h3>
				<p>{overview}</p>
				<h3>Genres</h3>
				<p>{genres?.map(genre => genre.name).join(' ')}</p>
			</div>
		</div>
	)
};

export default MovieInfo;

MovieInfo.propTypes = {
	poster_path: PropTypes.string, 
	title: PropTypes.string, 
	release_date: PropTypes.string, 
	vote_average: PropTypes.number, 
	overview: PropTypes.string, 
	genres: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string,
	})),
}