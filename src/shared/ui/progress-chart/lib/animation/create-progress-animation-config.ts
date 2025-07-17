import { WithTimingConfig } from 'react-native-reanimated';
import { createAnimationDuration } from '@/shared/lib/animation';
import { easing } from './easing';
import { MAX_DURATION } from './max-duration';

export const createProgressAnimationConfig = (
	currentValue: number | null,
	newValue: number | null,
	maxValue: number
): WithTimingConfig => {
	const duration = createAnimationDuration(
		MAX_DURATION,
		currentValue ?? 0,
		newValue ?? 0,
		maxValue
	);

	return { duration, easing };
};
