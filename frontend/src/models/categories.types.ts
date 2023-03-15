export type Category = {
	id: number;
	group?: {
		id: number;
		name: string;
		color: string;
	};
	wording: string | undefined;
	description: string | undefined;
};

export type VisibleCategory = {
	id: number;
};

export type AdaptedCategory = {
	id: number;
	group?: {
		id: number;
		name: string;
		color: string;
	};
	title: string | undefined;
	description: string | undefined;
};
