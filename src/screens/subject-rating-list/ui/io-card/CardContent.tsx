import { forwardRef, useImperativeHandle } from 'react';
import { router } from 'expo-router';
import { View } from 'react-native';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import {
	ControlType,
	MAX_MARK,
	SubjectRatingListItemType,
	formatAverageMark
} from '@/entities/subject';
import { routes } from '@/shared/config/navigation';
import { Paper } from '@/shared/ui/paper';
import {
	ProgressChart,
	createProgressAnimationConfig
} from '@/shared/ui/progress-chart';
import { Touchable } from '@/shared/ui/touchable';
import { Typography } from '@/shared/ui/typography';
import { EventList } from './EventList';

export type CardContentRef = {
	inView: () => void;
};

type CardContentProps = {
	subjectRating: SubjectRatingListItemType;
};

export const CardContent = forwardRef<CardContentRef, CardContentProps>(
	function CardContent({ subjectRating }, forwardedRef) {
		const {
			id,
			name,
			controlType,
			ratingByCurrentSemester: { averageMark, eventList }
		} = subjectRating;

		const { styles, theme } = useStyles(stylesheet);

		const sharedAverageMark = useSharedValue(averageMark === null ? null : 0);

		const handleInView = () => {
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
		};

		const handlePress = () => {
			router.push(routes.subjectByIdRating(id));
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
						diameter={theme.dimensions.window.width / 4}
						strokeWidth={theme.dimensions.window.width / 28}
						fontSize={theme.dimensions.window.width / 16}
						style={styles.chart}
						sharedValue={sharedAverageMark}
						maxValue={MAX_MARK}
						showOnZero
						formatValue={formatAverageMark}
					/>

					<View style={styles.data}>
						<Typography variant='h3' style={styles.name} numberOfLines={1}>
							{name}
						</Typography>

						<ControlType
							variant='primary'
							size='small'
							style={styles.controlType}
							controlType={controlType}
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
		columnGap: theme.spacing * 1.25,
		padding: theme.spacing * 1.25
	},
	chart: {
		alignSelf: 'center'
	},
	data: {
		flex: 1,
		rowGap: 6
	},
	name: {
		lineHeight: 18
	},
	controlType: {
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
