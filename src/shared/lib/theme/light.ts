import { BORDER_RADIUS } from './tokens/border-radius';
import { LIGHT_COLORS } from './tokens/colors';
import { FONT_FAMILY } from './tokens/font-family';
import { SPACING } from './tokens/spacing';
import { Z_INDEX } from './tokens/z-index';

export const lightTheme = {
	borderRadius: BORDER_RADIUS,
	colors: LIGHT_COLORS,
	spacing: SPACING,
	typography: {
		fontFamily: FONT_FAMILY
	},
	zIndex: Z_INDEX
} as const;
