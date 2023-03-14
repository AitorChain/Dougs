import React from 'react';
import classNames from 'classnames';
import Tag from '../UI/Tag';
import DOMPurify from 'dompurify';

interface CategoryPreviewProps {
	title: string;
	description: string;
	isSelected?: boolean;
	showCategoryTag?: boolean;
}

const CategoryPreview = ({
	title,
	description,
	isSelected,
	showCategoryTag = false,
}: CategoryPreviewProps) => {
	const sanitazedDescription = () => ({
		__html: DOMPurify.sanitize(description),
	});

	return (
		<div
			className={classNames(
				'flex flex-col justify-center gap-2 p-4 border-2 text-ellipsis border-gray hover:bg-[#F3F5F8]',
				{
					'border-blue bg-[#F3F5F8]' : isSelected,
					'min-h-[115px]'            : showCategoryTag,
					'min-h-[87px]'             : !showCategoryTag,
				}
			)}
		>
			{showCategoryTag && (
				<Tag
					color='red'
					text='Location, Crédit Bail & Investissement'
				/>
			)}
			<h2 className='text-base text-black'>{title}</h2>
			<p
				className='text-base text-grayText'
				dangerouslySetInnerHTML={sanitazedDescription()}
			></p>
		</div>
	);
};

export default CategoryPreview;
