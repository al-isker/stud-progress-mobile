import { BORDER_RADIUS } from './tokens/border-radius';
import { LIGHT_COLORS } from './tokens/colors';
import { FONT_FAMILIES } from './tokens/font-family';
import { SPACING } from './tokens/spacing';
import { Z_INDEX } from './tokens/z-index';

const BASE_THEME = {
	borderRadius: BORDER_RADIUS,
	spacing: SPACING,
	typography: {
		fontFamilies: FONT_FAMILIES
	},
	zIndex: Z_INDEX
};

export const LIGHT_THEME = {
	...BASE_THEME,
	colors: LIGHT_COLORS
};
