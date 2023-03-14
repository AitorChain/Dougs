import React from 'react';
import Button from '../Button';
import classNames from 'classnames';

interface ActionButtonProps {
	text: string;
	variant: 'primary' | 'secondary';
}

const ActionButton = ({ text, variant = 'primary' }: ActionButtonProps) => {
	return (
		<Button
			styles={classNames(
				'flexBetween gap-2 px-3 py-[9px] text-base font-bold rounded',
				{
					'bg-blue text-white': variant === 'primary',
				}
			)}
			onClick={() => {
				console.log('hi');
			}}
		>
			<span>{text}</span>
		</Button>
	);
};

export default ActionButton;
