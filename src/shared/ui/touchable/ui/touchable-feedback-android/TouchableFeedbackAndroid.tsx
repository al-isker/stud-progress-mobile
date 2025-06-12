import { forwardRef } from 'react';
import { TouchableNativeFeedback, View } from 'react-native';
import { TouchableFeedbackProps } from '../../model/types/touchable-props';

export const TouchableFeedbackAndroid = forwardRef<
	TouchableNativeFeedback,
	TouchableFeedbackProps
>(function TouchableFeedbackAndroid(
	{
		children,
		feedbackColor,
		contentContainerStyle,
		onPress,
		onPressIn,
		onPressOut,
		onLongPress,
		onFocus,
		onBlur
	},
	forwardedRef
) {
	return (
		<TouchableNativeFeedback
			ref={forwardedRef}
			background={TouchableNativeFeedback.Ripple(feedbackColor, false)}
			onPress={onPress}
			onPressIn={onPressIn}
			onPressOut={onPressOut}
			onLongPress={onLongPress}
			onFocus={onFocus}
			onBlur={onBlur}
		>
			<View style={contentContainerStyle}>{children}</View>
		</TouchableNativeFeedback>
	);
});
