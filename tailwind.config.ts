import {
	BORDER_RADIUS,
	COLORS,
	FONT_FAMILY,
	FONT_WEIGHT
} from './src/shared/constants/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {},

		fontFamily: FONT_FAMILY,
		fontWeight: FONT_WEIGHT,
		borderRadius: BORDER_RADIUS,
		colors: COLORS
	},
	plugins: []
};
