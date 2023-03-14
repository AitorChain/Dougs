/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,jsx,ts,tsx}',
		'./src/components/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			fontSize: {
				sm   : ['12px', '14.4px'],
				base : ['14px', '16.8px'],
				lg   : ['22px', '26.4px'],
				xl   : ['24px', '32px'],
			},
			colors: {
				black     : '#001A25',
				lightGray : '#F1F7FC',
				gray      : '#DCE4ED',
				darkGray  : '#58676D',
				blue      : '#11ABEC',
			},
		},
	},
	plugins: [],
};
