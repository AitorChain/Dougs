import fetchVisibleCategories from '../services/fetchVisibleCategories';
import fetchAllCategories from '../services/fetchAllCategories';
import extractCategoryGroups from '../utils/extractCategoryGroups';
import extractVisibleCategories from '../utils/extractVisibleCategories';
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
