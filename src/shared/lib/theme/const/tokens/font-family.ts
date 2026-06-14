import { Platform } from 'react-native';

export const FONT_FAMILIES = {
	GolosTextRegular: Platform.select({
		android: 'GolosText_400Regular',
		ios: 'GolosText-Regular'
	})!,
	GolosTextMedium: Platform.select({
		android: 'GolosText_500Medium',
		ios: 'GolosText-Medium'
	})!,
	GolosTextSemiBold: Platform.select({
		android: 'GolosText_600SemiBold',
		ios: 'GolosText-SemiBold'
	})!,
	GolosTextBold: Platform.select({
		android: 'GolosText_700Bold',
		ios: 'GolosText-Bold'
	})!
} as const;
