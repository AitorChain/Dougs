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
	const [groupedBy, setGroupedBy] = useState<GroupedByType>(ORD_CATEGORY);
	const [selectedGroup, setSelectedGroup] = useState<CategoryGroup | null>(null);

	useEffect(() => {
		const sortedCategories = sortByAlphabet(categories);

		setFilteredCategories(sortedCategories);
	}, [isLoadingCategories]);

	useEffect(() => {
		let newFilteredCategories;

		if (selectedGroup === null && query.trim() === '') {
			newFilteredCategories = categories;
		}

		if (selectedGroup === null && query.trim() !== '') {
			newFilteredCategories = categories?.filter((cat) =>
				cat.title?.toLowerCase().includes(query.toLowerCase())
			);
		}

		if (selectedGroup !== null) {
			if (query.trim() !== '') {
				newFilteredCategories = categories?.filter(
					(cat) =>
						cat.title?.toLowerCase().includes(query.toLowerCase()) &&
						cat?.group?.id === selectedGroup?.id
				);
			} else {
				newFilteredCategories = categories?.filter(
					(cat) => cat?.group?.id === selectedGroup?.id
				);
			}
		}

		const sortedCategories = sortByAlphabet(
			newFilteredCategories as AdaptedCategory[]
		);

		setFilteredCategories(sortedCategories);
	}, [selectedGroup]);

	useEffect(() => {
		let newFilteredCategories;

		if (selectedGroup === null) {
			newFilteredCategories = categories?.filter((cat) =>
				cat.title?.toLowerCase().includes(query.toLowerCase())
			);
		} else {
			newFilteredCategories = categories?.filter(
				(cat) =>
					cat.title?.toLowerCase().includes(query.toLowerCase()) &&
					cat?.group?.id === selectedGroup?.id
			);
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
