import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { AlphabeticOrderIcon, ThreeBoxesIcon } from '../images/icons';
import { ActionButton, SelectButton } from '../components/UI/Buttons';
import Tag from '../components/UI/Tag';
import CategoryPreview from '../components/CategoryPreview';
import SearchBox from '../components/SearchBox';

const IndexPage: React.FC<PageProps> = () => {
	return (
		<main className='w-100 h-100 flexCenter flex-col gap-4 m-10'>
			<SearchBox />
		</main>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Dougs</title>;
