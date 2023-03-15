import React from 'react';
import Dropdown from '../../components/Dropdown';
import SearchBox from '../../components/SearchBox';

const SearchSection = () => {
	return (
		<section className='flexBetween p-4 pb-6 bg-white'>
			<SearchBox />
			<Dropdown />
		</section>
	);
};

export default SearchSection;
