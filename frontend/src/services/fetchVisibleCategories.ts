import { useEffect, useState } from 'react';
import { VisibleCategory } from '../models/categories.types';
import { categoriesApi } from './categories.api';

const fetchVisibleCategories = () => {
	const [visibleCategories, setVisibleCategories] = useState<
		VisibleCategory[] | null
	>(null);

	const getCategories = () => {
		categoriesApi
			.get('/visible-categories')
			.then((response) => {
				if (response.status === 200) {
					setVisibleCategories(response.data);
				}
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getCategories();
	}, []);

	return { visibleCategories };
};

export default fetchVisibleCategories;
