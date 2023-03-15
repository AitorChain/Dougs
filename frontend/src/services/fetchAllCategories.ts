import { useEffect, useState } from 'react';
import { createCategoryAdapter } from '../adapters/category.adapter';
import { AdaptedCategory, Category } from '../models/categories.types';
import { categoriesApi } from './categories.api';

const fetchAllCategories = () => {
	const [categories, setCategories] = useState<AdaptedCategory[] | null>(null);
	const [isLoadingCategories, setIsLoadingCategories] = useState(true);

	const getCategories = () => {
		categoriesApi
			.get('/all-categories')
			.then((response) => {
				if (response.status === 200) {
					const adaptedCategories = response.data.map((cat: Category) =>
						createCategoryAdapter(cat)
					);
					setCategories(adaptedCategories);
				}
			})
			.catch((err) => console.log(err))
			.finally(() => setIsLoadingCategories(false));
	};

	useEffect(() => {
		getCategories();
	}, []);

	return { allCategories: categories, isLoadingCategories };
};

export default fetchAllCategories;
