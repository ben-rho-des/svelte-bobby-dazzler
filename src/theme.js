//something needs to generate config like what's used in;
//.storybook/postcss.config.js

const colors = [
	{ name: 'darkest', value: '#0d151b'},
	{ name: 'darker', value: '#1b2a36'},
	{ name: 'dark', value: '#263346'},
	{ name: 'mid', value: '#2b3a52'},
	{ name: 'light', value: '#3c5169'},
	{ name: 'lighter', value: '#6a798c'},
	{ name: 'lightest', value: '#f7f7f7'},
	{ name: 'brand', value: '#4442bf'},
	{ name: 'primary', value: '#ea681a'},
	{ name: 'action-do', value: '#07987e'},
	{ name: 'action-dont', value: '#b1052c'},
	{ name: 'action-neutral', value: '#6d749f'},
];

const fonts = [
	{ 
		name: 'IBM Plex Sans',
		src: 'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700&display=swap',
		weights: ['400', '700']
	},
];

const units  = {
	'--some-unit': '20px'
}

const theme = {
	colors: [
		...colors,
	],
	fonts: [
		...fonts
	],
	...units
}

export default theme;
