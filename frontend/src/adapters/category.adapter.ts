import { AdaptedCategory, Category } from '../models/categories.types';

export const createCategoryAdapter = (category: Category): AdaptedCategory => {
	if (category.group) {
		return {
			id    : category.id,
			group : {
				id    : category.group.id,
				name  : category.group.name,
				color : category.group.color?.split('-')[1],
			},
			title       : category.wording,
			description : category.description,
		};
	} else {
		return {
			id          : category.id,
			title       : category.wording,
			description : category.description,
		};
	}
};
