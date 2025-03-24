import { useRef } from 'react';
import { Easing, useSharedValue, withTiming } from 'react-native-reanimated';
import { useLayout } from '@/shared/lib/react-sugar';

const timingConfig = {
	duration: 150,
	easing: Easing.bezier(0.2, 0, 0, 1)
};

export const useBorderRadiusAnimation = (initialStyles: {
	borderRadius: number;
}) => {
	const [layoutRef, handleLayout] = useLayout();

	const borderRadius = useSharedValue(initialStyles.borderRadius);

	const timeInRef = useRef<number>();
	const animationIn = () => {
		timeInRef.current = performance.now();

		borderRadius.set(withTiming(layoutRef.current!.height / 2, timingConfig));
	};

	const animationOut = () => {
		const timeIn = timeInRef.current;
		const timeOut = performance.now();

		const timeHasPassed = timeOut - timeIn!;
		const animationDuration = timingConfig.duration;

		const initialDelay = 100;

		const animationDelay = initialDelay + animationDuration - timeHasPassed;

		setTimeout(() => {
			borderRadius.set(withTiming(initialStyles.borderRadius, timingConfig));
		}, animationDelay);
	};

	return {
		borderRadius,
		handleLayout,
		animationIn,
		animationOut
	};
};
