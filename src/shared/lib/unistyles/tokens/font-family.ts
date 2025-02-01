import * as Fonts from '@/shared/assets/fonts';

type fontFamily = Record<keyof typeof Fonts, keyof typeof Fonts>;

export const FONT_FAMILY = {
	GolosTextRegular: 'GolosTextRegular',
	GolosTextMedium: 'GolosTextMedium',
	GolosTextSemiBold: 'GolosTextSemiBold',
	GolosTextBold: 'GolosTextBold',
	GolosTextExtraBold: 'GolosTextExtraBold',
	GolosTextBlack: 'GolosTextBlack'
} satisfies fontFamily;
