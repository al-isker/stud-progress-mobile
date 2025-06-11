import { forwardRef, useImperativeHandle } from 'react';
import { router } from 'expo-router';
import { Dimensions, View } from 'react-native';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { routes } from '@/shared/config/navigation';
import { Paper } from '@/shared/ui/paper';
import { ProgressChart } from '@/shared/ui/progress-chart';
import { Tag } from '@/shared/ui/tag';
import { Touchable } from '@/shared/ui/touchable';
import { Typography } from '@/shared/ui/typography';
import { createAnimationConfig } from '../../lib/animation/create-animation-config';
import { CONTROL_TYPE_DISPLAY } from '../../lib/const/control-type-display';
import { formatAverageMark } from '../../lib/format/format-average-mark';
import { MAX_MARK } from '../../model/const/max-mark';
import { useViewEventsMutation } from '../../model/hooks/use-view-events-mutation';
import { ISubjectRating } from '../../model/types/subject-rating';
import { EventList } from './EventList';

export type SubjectRatingRef = {
	inView: () => void;
};

type SubjectRatingProps = {
	data: ISubjectRating;
};

export const SubjectRating = forwardRef<SubjectRatingRef, SubjectRatingProps>(
	function SubjectRating({ data }, forwardedRef) {
		const {
			id,
			name,
			controlType,
			ratingByCurrentSemester: { averageMark, eventList }
		} = data;

		const { styles, theme } = useStyles(stylesheet);

		const windowWidth = Dimensions.get('window').width;

		const viewEventsMutation = useViewEventsMutation(id, eventList);

		const sharedAverageMark = useSharedValue(averageMark === null ? null : 0);

		const handleInView = () => {
			if (sharedAverageMark.value !== averageMark) {
				sharedAverageMark.value = withTiming(
					averageMark!,
					createAnimationConfig(sharedAverageMark.value!, averageMark!)
				);
			}

			viewEventsMutation.mutate();
		};

		const handlePress = () => {
			router.push(routes.ratingById(id));
		};

		useImperativeHandle(forwardedRef, () => ({ inView: handleInView }), [
			averageMark,
			eventList
		]);

		return (
			<Paper style={styles.paper}>
				<Touchable
					feedbackColor={theme.colors.primaryAlpha(0.05)}
					contentContainerStyle={styles.touchableContentContainer}
					onPress={handlePress}
				>
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
				</Touchable>
			</Paper>
		);
	}
);

const stylesheet = createStyleSheet(theme => ({
	paper: {
		overflow: 'hidden'
	},
	touchableContentContainer: {
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
