import React from 'react';
import { SearchIcon } from '../../images/icons';

const SearchBox = () => {
	return (
		<form className='flexStart text-black text-sm gap-3 border-2 border-gray rounded px-2.5 py-3 w-full'>
			<i className='w-3.5 h-3.5 '>
				<SearchIcon />
			</i>
			<input
				className='placeholder:text-black outline-none h-full w-full'
				type='text'
				placeholder='Rechercher une catégorie'
			/>
		</form>
	);
};

export default SearchBox;
