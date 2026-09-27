import { Easing, WithTimingConfig } from 'react-native-reanimated';

export const INITIAL_FEEDBACK_OPACITY = 0;
export const ACTIVE_FEEDBACK_OPACITY = 0.8;

export const animationInFeedbackOpacityConfig: WithTimingConfig = {
	duration: 30,
	easing: Easing.inOut(Easing.ease)
};

export const animationOutFeedbackOpacityConfig: WithTimingConfig = {
	duration: 150,
	easing: Easing.inOut(Easing.ease)
};
