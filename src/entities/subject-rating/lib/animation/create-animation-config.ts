import { Easing, WithTimingConfig } from 'react-native-reanimated';
import { MAX_MARK } from '../../model/const/max-mark';

const MAX_DURATION = 2000;

const easing = Easing.bezier(0.4, 0, 0.1, 1);

export const createAnimationConfig = (
	currentAverageMark: number,
	newAverageMark: number
): WithTimingConfig => {
	const differenceMarks = Math.abs(newAverageMark - currentAverageMark);

	const duration = (differenceMarks / MAX_MARK) * MAX_DURATION;

	return { duration, easing };
};
