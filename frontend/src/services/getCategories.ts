import fetchVisibleCategories from '../services/fetchVisibleCategories';
import fetchAllCategories from '../services/fetchAllCategories';
import extractCategoryGroups from '../utilities/extractCategoryGroups';
import extractVisibleCategories from '../utilities/extractVisibleCategories';
import { AdaptedCategory, VisibleCategory } from '../models/categories.types';

const getCategories = () => {
	const { allCategories, isLoadingCategories } = fetchAllCategories();
	const { visibleCategories } = fetchVisibleCategories();

	const categories = extractVisibleCategories(
		visibleCategories as VisibleCategory[],
		allCategories as AdaptedCategory[]
	);

	const categoryGroups = extractCategoryGroups(categories);

	return { categories, isLoadingCategories, categoryGroups };
};

export default getCategories;
