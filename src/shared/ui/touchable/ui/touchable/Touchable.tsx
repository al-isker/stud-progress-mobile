import { forwardRef } from 'react';
import { Platform, View } from 'react-native';
import { TouchableProps } from '../../model/types/touchable-props';
import { TouchableFeedbackAndroid } from '../touchable-feedback-android/TouchableFeedbackAndroid';
import { TouchableFeedbackIOS } from '../touchable-feedback-ios/TouchableFeedbackIOS';

export const Touchable = forwardRef<View, TouchableProps>(function Touchable(
	{
		children,
		touchableFeedbackRef,
		feedbackColor,
		contentContainerStyle,
		onPress,
		onPressIn,
		onPressOut,
		onLongPress,
		onFocus,
		onBlur,
		...viewProps
	},
	forwardedRef
) {
	const touchableFeedbackProps = {
		children,
		feedbackColor,
		contentContainerStyle,
		onPress,
		onPressIn,
		onPressOut,
		onLongPress,
		onFocus,
		onBlur
	};

	return (
		<View ref={forwardedRef} {...viewProps}>
			{Platform.select({
				android: (
					<TouchableFeedbackAndroid
						ref={touchableFeedbackRef}
						{...touchableFeedbackProps}
					/>
				),
				ios: (
					<TouchableFeedbackIOS
						ref={touchableFeedbackRef}
						{...touchableFeedbackProps}
					/>
				)
			})}
		</View>
	);
});
