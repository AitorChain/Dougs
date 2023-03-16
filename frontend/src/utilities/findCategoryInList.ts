import { AdaptedCategory } from '../models/categories.types';

const findCategoryInList = (
	filteredCategories: AdaptedCategory[],
	selectedCategory: AdaptedCategory
) => {
	return filteredCategories?.find((cat) => cat.id === selectedCategory?.id);
};

export default findCategoryInList;
