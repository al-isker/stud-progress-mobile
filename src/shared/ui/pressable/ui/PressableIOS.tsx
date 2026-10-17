import { Pressable } from 'react-native';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';
import { callAll } from '@/shared/lib/ts-toolkit';
import {
	ACTIVE_FEEDBACK_OPACITY,
	INITIAL_FEEDBACK_OPACITY,
	animationInFeedbackOpacityConfig,
	animationOutFeedbackOpacityConfig
} from '../lib/animation/ios-animation-config';
import { PressableProps } from '../types/pressable-props';

export const PressableIOS = ({
	children,
	feedbackColor,
	style,
	onPressIn,
	onPressOut,
	...props
}: PressableProps) => {
	const animatedFeedbackOpacity = useSharedValue(INITIAL_FEEDBACK_OPACITY);

	const handlePressIn = () => {
		animatedFeedbackOpacity.set(
			withTiming(ACTIVE_FEEDBACK_OPACITY, animationInFeedbackOpacityConfig)
		);
	};

	const handlePressOut = () => {
		animatedFeedbackOpacity.set(
			withTiming(INITIAL_FEEDBACK_OPACITY, animationOutFeedbackOpacityConfig)
		);
	};

	return (
		<Pressable
			style={[{ overflow: 'hidden' }, style]}
			onPressIn={callAll(handlePressIn, onPressIn)}
			onPressOut={callAll(handlePressOut, onPressOut)}
			{...props}
		>
			{children}

			<Animated.View
				pointerEvents='none'
				style={{
					position: 'absolute',
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
