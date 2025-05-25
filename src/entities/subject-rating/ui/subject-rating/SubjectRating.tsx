import { forwardRef, useImperativeHandle } from 'react';
import { Dimensions, View } from 'react-native';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Paper } from '@/shared/ui/paper';
import { ProgressChart } from '@/shared/ui/progress-chart';
import { Tag } from '@/shared/ui/tag';
import { Typography } from '@/shared/ui/typography';
import { createAnimationTimingConfig } from '../../lib/animation/create-animation-timing-config';
import { CONTROL_TYPE_DISPLAY } from '../../lib/const/control-type-display';
import { formatAverageMark } from '../../lib/format/format-average-mark';
import { MAX_MARK } from '../../model/const/max-mark';
import { ISubjectRating } from '../../model/types/subject-rating';
import { EventList } from './EventList';

export type SubjectRatingRef = {
	focus: () => void;
};

type SubjectRatingProps = Pick<
	ISubjectRating,
	'name' | 'controlType' | 'ratingByCurrentSemester'
>;

export const SubjectRating = forwardRef<SubjectRatingRef, SubjectRatingProps>(
	function SubjectRating({ name, controlType, ratingByCurrentSemester }, ref) {
		const { styles } = useStyles(stylesheet);

		const windowWidth = Dimensions.get('window').width;

		const { averageMark, eventList } = ratingByCurrentSemester;

		const sharedAverageMark = useSharedValue(averageMark === null ? null : 0);

		const handleFocus = () => {
			if (sharedAverageMark.value !== averageMark) {
				sharedAverageMark.set(
					withTiming(averageMark!, createAnimationTimingConfig(averageMark!))
				);
			}
		};

		useImperativeHandle(ref, () => ({ focus: handleFocus }), []);

		return (
			<Paper style={styles.paper}>
				<ProgressChart
					style={styles.chart}
					diameter={windowWidth / 4}
					value={sharedAverageMark}
					maxValue={MAX_MARK}
					showOnZero
					formatValue={formatAverageMark}
				/>

				<View style={styles.data}>
					<Typography variant='h3' numberOfLines={2}>
						{name}
					</Typography>

					<Tag
						variant='primary'
						size='small'
						style={styles.tag}
						title={CONTROL_TYPE_DISPLAY[controlType]}
					/>

					{eventList && (
						<View style={styles.eventListContainer}>
							<EventList style={styles.eventList} eventList={eventList} />
						</View>
					)}
				</View>
			</Paper>
		);
	}
);

const stylesheet = createStyleSheet(theme => ({
	paper: {
		flexDirection: 'row',
		columnGap: theme.spacing.container,
		padding: theme.spacing.container
	},
	chart: {
		alignSelf: 'center'
	},
	data: {
		flex: 1,
		rowGap: 6
	},
	tag: {
		alignSelf: 'flex-start'
	},
	eventListContainer: {
		marginTop: 'auto'
	},
	eventList: {
		marginTop: 4,
		marginRight: 4
	}
}));
