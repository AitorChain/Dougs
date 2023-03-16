import { createContext, Dispatch } from 'react';
import { AdaptedCategory } from '../models/categories.types';

type SelectionContextType = {
	selectedCategory: AdaptedCategory | null;
	setSelectedCategory: Dispatch<React.SetStateAction<AdaptedCategory | null>>;
};

export const SelectionContext = createContext<SelectionContextType>(
	{} as SelectionContextType
);
