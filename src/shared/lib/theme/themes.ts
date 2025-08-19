import { BORDER_RADIUS } from './tokens/border-radius';
import { LIGHT_COLORS } from './tokens/colors';
import { DIMENSIONS } from './tokens/dimensions';
import { FONT_FAMILY } from './tokens/font-family';
import { SPACING } from './tokens/spacing';

const BASE_THEME = {
	borderRadius: BORDER_RADIUS,
	dimensions: DIMENSIONS,
	spacing: SPACING,
	typography: {
		fontFamily: FONT_FAMILY
	}
};

export const LIGHT_THEME = {
	...BASE_THEME,
	colors: LIGHT_COLORS
};
