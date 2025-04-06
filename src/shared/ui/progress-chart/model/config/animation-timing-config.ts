import { Easing, WithTimingConfig } from 'react-native-reanimated';

export const animationTimingConfig: WithTimingConfig = {
	duration: 1000,
	easing: Easing.out(Easing.poly(3))
};
