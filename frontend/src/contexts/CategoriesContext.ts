import { createContext, Dispatch, SetStateAction } from 'react';
import {
	AdaptedCategory,
	CategoryGroup,
	GroupedByType,
} from '../models/categories.types';

type CategoriesContextType = {
	categories: AdaptedCategory[] | undefined;
	filteredCategories: AdaptedCategory[] | undefined;
	categoryGroups: CategoryGroup[] | undefined;
	query: string | undefined;
	groupedBy: 'Category' | 'Alphabetic';
	setQuery: Dispatch<SetStateAction<string>>;
	setGroupedBy: Dispatch<React.SetStateAction<GroupedByType>>;
};

export const CategoriesContext = createContext<CategoriesContextType>(
	{} as CategoriesContextType
);
