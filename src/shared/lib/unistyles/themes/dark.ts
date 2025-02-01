import { BORDER_RADIUS } from '../tokens/border-radius';
import { DARK_COLORS } from '../tokens/colors';
import { FONT_FAMILY } from '../tokens/font-family';
import { FONT_SIZE } from '../tokens/font-size';
import { Z_INDEX } from '../tokens/z-index';

export const darkTheme = {
	borderRadius: BORDER_RADIUS,
	colors: DARK_COLORS,
	typography: {
		fontFamily: FONT_FAMILY,
		fontSize: FONT_SIZE
	},
	zIndex: Z_INDEX
} as const;
