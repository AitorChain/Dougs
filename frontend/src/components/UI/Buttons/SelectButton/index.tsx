import React from 'react';
import Button from '../Button';
import classNames from 'classnames';

interface SelectButtonProps {
	icon: JSX.Element;
	text: string;
	isActive?: boolean;
	onClick: () => void;
}

const SelectButton = ({ text, icon, isActive, onClick }: SelectButtonProps) => {
	return (
		<Button
			styles={classNames(
				'flexBetween gap-2 p-2 text-sm font-semibold rounded hover:bg-lightGray hover:text-blue',
				{ 'bg-lightGray text-blue': isActive, 'text-darkGray': !isActive }
			)}
			onClick={onClick}
		>
			<i className='w-3.5 h-3.5 '>{icon}</i>
			<span>{text}</span>
		</Button>
	);
};

export default SelectButton;
