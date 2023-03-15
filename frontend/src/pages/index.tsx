import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Navbar from '../components/Navbar';
import { MainLayout } from '../components/UI/Layout';
import { CategoriesProvider } from '../contexts/CategoriesProvider';
import { Categories, SearchSection } from '../modules';

const IndexPage: React.FC<PageProps> = () => {
	return (
		<CategoriesProvider>
			<Navbar />
			<MainLayout>
				<SearchSection />
				<Categories />
			</MainLayout>
		</CategoriesProvider>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Dougs</title>;
