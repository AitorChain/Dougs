import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import SelectButton from '../components/UI/Buttons/SelectButton';
import { AlphabeticOrderIcon, ThreeBoxesIcon } from '../images/icons';

const IndexPage: React.FC<PageProps> = () => {
	return (
		<main className='w-100 h-100 flexCenter m-10'>
			<SelectButton
				text={'Groupe de catégorie'}
				icon={<ThreeBoxesIcon />}
			/>
			<SelectButton
				text={'Ordre alphabétique'}
				icon={<AlphabeticOrderIcon />}
			/>
		</main>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Dougs</title>;
