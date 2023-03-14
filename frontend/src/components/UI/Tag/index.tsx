import React from 'react';
import classNames from 'classnames';

interface TagProps {
	color: 'red' | 'blue' | 'yellow';
	text: string;
}

const Tag = ({ color, text }: TagProps) => {
	return (
		<span
			className={classNames('rounded-full text-sm leading-4 px-3 py-0.5', {
				'bg-lightGray text-blue'     : color === 'blue',
				'bg-lightRed text-red'       : color === 'red',
				'bg-lightYellow text-yellow' : color === 'yellow',
			})}
		>
			{text}
		</span>
	);
};

export default Tag;
