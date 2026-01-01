import { WithTimingConfig } from 'react-native-reanimated';
import { getAnimationDurationByValues } from '@/shared/lib/animation';
import { easing } from './easing';
import { MAX_DURATION } from './max-duration';

export const getProgressAnimationConfig = (
	currentValue: number | null,
	newValue: number | null,
	maxValue: number
): WithTimingConfig => {
	const duration = getAnimationDurationByValues(
		MAX_DURATION,
		currentValue ?? 0,
		newValue ?? 0,
		maxValue
	);

	return { duration, easing };
};
