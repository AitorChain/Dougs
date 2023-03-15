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
				black          : '#001A25',
				backgroundGray : '#F3F5F8',
				lightGray      : '#F1F7FC',
				gray           : '#DCE4ED',
				grayText       : '#636970',
				darkGray       : '#58676D',
				lightBlue      : '#E0F6FE',
				blue           : '#11ABEC',
				lightRed       : '#FFECE6',
				red            : '#FD755F',
				lightYellow    : '#FFF5BF',
				yellow         : '#FAA11C',
			},
			width: {
				layout: '1195px',
			},
		},
	},
	plugins: [],
};
