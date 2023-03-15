import _ from 'lodash';
import fetchVisibleCategories from '../services/fetchVisibleCategories';
import fetchAllCategories from '../services/fetchAllCategories';

const getCategories = () => {
	const { allCategories } = fetchAllCategories();
	const { visibleCategories } = fetchVisibleCategories();
	//Here i build an array with the ids of the visible categories
	const arrayOfVisibleCategories = visibleCategories?.flatMap((i) => i.id);
	//Now we can build a new array of objects by filtering those categories that matchs with the visible categories
	const categories = allCategories?.filter((cat) =>
		arrayOfVisibleCategories?.includes(cat.id)
	);

	const extractCategoryGroups = _.map(categories, 'group');
	const categoryGroups = _.uniqBy(extractCategoryGroups, 'id');

	return { categories, categoryGroups };
};

export default getCategories;
