import { BORDER_RADIUS } from './tokens/border-radius';
import { DARK_COLORS } from './tokens/colors';
import { DIMENSIONS } from './tokens/dimensions';
import { FONT_FAMILY } from './tokens/font-family';
import { SPACING } from './tokens/spacing';
import { Z_INDEX } from './tokens/z-index';

export const darkTheme = {
	borderRadius: BORDER_RADIUS,
	colors: DARK_COLORS,
	dimensions: DIMENSIONS,
	spacing: SPACING,
	typography: {
		fontFamily: FONT_FAMILY
	},
	zIndex: Z_INDEX
} as const;
