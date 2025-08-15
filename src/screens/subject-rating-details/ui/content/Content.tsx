import { ScrollView, StyleProp, View, ViewStyle } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { SubjectRatingDetailsType } from '@/entities/subject';
import { RefreshControl } from '@/shared/ui/refresh-control';
import { AverageMarkSection } from '../average-mark-section/AverageMarkSection';
import { EventListSection } from '../event-list-section/EventListSection';
import { MainSection } from '../main-section/MainSection';
import { NavigationBar } from '../navigation-bar/NavigationBar';
import { StatsSection } from '../stats-section/StatsSection';

type ContentProps = {
	contentContainerStyle?: StyleProp<ViewStyle>;
	style?: StyleProp<ViewStyle>;
	subjectRatingDetails: SubjectRatingDetailsType;
	refreshing: boolean;
	onRefresh: () => void;
};

export const Content = ({
	contentContainerStyle,
	style,
	subjectRatingDetails,
	refreshing,
	onRefresh
}: ContentProps) => {
	const { theme } = useStyles();

	return (
		<ScrollView
			style={style}
			contentContainerStyle={[{ rowGap: theme.spacing }, contentContainerStyle]}
			showsVerticalScrollIndicator={false}
			contentOffset={{
				x: 0,
				y: theme.spacing + 32
			}}
			refreshControl={
				<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
			}
		>
			<NavigationBar />
			<AverageMarkSection
				averageMark={subjectRatingDetails.ratingByCurrentSemester.averageMark}
			/>
			<MainSection
				name={subjectRatingDetails.name}
				controlType={subjectRatingDetails.controlType}
			/>
			<StatsSection
				impactLastMark={
					subjectRatingDetails.ratingByCurrentSemester.impactLastMark
				}
				daysWithoutMark={
					subjectRatingDetails.ratingByCurrentSemester.daysWithoutMark
				}
				studentPercentWithBelowAverageMark={
					subjectRatingDetails.ratingByCurrentSemester
						.studentPercentWithBelowAverageMark
				}
			/>
			<EventListSection
				eventList={subjectRatingDetails.ratingByCurrentSemester.eventList}
			/>
			<View style={{ marginBottom: theme.dimensions.window.height / 4 }} />
		</ScrollView>
	);
};
