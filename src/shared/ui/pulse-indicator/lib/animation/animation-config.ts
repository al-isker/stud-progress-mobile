import { Easing, WithTimingConfig } from 'react-native-reanimated';

export const animationDelay = 1000;

export const animationConfig: WithTimingConfig = {
	duration: 1000,
	easing: Easing.out(Easing.quad)
};
