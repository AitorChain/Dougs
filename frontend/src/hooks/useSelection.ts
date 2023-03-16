import { useState } from 'react';
import { AdaptedCategory } from '../models/categories.types';

const useSelection = () => {
	const [selectedCategory, setSelectedCategory] =
		useState<AdaptedCategory | null>(null);

	return { selectedCategory, setSelectedCategory };
};

export default useSelection;
