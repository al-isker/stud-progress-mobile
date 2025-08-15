import { useEffect } from 'react';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import { MAX_MARK, formatAverageMark } from '@/entities/subject';
import {
	ProgressChart,
	createProgressAnimationConfig
} from '@/shared/ui/progress-chart';

type RatingBySemesterProps = {
	averageMark: number | null;
};

export const RatingBySemester = ({ averageMark }: RatingBySemesterProps) => {
	const sharedAverageMark = useSharedValue(averageMark);

	useEffect(() => {
		if (sharedAverageMark.value !== averageMark) {
			if (averageMark === null) {
				sharedAverageMark.value = null;
			} else {
				sharedAverageMark.value = withTiming(
					averageMark,
					createProgressAnimationConfig(
						sharedAverageMark.value,
						averageMark,
						MAX_MARK
					)
				);
			}
		}
	}, [averageMark]);

	return (
		<ProgressChart
			diameter={65}
			strokeWidth={8}
			fontSize={18}
			sharedValue={sharedAverageMark}
			maxValue={MAX_MARK}
			showOnZero
			formatValue={formatAverageMark}
		/>
	);
};
