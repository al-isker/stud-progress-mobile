import { StyleProp, ViewStyle } from 'react-native';
import { IOScrollView } from 'react-native-intersection-observer';
import { useUnistyles } from 'react-native-unistyles';
import { requestNotificationPermissionsOnce } from '@/features/manage-notification-permissions';
import { SubjectRatingListType } from '@/entities/subject';
import { useMountEffect } from '@/shared/lib/react-hooks';
import { RefreshControl } from '@/shared/ui/refresh-control';
import { SubjectRatingCard } from '../subject-rating-card/SubjectRatingCard';

type SubjectRatingListProps = {
	contentContainerStyle?: StyleProp<ViewStyle>;
	style?: StyleProp<ViewStyle>;
	subjectRatingList: SubjectRatingListType;
	refreshing: boolean;
	onRefresh: () => void;
};

export const SubjectRatingList = ({
	contentContainerStyle,
	style,
	subjectRatingList,
	refreshing,
	onRefresh
}: SubjectRatingListProps) => {
	const { theme } = useUnistyles();

	useMountEffect(() => {
		requestNotificationPermissionsOnce();
	});

	return (
		<IOScrollView
			style={style}
			contentContainerStyle={[{ rowGap: theme.spacing }, contentContainerStyle]}
			showsVerticalScrollIndicator={false}
			rootMargin={{ top: -50, bottom: -50 }}
			refreshControl={
				<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
			}
		>
			{subjectRatingList.map(subjectRating => (
				<SubjectRatingCard
					key={subjectRating.id}
					subjectRating={subjectRating}
				/>
			))}
		</IOScrollView>
	);
};
