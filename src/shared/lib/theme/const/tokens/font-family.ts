import * as Fonts from '@/shared/assets/fonts';

type FontFamilyType = Record<keyof typeof Fonts, keyof typeof Fonts>;

export const FONT_FAMILY = {
	GolosTextRegular: 'GolosTextRegular',
	GolosTextMedium: 'GolosTextMedium',
	GolosTextSemiBold: 'GolosTextSemiBold',
	GolosTextBold: 'GolosTextBold'
} satisfies FontFamilyType;
