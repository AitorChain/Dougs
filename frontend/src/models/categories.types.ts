export type Category = {
	id: number;
	group?: CategoryGroup;
	wording: string | undefined;
	description: string | undefined;
};

export type VisibleCategory = {
	id: number;
};

export type AdaptedCategory = {
	id: number;
	group?: CategoryGroup;
	title: string | undefined;
	description: string | undefined;
};

export type CategoryGroup = {
	id: number;
	name: string;
	color: string;
};

export type GroupedByType = 'Alphabetic' | 'Category';
