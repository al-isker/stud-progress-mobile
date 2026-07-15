import { Ref, useImperativeHandle } from 'react';
import { router } from 'expo-router';
import { Text, View } from 'react-native';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import {
	ControlType,
	MAX_MARK,
	SubjectRatingListItemType,
	formatAverageMark
} from '@/entities/subject';
import { routes } from '@/shared/config/navigation';
import { Paper } from '@/shared/ui/paper';
import { Pressable } from '@/shared/ui/pressable';
import {
	ProgressChart,
	getProgressAnimationConfig
} from '@/shared/ui/progress-chart';
import { EventList } from './EventList';

export type SubjectRatingCardContentRef = {
	inView: () => void;
};

type SubjectRatingCardContentProps = {
	ref: Ref<SubjectRatingCardContentRef>;
	subjectRating: SubjectRatingListItemType;
};

export const SubjectRatingCardContent = ({
	ref,
	subjectRating
}: SubjectRatingCardContentProps) => {
	const {
		id,
		name,
		controlType,
		ratingByCurrentSemester: { averageMark, eventList }
	} = subjectRating;

	const { theme } = useUnistyles();

	const sharedAverageMark = useSharedValue(averageMark === null ? null : 0);

	const handleInView = () => {
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
	};

	const handlePress = () => {
		router.push(routes.subjectByIdRating(id));
	};

	useImperativeHandle(ref, () => ({ inView: handleInView }), [
		averageMark,
		eventList
	]);

	return (
		<Paper style={styles.paper}>
			<Pressable
				feedbackColor={theme.colors.primaryAlpha(0.05)}
				style={styles.pressable}
				onPress={handlePress}
			>
				<ProgressChart
					diameter={90}
					strokeWidth={12}
					fontSize={22}
					style={styles.chart}
					sharedValue={sharedAverageMark}
					maxValue={MAX_MARK}
					showOnZero
					formatValue={formatAverageMark}
				/>

				<View style={styles.data}>
					<Text style={styles.name} numberOfLines={1}>
						{name}
					</Text>

					<ControlType
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
			</Pressable>
		</Paper>
	);
};

const styles = StyleSheet.create(theme => ({
	paper: {
		overflow: 'hidden'
	},
	pressable: {
		flexDirection: 'row',
		columnGap: theme.spacing * 1.25,
		padding: theme.spacing * 1.25
	},
	chart: {
		alignSelf: 'center'
	},
	data: {
		flex: 1,
		rowGap: 4
	},
	name: {
		lineHeight: 18,
		color: theme.colors.blackAlpha(0.9),
		fontSize: 18,
		fontFamily: theme.typography.fontFamilies.GolosTextSemiBold
	},
	controlType: {
		alignSelf: 'flex-start'
	},
	eventListContainer: {
		marginTop: 'auto',
		marginRight: -4
	},
	eventList: {
		marginTop: 4
	}
}));
