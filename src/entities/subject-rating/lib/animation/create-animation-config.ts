import { Easing, WithTimingConfig } from 'react-native-reanimated';
import { MAX_MARK } from '../../model/const/max-mark';

const MAX_DURATION = 2000;

const easing = Easing.out(Easing.poly(3));

export const createAnimationConfig = (
	averageMark: number
): WithTimingConfig => {
	const duration = (averageMark * MAX_DURATION) / MAX_MARK;

	return { duration, easing };
};
