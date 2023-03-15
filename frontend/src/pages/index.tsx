import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Navbar from '../components/Navbar';
import SearchSection from '../modules/SearchSection';
import { MainLayout } from '../components/UI/Layout';
import CategoryList from '../components/CategoryList';
import getCategories from '../services/getCategories';

const IndexPage: React.FC<PageProps> = () => {
	const { categories, categoryGroups } = getCategories();

	return (
		<>
			<Navbar />
			<MainLayout>
				<SearchSection />
				{categories && <CategoryList categories={categories} />}
			</MainLayout>
		</>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Dougs</title>;
