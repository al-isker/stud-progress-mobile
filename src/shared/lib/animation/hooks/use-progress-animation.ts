import {
	Easing,
	useSharedValue,
	withSequence,
	withTiming
} from 'react-native-reanimated';

const firstEasing = Easing.bezier(1, 0.1, 0.5, 1);
const secondEasing = Easing.inOut(Easing.quad);
const thirdEasing = Easing.out(Easing.poly(2));

export const useProgressAnimation = (duration: number) => {
	const progress = useSharedValue(0);

	const firstDuration = duration / 25;
	const secondDuration = (duration - firstDuration) / 25;
	const thirdDuration = duration - secondDuration;

	const animationStart = () => {
		progress.set(
			withSequence(
				withTiming(20, {
					duration: firstDuration,
					easing: firstEasing
				}),
				withTiming(50, {
					duration: secondDuration,
					easing: secondEasing
				}),
				withTiming(90, {
					duration: thirdDuration,
					easing: thirdEasing
				})
			)
		);
	};

	const animationComplete = () => {
		progress.set(100);
	};

	return { progress, animationStart, animationComplete };
};
