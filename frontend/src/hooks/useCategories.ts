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
	const [selectedGroup, setSelectedGroup] = useState<CategoryGroup | null>(null);

	const filterCategoriesByQuery = () =>
		categories?.filter((cat) =>
			cat.title?.toLowerCase().includes(query.toLowerCase())
		);

	const filterCategoriesByQueryAndGroup = () =>
		categories?.filter(
			(cat) =>
				cat.title?.toLowerCase().includes(query.toLowerCase()) &&
				cat?.group?.id === selectedGroup?.id
		);

	const filterCategoriesByGroup = () =>
		categories?.filter((cat) => cat?.group?.id === selectedGroup?.id);

	useEffect(() => {
		setFilteredCategories(sortByAlphabet(categories));
	}, [isLoadingCategories]);

	useEffect(() => {
		let newFilteredCategories;

		if (selectedGroup === null && query.trim() === '') {
			newFilteredCategories = categories;
		}

		if (selectedGroup === null && query.trim() !== '') {
			newFilteredCategories = filterCategoriesByQuery();
		}

		if (selectedGroup !== null && query.trim() !== '') {
			newFilteredCategories = filterCategoriesByQueryAndGroup();
		}

		if (selectedGroup !== null && query.trim() === '') {
			newFilteredCategories = filterCategoriesByGroup();
		}

		const sortedCategories = sortByAlphabet(
			newFilteredCategories as AdaptedCategory[]
		);

		setFilteredCategories(sortedCategories);
	}, [selectedGroup]);

	useEffect(() => {
		let newFilteredCategories;

		if (selectedGroup === null) {
			newFilteredCategories = filterCategoriesByQuery();
		}

		if (selectedGroup !== null) {
			newFilteredCategories = filterCategoriesByQueryAndGroup();
		}

		const sortedCategories = sortByAlphabet(
			newFilteredCategories as AdaptedCategory[]
		);

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
