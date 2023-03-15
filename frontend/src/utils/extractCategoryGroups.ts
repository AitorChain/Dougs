import _ from 'lodash';
import { AdaptedCategory, CategoryGroup } from '../models/categories.types';

const extractCategoryGroups = (categories: AdaptedCategory[]) => {
	const extractedCategoryGroups = _.map(categories, 'group');
	const categoryGroups = _.uniqBy(
		extractedCategoryGroups,
		'id'
	) as CategoryGroup[];

	return categoryGroups;
};

export default extractCategoryGroups;
