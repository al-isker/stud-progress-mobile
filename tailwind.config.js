import { BORDER_RADIUS, COLORS } from './src/shared/constants/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {},

		borderRadius: BORDER_RADIUS,
		colors: COLORS
	},
	plugins: []
};
