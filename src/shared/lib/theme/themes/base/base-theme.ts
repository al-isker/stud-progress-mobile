import { FONT_FAMILY, FONT_STYLE, FONT_WEIGHT } from '@/shared/config/fonts';
import { BORDER_RADIUS } from '../../tokens/border-radius/border-radius';
import { SPACING } from '../../tokens/spacing/spacing';
import { Z_INDEX } from '../../tokens/z-index/z-index';

export const BASE_THEME = {
	borderRadius: BORDER_RADIUS,
	spacing: SPACING,
	typography: {
		fontFamily: FONT_FAMILY,
		fontWeight: FONT_WEIGHT,
		fontStyle: FONT_STYLE
	},
	zIndex: Z_INDEX
} as const;
