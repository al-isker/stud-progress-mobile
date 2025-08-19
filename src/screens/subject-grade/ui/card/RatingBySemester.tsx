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
	semester?: number;
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
			{semester && <Text style={styles.semester}>{semester}</Text>}

			<ProgressChart
				style={{ marginLeft: 0 }}
				diameter={65}
				strokeWidth={8}
				fontSize={18}
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
		position: 'relative'
	},
	semester: {
		position: 'absolute',
		top: 0,
		left: 0,
		color: theme.colors.blackAlpha(0.75),
		lineHeight: 10,
		fontSize: 10,
		fontFamily: theme.typography.fontFamily.GolosTextMedium
	}
}));
