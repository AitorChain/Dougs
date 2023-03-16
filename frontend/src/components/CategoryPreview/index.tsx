import React, { useContext } from 'react';
import classNames from 'classnames';
import Tag from '../UI/Tag';
import DOMPurify from 'dompurify';
import { AdaptedCategory } from '../../models/categories.types';
import { SelectionContext } from '../../contexts/SelectionContext';

interface CategoryPreviewProps {
	category: AdaptedCategory;
	showCategoryTag?: boolean;
}

const CategoryPreview = ({
	category,
	showCategoryTag = true,
}: CategoryPreviewProps) => {
	const { selectedCategory, setSelectedCategory } = useContext(SelectionContext);

	const isSelected = selectedCategory === category;

	const sanitazedDescription = () => ({
		__html: DOMPurify.sanitize(category.description as string),
	});

	return (
		<div
			className={classNames(
				'flex flex-col justify-center gap-2 p-4 text-ellipsis cursor-pointer hover:bg-[#F3F5F8] ',
				{
					'border-blue bg-[#F3F5F8] border' : isSelected,
					'gridBorders bg-white '           : !isSelected,
					'min-h-[115px]'                   : showCategoryTag,
					'min-h-[87px]'                    : !showCategoryTag,
				}
			)}
			onClick={() => setSelectedCategory(category)}
		>
			{showCategoryTag && category.group && (
				<Tag
					color={category.group?.color}
					text={category.group?.name}
				/>
			)}
			<h2 className='text-base text-black'>{category.title}</h2>
			{category.description && (
				<p
					className='text-base text-grayText'
					dangerouslySetInnerHTML={sanitazedDescription()}
				></p>
			)}
		</div>
	);
};

export default CategoryPreview;
