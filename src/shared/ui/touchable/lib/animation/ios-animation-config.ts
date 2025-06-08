import { Animated } from 'react-native';

export const INITIAL_FEEDBACK_OPACITY = 0;
export const ACTIVE_FEEDBACK_OPACITY = 0.8;

export const animationInFeedbackOpacityConfig: Animated.TimingAnimationConfig =
	{
		toValue: ACTIVE_FEEDBACK_OPACITY,
		duration: 30,
		useNativeDriver: true
	};

export const animationOutFeedbackOpacityConfig: Animated.TimingAnimationConfig =
	{
		toValue: INITIAL_FEEDBACK_OPACITY,
		duration: 150,
		useNativeDriver: true
	};
