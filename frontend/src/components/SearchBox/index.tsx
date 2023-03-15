import React, { useContext } from 'react';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import { SearchIcon } from '../../images/icons';

interface SearchBoxProps {
	className?: string;
}

const SearchBox = ({ className }: SearchBoxProps) => {
	const { query, setQuery } = useContext(CategoriesContext);

	return (
		<form
			className={`flexStart text-black text-sm leading-4 gap-3 border border-gray bg-white rounded px-2.5 py-3 w-[877px] ${className}`}
		>
			<i className='w-3.5 h-3.5 '>
				<SearchIcon />
			</i>
			<input
				className='placeholder:text-black outline-none w-full'
				type='text'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder='Rechercher une catégorie'
			/>
		</form>
	);
};

export default SearchBox;
