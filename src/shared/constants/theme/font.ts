import * as Fonts from '@/shared/assets/fonts';

type fontFamily = Record<string, keyof typeof Fonts>;

export const FONT_FAMILY = {
	'golos-regular': 'GolosTextRegular',
	'golos-medium': 'GolosTextMedium',
	'golos-semiBold': 'GolosTextSemiBold',
	'golos-bold': 'GolosTextBold',
	'golos-extraBold': 'GolosTextExtraBold',
	'golos-black': 'GolosTextBlack'
} satisfies fontFamily;

export const FONT_WEIGHT = {};
