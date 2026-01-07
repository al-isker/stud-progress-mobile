import { StyleProp, ViewStyle } from 'react-native';
import { IOScrollView } from 'react-native-intersection-observer';
import { useUnistyles } from 'react-native-unistyles';
import { useRequestNotificationPermissions } from '@/entities/push-notification';
import { SubjectRatingListType } from '@/entities/subject';
import { RefreshControl } from '@/shared/ui/refresh-control';
import { IOCard } from '../io-card/IOCard';

type IOListProps = {
	contentContainerStyle?: StyleProp<ViewStyle>;
	style?: StyleProp<ViewStyle>;
	subjectRatingList: SubjectRatingListType;
	refreshing: boolean;
	onRefresh: () => void;
};

export const IOList = ({
	contentContainerStyle,
	style,
	subjectRatingList,
	refreshing,
	onRefresh
}: IOListProps) => {
	const { theme } = useUnistyles();

	useRequestNotificationPermissions();

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
				<IOCard key={subjectRating.id} subjectRating={subjectRating} />
			))}
		</IOScrollView>
	);
};
