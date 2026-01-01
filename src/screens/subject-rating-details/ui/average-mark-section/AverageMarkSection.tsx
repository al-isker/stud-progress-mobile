import { useEffect } from 'react';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';
import { MAX_MARK, formatAverageMark } from '@/entities/subject';
import { Paper } from '@/shared/ui/paper';
import {
	ProgressChart,
	getProgressAnimationConfig
} from '@/shared/ui/progress-chart';

type AverageMarkSectionProps = {
	averageMark: number | null;
};

export const AverageMarkSection = ({
	averageMark
}: AverageMarkSectionProps) => {
	const sharedAverageMark = useSharedValue(averageMark);

	useEffect(() => {
		if (sharedAverageMark.value !== averageMark) {
			if (averageMark === null) {
				sharedAverageMark.value = null;
			} else {
				sharedAverageMark.value = withTiming(
					averageMark,
					getProgressAnimationConfig(
						sharedAverageMark.value,
						averageMark,
						MAX_MARK
					)
				);
			}
		}
	}, [averageMark]);

	return (
		<Paper contentContainerStyle={styles.paper}>
			<ProgressChart
				diameter={200}
				strokeWidth={22}
				fontSize={38}
				sharedValue={sharedAverageMark}
				maxValue={MAX_MARK}
				showOnZero
				formatValue={formatAverageMark}
			/>
		</Paper>
	);
};

const styles = StyleSheet.create({
	paper: {
		padding: 28,
		alignItems: 'center'
	}
});
