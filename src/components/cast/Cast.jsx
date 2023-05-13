import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieCast } from "services/Api";
import CastDetails from "components/castDetails/CastDetails";

const Cast = () => {

	const {movieId} = useParams();
	const [cast, setCast] = useState([]);
	const [error, setError] = useState('');

	useEffect(() => {
		async function fetchCast() {
			const cast = await fetchMovieCast(movieId);
			setCast(cast);
		}
		fetchCast().catch((error) => {
			setError('Sorry, something went wrong.');
			console.error(error);
		})
	}, [movieId]);

	return (
		<div>
			{error ? (
				<p>{error}</p>
			) : (
				<ul>
					{cast?.map((castValue) => {
						return(
							<CastDetails key={castValue.id}
								profile_path={castValue.profile_path}
								original_name={castValue.original_name}
								character={castValue.character} />
						)
					})}
				</ul>
			)}
		</div>
	);
};

export default Cast;