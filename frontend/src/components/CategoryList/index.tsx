import React, { useContext } from 'react';
import classNames from 'classnames';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import CategoryPreview from '../CategoryPreview';
import { ORD_ALPHABETIC } from '../../hooks/useCategories';
import { AdaptedCategory, CategoryGroup } from '../../models/categories.types';

interface CategoryListProps {
	categories: AdaptedCategory[];
	group?: CategoryGroup;
}

const CategoryList = ({ categories, group }: CategoryListProps) => {
	const { groupedBy } = useContext(CategoriesContext);

	return (
		<div
			className={classNames({
				'mt-[1px]': groupedBy === ORD_ALPHABETIC,
			})}
		>
			{group && (
				<div
					className={classNames('w-full pl-4 py-1', {
						'bg-lightGray text-blue'     : group.color === 'blue',
						'bg-lightRed text-red'       : group.color === 'red',
						'bg-lightYellow text-yellow' : group.color === 'purple',
						'bg-green-100 text-black'    : group.color === 'green',
						'bg-pink-100 text-black'     : group.color === 'pink',
						'bg-orange-100 text-black'   : !group.color,
					})}
				>
					<p className='text-sm leading-4'>{group?.name}</p>
				</div>
			)}

			<div className='grid grid-cols-2 bg-white'>
				{categories?.map((c) => (
					<CategoryPreview
						key={c.id}
						category={c}
						showCategoryTag={groupedBy === ORD_ALPHABETIC}
					/>
				))}
			</div>
		</div>
	);
};

export default CategoryList;
