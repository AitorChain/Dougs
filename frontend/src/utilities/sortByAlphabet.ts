import { orderBy } from 'lodash';
import { AdaptedCategory } from '../models/categories.types';

const sortByAlphabet = (categories: AdaptedCategory[]) => {
	return orderBy(categories, [(cat) => cat.title?.toLowerCase()], ['asc']);
};

export default sortByAlphabet;
