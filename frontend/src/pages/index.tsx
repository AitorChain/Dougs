import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { AlphabeticOrderIcon, ThreeBoxesIcon } from '../images/icons';
import { ActionButton, SelectButton } from '../components/UI/Buttons';
import Tag from '../components/UI/Tag';
import CategoryPreview from '../components/CategoryPreview';

const IndexPage: React.FC<PageProps> = () => {
	return (
		<main className='w-100 h-100 flexCenter flex-col gap-4 m-10'>
			<SelectButton
				text={'Groupe de catégorie'}
				icon={<ThreeBoxesIcon />}
			/>
			<SelectButton
				text={'Ordre alphabétique'}
				icon={<AlphabeticOrderIcon />}
			/>
			<ActionButton
				text={'Sélectionner la catégorie'}
				variant='primary'
			/>
			<Tag
				color='blue'
				text='Produit des activités annexes'
			/>
			<Tag
				color='red'
				text='Location, Crédit Bail & Investissement'
			/>
			<Tag
				color='yellow'
				text='Opérations diverses'
			/>
			<CategoryPreview
				title='Construction ou acquisition de bâtiment (Avec TVA)'
				description='Aménagements ou agencements du local, tels que : travaux de second oeuvre, peinture, plomberie, électricité.'
			/>
			<CategoryPreview
				title='Construction ou acquisition de bâtiment (Avec TVA)'
				description='Carburant pour votre <em>véhicule professionnel</em> ou <em>véhicule de location</em>. Attention, vous ne pouvez pas payer le carburant pour un véhicule personnel, dans ce cas, utilisez la catégorie «&nbsp;Retrait ou dépense pour usage personnel&nbsp;».'
				showCategoryTag
			/>
		</main>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Dougs</title>;
