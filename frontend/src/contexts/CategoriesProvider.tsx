import React, { ReactNode } from 'react';
import useCategories from '../hooks/useCategories';
import getCategories from '../services/getCategories';
import { CategoriesContext } from './CategoriesContext';

export const CategoriesProvider = ({ children }: { children: ReactNode }) => {
	const { categories, categoryGroups, isLoadingCategories } = getCategories();

	const { filteredCategories, query, groupedBy, setQuery, setGroupedBy } =
		useCategories(categories, categoryGroups, isLoadingCategories);

	return (
		<CategoriesContext.Provider
			value={{
				categories,
				filteredCategories,
				categoryGroups,
				query,
				groupedBy,
				setQuery,
				setGroupedBy,
			}}
		>
			{children}
		</CategoriesContext.Provider>
	);
};
