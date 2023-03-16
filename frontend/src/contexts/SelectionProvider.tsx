import React, { ReactNode } from 'react';
import useSelection from '../hooks/useSelection';
import { SelectionContext } from './SelectionContext';

export const SelectionProvider = ({ children }: { children: ReactNode }) => {
	const { selectedCategory, setSelectedCategory } = useSelection();

	return (
		<SelectionContext.Provider value={{ selectedCategory, setSelectedCategory }}>
			{children}
		</SelectionContext.Provider>
	);
};
