import React from 'react';
import { ActionButton } from '../Buttons';

const Toast = () => {
	return (
		<div className='flexCenter fixed bottom-0 w-full bg-white'>
			<div className='flex justify-end w-layout gap-2 py-4'>
				<ActionButton
					text='Sélectionner la catégorie'
					variant='primary'
				/>
			</div>
		</div>
	);
};

export default Toast;
