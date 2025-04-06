import { Easing, WithTimingConfig } from 'react-native-reanimated';

export const animationTimingConfig: WithTimingConfig = {
	duration: 150,
	easing: Easing.bezier(0, 0, 0.2, 1)
};
