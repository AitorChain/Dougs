import React, { useContext } from 'react';
import Navbar from '../../components/Navbar';
import { MainLayout } from '../../components/UI/Layout';
import Toast from '../../components/UI/Toast';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import { SelectionContext } from '../../contexts/SelectionContext';
import { AdaptedCategory } from '../../models/categories.types';
import findCategoryInList from '../../utilities/findCategoryInList';
import Categories from '../Categories';
import SearchSection from '../SearchSection';

export const SearchCategories = () => {
	const { selectedCategory } = useContext(SelectionContext);
	const { filteredCategories } = useContext(CategoriesContext);

	const isSelectedCategoryInCurrentList = findCategoryInList(
		filteredCategories as AdaptedCategory[],
		selectedCategory as AdaptedCategory
	);

	return (
		<>
			<Navbar />
			<MainLayout>
				<SearchSection />
				<Categories />
			</MainLayout>
			{isSelectedCategoryInCurrentList && <Toast />}
		</>
	);
};
