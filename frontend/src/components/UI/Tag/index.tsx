import React from 'react';
import classNames from 'classnames';

interface TagProps {
	color: string;
	text: string;
}

const Tag = ({ color, text }: TagProps) => {
	return (
		<span
			className={classNames('rounded-full text-sm leading-4 px-3 py-0.5 w-fit', {
				'bg-lightGray text-blue'     : color === 'blue',
				'bg-lightRed text-red'       : color === 'red',
				'bg-lightYellow text-yellow' : color === 'purple',
				'bg-green-100 text-black'    : color === 'green',
				'bg-pink-100 text-black'     : color === 'pink',
			})}
		>
			{text}
		</span>
	);
};

export default Tag;
