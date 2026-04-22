import { ScrollView, StyleProp, View, ViewStyle } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';
import { SubjectRatingDetailType } from '@/entities/subject';
import { RefreshControl } from '@/shared/ui/refresh-control';
import { AverageMarkSection } from '../average-mark-section/AverageMarkSection';
import { EventListSection } from '../event-list-section/EventListSection';
import { MainSection } from '../main-section/MainSection';
import { NavigationBar } from '../navigation-bar/NavigationBar';
import { StatsSection } from '../stats-section/StatsSection';

type ContentProps = {
	style?: StyleProp<ViewStyle>;
	contentContainerStyle?: StyleProp<ViewStyle>;
	subjectRatingDetail: SubjectRatingDetailType;
	refreshing: boolean;
	onRefresh: () => void;
};

export const Content = ({
	style,
	contentContainerStyle,
	subjectRatingDetail,
	refreshing,
	onRefresh
}: ContentProps) => {
	const { theme, rt } = useUnistyles();

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
				averageMark={subjectRatingDetail.ratingByCurrentSemester.averageMark}
			/>
			<MainSection
				name={subjectRatingDetail.name}
				controlType={subjectRatingDetail.controlType}
			/>
			<StatsSection
				impactLastMark={
					subjectRatingDetail.ratingByCurrentSemester.impactLastMark
				}
				daysWithoutMark={
					subjectRatingDetail.ratingByCurrentSemester.daysWithoutMark
				}
				studentPercentWithBelowAverageMark={
					subjectRatingDetail.ratingByCurrentSemester
						.studentPercentWithBelowAverageMark
				}
			/>
			<EventListSection
				eventList={subjectRatingDetail.ratingByCurrentSemester.eventList}
			/>
			<View style={{ marginBottom: rt.screen.height / 2.5 }} />
		</ScrollView>
	);
};
