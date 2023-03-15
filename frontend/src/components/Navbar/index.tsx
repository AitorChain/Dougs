import React, { useContext } from 'react';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import { ORD_ALPHABETIC, ORD_CATEGORY } from '../../hooks/useCategories';
import { AlphabeticOrderIcon, ThreeBoxesIcon } from '../../images/icons';
import { GroupedByType } from '../../models/categories.types';
import { SelectButton } from '../UI/Buttons';

const Navbar = () => {
	const { groupedBy, setGroupedBy } = useContext(CategoriesContext);

	const handleClick = (desiredGrouping: GroupedByType) => {
		if (desiredGrouping === groupedBy) {
			return;
		}

		setGroupedBy(desiredGrouping);
	};

	return (
		<header className='flexCenter w-full h-1/6 bg-white'>
			<div className='flexStartCenter w-layout gap-2 py-4'>
				<h1 className='text-lg mr-2'>Catégories</h1>
				<SelectButton
					text={'Groupe de catégorie'}
					icon={<ThreeBoxesIcon />}
					isActive={groupedBy === ORD_CATEGORY}
					onClick={() => handleClick(ORD_CATEGORY)}
				/>
				<SelectButton
					text={'Ordre alphabétique'}
					icon={<AlphabeticOrderIcon />}
					isActive={groupedBy === ORD_ALPHABETIC}
					onClick={() => handleClick(ORD_ALPHABETIC)}
				/>
			</div>
		</header>
	);
};

export default Navbar;
