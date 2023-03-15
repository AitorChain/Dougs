import React, { useContext } from 'react';
import _ from 'lodash';
import CategoryList from '../../components/CategoryList';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import { ORD_ALPHABETIC } from '../../hooks/useCategories';
import { AdaptedCategory } from '../../models/categories.types';

const Categories = () => {
	const { filteredCategories, categoryGroups, groupedBy } =
		useContext(CategoriesContext);

	if (groupedBy === ORD_ALPHABETIC) {
		return <CategoryList categories={filteredCategories as AdaptedCategory[]} />;
	}

	return (
		<>
			{categoryGroups?.map((group) => {
				const categoriesByThisGroup = filteredCategories?.filter(
					(category) => category.group?.id === group.id
				);

				if (categoriesByThisGroup!.length === 0) {
					return;
				}

				return (
					<CategoryList
						key={group.id}
						group={group}
						categories={categoriesByThisGroup as AdaptedCategory[]}
					/>
				);
			})}
		</>
	);
};

export default Categories;
