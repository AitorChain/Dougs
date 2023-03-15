import React from 'react';
import Dropdown from '../../components/Dropdown';
import SearchBox from '../../components/SearchBox';

const SearchSection = () => {
	return (
		<section className='flexBetween p-4 pb-6 bg-white'>
			<SearchBox className='w-[877px]' />
			<Dropdown className='w-[271px]' />
		</section>
	);
};

export default SearchSection;
