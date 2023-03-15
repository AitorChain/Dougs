import React from 'react';
import { AdaptedCategory } from '../../models/categories.types';
import CategoryPreview from '../CategoryPreview';

interface CategoryListProps {
	categories: AdaptedCategory[];
}

const CategoryList = ({ categories }: CategoryListProps) => {
	return (
		<div className='grid grid-cols-2 gap-px'>
			{categories?.map((c) => (
				<CategoryPreview
					key={c.id}
					category={c}
				/>
			))}
		</div>
	);
};

export default CategoryList;
