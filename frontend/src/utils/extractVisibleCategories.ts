import { AdaptedCategory, VisibleCategory } from '../models/categories.types';

const extractVisibleCategories = (
	visibleCategories: VisibleCategory[],
	allCategories: AdaptedCategory[]
) => {
	//Here i build an array with the ids of the visible categories
	const arrayOfVisibleCategories = visibleCategories?.flatMap(
		(i: VisibleCategory) => i.id
	);
	//Now we can build a new array of objects by filtering those categories that matchs with the visible categories
	const categories = allCategories?.filter((cat: AdaptedCategory) =>
		arrayOfVisibleCategories?.includes(cat.id)
	) as AdaptedCategory[];

	return categories;
};

export default extractVisibleCategories;
