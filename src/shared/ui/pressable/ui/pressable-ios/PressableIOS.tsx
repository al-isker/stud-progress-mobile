import { Animated, Pressable, useAnimatedValue } from 'react-native';
import { multiple } from '@/shared/lib/function';
import {
	INITIAL_FEEDBACK_OPACITY,
	animationInFeedbackOpacityConfig,
	animationOutFeedbackOpacityConfig
} from '../../lib/animation/ios-animation-config';
import { PressableProps } from '../../model/types/pressable-props';

export const PressableIOS = ({
	children,
	feedbackColor,
	style,
	onPressIn,
	onPressOut,
	...props
}: PressableProps) => {
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
		<Pressable
			style={[{ overflow: 'hidden' }, style]}
			onPressIn={multiple(handlePressIn, onPressIn)}
			onPressOut={multiple(handlePressOut, onPressOut)}
			{...props}
		>
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
		</Pressable>
	);
};
