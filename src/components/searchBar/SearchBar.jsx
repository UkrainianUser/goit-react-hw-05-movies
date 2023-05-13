import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import css from 'components/searchBar/SearchBar.module.css'

const SearchBar = ({onSubmit, searchQuery}) => {
	const [query, setQuery] = useState('');
	const [disabledBtn, setDisabledBtn] = useState(false);

	const handleChange = (evt) => {
		setQuery(evt.target.value);
		setDisabledBtn(false);
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();

		if (query.trim() === '') {
			Notiflix.Notify.warning('Search is a required field');
			return;
		}

		onSubmit(query);
		setDisabledBtn(true);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				className={css.input}
				type="text"
				name="query"
				value={query}
				onChange={handleChange}
				placeholder="Enter the name of the movie"
			/>
			<button type="submit" disabled={disabledBtn}>Search</button>
		</form>
	)
};

export default SearchBar;

SearchBar.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	searchQuery: PropTypes.string,
}