import React, { forwardRef } from 'react';
import {
	Animated,
	TouchableWithoutFeedback,
	View,
	useAnimatedValue
} from 'react-native';
import { multiple } from '@/shared/lib/function';
import {
	INITIAL_FEEDBACK_OPACITY,
	animationInFeedbackOpacityConfig,
	animationOutFeedbackOpacityConfig
} from '../../lib/animation/ios-animation-config';
import { TouchableFeedbackProps } from '../../model/types/touchable-props';

export const TouchableFeedbackIOS = forwardRef<
	TouchableWithoutFeedback,
	TouchableFeedbackProps
>(function TouchableFeedbackIOS(
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
	ref
) {
	const animatedFeedbackOpacity = useAnimatedValue(INITIAL_FEEDBACK_OPACITY);

	const handlePressIn = () => {
		Animated.timing(
			animatedFeedbackOpacity,
			animationInFeedbackOpacityConfig
		).start();
	};

	const handlePressOut = () => {
		Animated.timing(
			animatedFeedbackOpacity,
			animationOutFeedbackOpacityConfig
		).start();
	};

	return (
		<TouchableWithoutFeedback
			ref={ref}
			onPress={onPress}
			onPressIn={multiple(handlePressIn, onPressIn)}
			onPressOut={multiple(handlePressOut, onPressOut)}
			onLongPress={onLongPress}
			onFocus={onFocus}
			onBlur={onBlur}
		>
			<View style={contentContainerStyle}>
				{children}

				<Animated.View
					style={{
						position: 'absolute',
						zIndex: -1000,
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
						opacity: animatedFeedbackOpacity,
						backgroundColor: feedbackColor
					}}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
});
