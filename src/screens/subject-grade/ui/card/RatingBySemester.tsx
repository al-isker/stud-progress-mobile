import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { MAX_MARK, formatAverageMark } from '@/entities/subject';
import {
	ProgressChart,
	createProgressAnimationConfig
} from '@/shared/ui/progress-chart';

type RatingBySemesterProps = {
	semester: number;
	averageMark: number | null;
};

export const RatingBySemester = ({
	semester,
	averageMark
}: RatingBySemesterProps) => {
	const { styles } = useStyles(stylesheet);

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
		<View style={styles.container}>
			<Text style={styles.semester}>{`${semester} семестр`}</Text>

			<ProgressChart
				diameter={60}
				strokeWidth={7}
				fontSize={17}
				sharedValue={sharedAverageMark}
				maxValue={MAX_MARK}
				showOnZero
				formatValue={formatAverageMark}
			/>
		</View>
	);
};

const stylesheet = createStyleSheet(theme => ({
	container: {
		alignItems: 'center',
		rowGap: 4
	},
	semester: {
		textAlign: 'center',
		color: theme.colors.blackAlpha(0.7),
		lineHeight: 10,
		fontSize: 10,
		fontFamily: theme.typography.fontFamily.GolosTextMedium
	}
}));
