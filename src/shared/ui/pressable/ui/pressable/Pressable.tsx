import { forwardRef } from 'react';
import { Platform, View } from 'react-native';
import { PressableProps } from '../../model/types/pressable-props';
import { PressableAndroid } from '../pressable-android/PressableAndroid';
import { PressableIOS } from '../pressable-ios/PressableIOS';

export const Pressable = forwardRef<View, PressableProps>(function Pressable(
	{ feedbackColor, ...props },
	forwardedRef
) {
	return Platform.select({
		android: (
			<PressableAndroid
				ref={forwardedRef}
				feedbackColor={feedbackColor}
				{...props}
			/>
		),
		ios: (
			<PressableIOS
				ref={forwardedRef}
				feedbackColor={feedbackColor}
				{...props}
			/>
		)
	});
});
