import React from 'react';
import { AlphabeticOrderIcon, ThreeBoxesIcon } from '../../images/icons';
import { SelectButton } from '../UI/Buttons';

const Navbar = () => {
	return (
		<header className='flexCenter w-full h-1/6 bg-white'>
			<div className='flexStartCenter w-layout gap-2 py-4'>
				<h1 className='text-lg mr-2'>Catégories</h1>
				<SelectButton
					text={'Groupe de catégorie'}
					icon={<ThreeBoxesIcon />}
				/>
				<SelectButton
					text={'Ordre alphabétique'}
					icon={<AlphabeticOrderIcon />}
				/>
			</div>
		</header>
	);
};

export default Navbar;
