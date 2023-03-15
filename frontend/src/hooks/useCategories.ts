import { useEffect, useState } from 'react';
import {
	AdaptedCategory,
	CategoryGroup,
	GroupedByType,
} from '../models/categories.types';
import sortByAlphabet from '../utilities/sortByAlphabet';

export const ORD_CATEGORY = 'Category';
export const ORD_ALPHABETIC = 'Alphabetic';

const useCategories = (
	categories: AdaptedCategory[],
	categoryGroups: CategoryGroup[],
	isLoadingCategories: boolean
) => {
	const [filteredCategories, setFilteredCategories] = useState<
		AdaptedCategory[] | undefined
	>(categories);
	const [query, setQuery] = useState<string>('');
	const [groupedBy, setGroupedBy] = useState<GroupedByType>(ORD_ALPHABETIC);
	const [selectedGroup, setSelectedGroup] = useState(null);

	useEffect(() => {
		if (groupedBy === ORD_ALPHABETIC) {
			const sortedCategories = sortByAlphabet(categories);

			setFilteredCategories(sortedCategories);
		}
	}, [isLoadingCategories]);

	useEffect(() => {
		if (groupedBy === ORD_ALPHABETIC) {
			const sortedCategories = sortByAlphabet(
				filteredCategories as AdaptedCategory[]
			);

			setFilteredCategories(sortedCategories);
		}
	}, [groupedBy, query]);

	useEffect(() => {
		const filteredCategoriesByQuery = categories?.filter((cat) =>
			cat.title?.toLowerCase().includes(query.toLowerCase())
		);

		const sortedCategories = sortByAlphabet(filteredCategoriesByQuery);

		setFilteredCategories(sortedCategories);
	}, [query]);

	return {
		categories,
		filteredCategories,
		categoryGroups,
		query,
		groupedBy,
		selectedGroup,
		setSelectedGroup,
		setQuery,
		setGroupedBy,
	};
};

export default useCategories;
