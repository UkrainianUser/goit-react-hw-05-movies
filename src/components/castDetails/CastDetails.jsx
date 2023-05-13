import PropTypes from 'prop-types';

const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w300/';

const CastDetails = ({profile_path, original_name, character}) => {
	return (
		<li>
			{profile_path && <img src={IMAGES_BASE_URL+profile_path} alt={original_name}/>}
			<h4>{original_name}</h4>
			<p>Character: {character}</p>
		</li>
	)
};

export default CastDetails;

CastDetails.propTypes = {
	profile_path: PropTypes.string,
	original_name: PropTypes.string,
	character: PropTypes.string,
}