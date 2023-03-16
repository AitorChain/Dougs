import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { CategoriesProvider } from '../contexts/CategoriesProvider';
import { SelectionProvider } from '../contexts/SelectionProvider';
import { SearchCategories } from '../modules/SearchCategories';

const IndexPage: React.FC<PageProps> = () => {
	return (
		<CategoriesProvider>
			<SelectionProvider>
				<SearchCategories />
			</SelectionProvider>
		</CategoriesProvider>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Dougs</title>;
