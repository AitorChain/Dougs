import React from 'react';
import { SearchIcon } from '../../images/icons';

interface SearchBoxProps {
	className?: string;
}

const SearchBox = ({ className }: SearchBoxProps) => {
	return (
		<form
			className={`flexStart text-black text-sm leading-4 gap-3 border border-gray bg-white rounded px-2.5 py-3 ${className}`}
		>
			<i className='w-3.5 h-3.5 '>
				<SearchIcon />
			</i>
			<input
				className='placeholder:text-black outline-none w-full'
				type='text'
				placeholder='Rechercher une catégorie'
			/>
		</form>
	);
};

export default SearchBox;
