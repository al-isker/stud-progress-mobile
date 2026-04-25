import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';
import { MAX_MARK, formatAverageMark } from '@/entities/subject';
import {
	ProgressChart,
	getProgressAnimationConfig
} from '@/shared/ui/progress-chart';

type RatingBySemesterProps = {
	semester: number;
	averageMark: number | null;
};

export const RatingBySemester = ({
	semester,
	averageMark
}: RatingBySemesterProps) => {
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
		<View style={styles.container}>
			<Text style={styles.semester}>{`${semester} семестр`}</Text>

			<ProgressChart
				diameter={60}
				strokeWidth={8}
				fontSize={16}
				sharedValue={sharedAverageMark}
				maxValue={MAX_MARK}
				showOnZero
				formatValue={formatAverageMark}
			/>
		</View>
	);
};

const styles = StyleSheet.create(theme => ({
	container: {
		alignItems: 'center',
		rowGap: 4
	},
	semester: {
		textAlign: 'center',
		color: theme.colors.blackAlpha(0.7),
		lineHeight: 10,
		fontSize: 10,
		fontFamily: theme.typography.fontFamily.GolosText,
		fontWeight: 500
	}
}));
